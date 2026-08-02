"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void>; finished: Promise<void> };
};

const STARS = [
  { top: "26%", left: "24%", size: 2.5, delay: 0 },
  { top: "62%", left: "34%", size: 1.5, delay: 0.08 },
  { top: "36%", left: "70%", size: 2, delay: 0.16 },
];

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = mounted && currentTheme === "dark";

  const applyTheme = useCallback(
    (next: "light" | "dark") => {
      setTheme(next);
      // next-themes writes the class in an effect; do it here too so the
      // view-transition snapshot is taken with the new theme already applied.
      const root = document.documentElement;
      root.classList.toggle("dark", next === "dark");
      root.style.colorScheme = next;
    },
    [setTheme]
  );

  const handleToggle = useCallback(() => {
    const next: "light" | "dark" = isDark ? "light" : "dark";
    const doc = document as ViewTransitionDocument;

    if (prefersReducedMotion || typeof doc.startViewTransition !== "function") {
      applyTheme(next);
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    // Distance from the button to the furthest corner of the viewport.
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const root = document.documentElement;
    // Freeze ordinary colour transitions so only the circular wipe is visible.
    root.classList.add("view-transition-active");

    const transition = doc.startViewTransition(() => {
      flushSync(() => applyTheme(next));
    });

    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {
        /* transition was skipped — the theme still changed */
      });

    transition.finished
      .catch(() => undefined)
      .finally(() => root.classList.remove("view-transition-active"));
  }, [applyTheme, isDark, prefersReducedMotion]);

  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 200, damping: 20, mass: 0.6 };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleToggle}
      className="group fixed top-5 right-4 md:right-8 z-[60] h-11 w-11 overflow-hidden rounded-full border border-teal-700/40 shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:focus-visible:ring-teal-300 dark:focus-visible:ring-offset-slate-950"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      disabled={!mounted}
    >
      {/* Day sky */}
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-amber-100"
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut" }}
      />
      {/* Night sky */}
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950"
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut" }}
      />

      {/* Stars, only out at night */}
      {STARS.map((star) => (
        <motion.span
          key={`${star.top}-${star.left}`}
          aria-hidden
          className="absolute rounded-full bg-teal-100"
          style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
          animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.35, delay: isDark ? 0.2 + star.delay : 0, ease: "easeOut" }
          }
        />
      ))}

      {/* Dial: twice the button height, spun 180° so the icons swap places */}
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 h-[88px] w-11"
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={spring}
      >
        <span className="absolute inset-x-0 top-0 flex h-11 items-center justify-center text-amber-500">
          <Sun className="h-5 w-5" />
        </span>
        <span className="absolute inset-x-0 top-11 flex h-11 rotate-180 items-center justify-center text-teal-200">
          <Moon className="h-5 w-5" />
        </span>
      </motion.span>
    </button>
  );
}
