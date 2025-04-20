"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-30`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-teal-800/70 backdrop-blur-sm rounded-full px-2 py-1 mt-5 border border-teal-700/30">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "bg-white text-teal-900"
                    : "text-white hover:bg-teal-700/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 text-white hover:bg-teal-700/50 border-none shadow-none"
              style={{ borderRadius: "99px" }}
            >
              CV
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4 z-50">
            <button
              className="p-2 rounded-full focus:outline-none bg-teal-800/90 backdrop-blur-sm border border-teal-700/30"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-teal-900 border-t border-teal-800 z-40 min-h-[300px]"
          style={{ position: "absolute", top: "0px", left: 0, right: 0 }}
        >
          <div className="px-4 pt-16 pb-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-2 rounded-md font-medium ${
                  activeSection === link.href.substring(1)
                    ? "bg-white text-teal-900"
                    : "text-white hover:bg-teal-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full justify-center text-white hover:bg-white hover:text-teal-900"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
