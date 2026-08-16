"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from "@/components/projects";
import ExperienceCard from "@/components/experience";
import Navbar from "@/components/navbar";
import BackToTop from "@/components/backToTop";
import TechGrid from "@/components/techGrid";
import Bilde from "@/app/assets/thomi.jpg";
import WikiImage from "@/app/assets/project2.jpg";
import EShopImage from "@/app/assets/project1.jpg";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenAnimation");

    if (hasSeenAnimation === "true") {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasSeenAnimation", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const saveScrollPosition = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        sessionStorage.setItem("homeScrollPosition", scrollPosition.toString());
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLAnchorElement ||
        (target instanceof Element &&
          target.closest('a, [data-is-experience-card="true"]'))
      ) {
        saveScrollPosition();
      }
    };

    const savedPosition = sessionStorage.getItem("homeScrollPosition");
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }, 0);
    }

    window.addEventListener("beforeunload", saveScrollPosition);
    window.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
      window.removeEventListener("click", handleDocumentClick);
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-teal-950 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 0.2, 0.1],
              scale: [0.5, 1.2, 1.5],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              times: [0, 0.5, 1],
            }}
            className="w-64 h-64 border border-teal-500/20 rounded-full absolute"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 0.3, 0.1],
              scale: [0.7, 1.5, 2],
              rotate: [0, -45, -90],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              times: [0, 0.5, 1],
              delay: 0.5,
            }}
            className="w-64 h-64 border border-white/10 rounded-full absolute"
          />
        </div>

        {/* Main content container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10 flex flex-col items-center"
        >
          {/* Logo with text integrated */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-teal-900 font-bold text-5xl md:text-6xl"
              >
                TN
              </motion.span>
            </div>
          </motion.div>

          {/* Text appearing beside/below logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-white text-center mt-6"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="text-2xl font-bold mb-1"
            >
              Thomas Nguyen
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mb-2"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="text-teal-300"
            >
              Full-Stack Developer
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <BackToTop />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 dark:from-slate-900 dark:via-slate-950 dark:to-black text-white px-4 md:px-8"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-24 right-8 h-44 w-44 rounded-full bg-teal-300/20 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Thomas Nguyen
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A passionate full-stack developer specializing in modern web
            technologies
          </p>

        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 pt-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-900 dark:text-teal-300">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                  My name is Thomas Nguyen. I'm a 24 year old IT student from
                  Trondheim, currently attending NTNU. I'm
                  working on my skills to become a skilled fullstack developer.
                  My passion lies in developing web applications and learning
                  new technologies.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                  As I have been working with multiple different projects, I
                  have accumulated a lot of experience in different
                  technologies. I am currently working on a wiki project using SvelteKit.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  When I'm not coding, you can find me playing video games,
                  going to the gym, reading books, or spending time with my
                  friends.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-72 rounded-xl overflow-hidden border-2 border-teal-900 dark:border-teal-500">
                  <Image src={Bilde} alt="Profile" className="object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 bg-slate-100 dark:bg-slate-900 pt-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-900 dark:text-teal-300 text-center">
              Technologies & Skills
            </h2>
            <TechGrid />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-8 pt-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-900 dark:text-teal-300">
              Experience
            </h2>
            <div className="grid gap-6">
              <ExperienceCard
                role="Freelance | IT Consultant"
                company="Self-employed"
                period="2026 - Present"
                description="Freelance IT consulting and development work for clients."
                pageRoute="/freelance"
              />
              <ExperienceCard
                role="Internship | IT Consultant"
                company="Netcompany"
                period="2026 - 2026"
                description="Backend development and scalability work on a public sector project."
                pageRoute="/netcompany"
              />
              <ExperienceCard
                role="Internship | System Developer"
                company="Curio"
                period="2025 - 2026"
                description="System development internship at Curio."
                pageRoute="/curio"
              />
              <ExperienceCard
                role="Bachelor | Group Project Manager"
                company="Kristiansand Kommune"
                period="2024 - 2025"
                description="Bachelor thesis with Kristiansand Kommune and Kartverket."
                pageRoute="/bachelor-project"
              />
              <ExperienceCard
                role="Internship | Frontend Developer"
                company="Swipload"
                period="2024 - 2024"
                description="Svelte application development as an intern frontend developer."
                pageRoute="/swipload"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-slate-100 dark:bg-slate-900 pt-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-900 dark:text-teal-300">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Fantasy Wiki"
                description="A wiki style page filled with different articles that can be edited, uploaded or deleted."
                technologies={["SvelteKit", "TypeScript", "Express", "AzureDB", "Azure"]}
                imageUrl={WikiImage.src}
                githubUrl="https://github.com/NThomTNg/wikiProject"
                liveUrl="https://fantasywiki.vercel.app/"
              />
              <ProjectCard
                title="PC Parts Shop"
                description="A full-featured online store with product management, cart functionality, and payment processing."
                technologies={["React", "Typescript", "Node.js", "JSON"]}
                imageUrl={EShopImage.src}
                githubUrl="https://github.com/NThomTNg/ShoppingCart"
                liveUrl="https://nthomtng.github.io/ShoppingCart/"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-teal-900 dark:bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto py-20 px-4 sm:px-6 md:px-60 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out if you want to connect, discuss a project, or just say hello!
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
            <a
              href="mailto:nt.thom.ng@gmail.com"
              className="flex items-center justify-center gap-2 text-sm sm:text-base hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="break-all sm:break-normal">nt.thom.ng@gmail.com</span>
            </a>
            <a
              href="https://github.com/NThomTNg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm sm:text-base hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-nguyen-024860253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm sm:text-base hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="border-t border-teal-800 dark:border-slate-800 pt-8 mt-8">
            <p className="text-sm text-teal-400 dark:text-teal-300 mt-2">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
