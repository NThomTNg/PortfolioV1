"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from "@/components/projects";
import ExperienceCard from "@/components/experience";
import Navbar from "@/components/navbar";
import BackToTop from "@/components/backToTop";
import TechGrid from "@/components/techGrid";
import Bilde from "@/app/assets/Thomas.png";
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

    const savedPosition = sessionStorage.getItem("homeScrollPosition");
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }, 0);
    }
    window.addEventListener("beforeunload", saveScrollPosition);

    const handleRouteChangeStart = () => {
      saveScrollPosition();
    };

    window.addEventListener("click", (e) => {
      if (
        e.target instanceof HTMLAnchorElement ||
        (e.target instanceof Element &&
          e.target.closest('[data-is-experience-card="true"]'))
      ) {
        saveScrollPosition();
      }
    });

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
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
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <BackToTop />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white px-4 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Thomas Nguyen
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A passionate full-stack developer specializing in modern web
            technologies
          </p>
        </motion.div>
        <div className="absolute bottom-8 flex gap-4">
          <a
            href="https://github.com/NThomTNg"
            target="_self"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6 text-white hover:text-slate-300 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-nguyen-024860253/"
            target="_self"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6 text-white hover:text-slate-300 transition-colors" />
          </a>
          <a
            href="mailto:nt.thom.ng@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-6 w-6 text-white hover:text-slate-300 transition-colors" />
          </a>
        </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-900">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-slate-700 mb-4">
                  My name is Thomas Nguyen. I'm a 23 year old IT student from
                  Trondheim, currently attending NTNU. I'm
                  working on my skills to become a skilled fullstack developer.
                  My passion lies in developing web applications and learning
                  new technologies.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  As I have been working with multiple different projects, I
                  have accumulated a lot of experience in different
                  technologies. I am currently working on a wiki project using SvelteKit.
                </p>
                <p className="text-lg text-slate-700">
                  When I'm not coding, you can find me playing video games,
                  going to the gym, reading books, or spending time with my
                  friends.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-72 rounded-xl overflow-hidden border-2 border-teal-900">
                  <Image src={Bilde} alt="Profile" className="object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 bg-slate-100 pt-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-900 text-center">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-900">
              Experience
            </h2>
            <div className="grid gap-6">
              <ExperienceCard
                role="Bachelor | Group Project Manager"
                company="Kristiansand Kommune"
                period="2024 - 2025"
                description="Bachelor thesis with Krisitiansand Kommune and Kartverket."
                pageRoute="/bachelor-project"
              />
              <ExperienceCard
                role="Internship | Frontend Developer"
                company="Swipload"
                period="2024 - 2024"
                description="Svelte application development as a intern frontend developer."
                pageRoute="/swipload"
              />
              <ExperienceCard
                role="School Project | Groupmember"
                company="University of Agder"
                period="2023 - 2023"
                description="Group project developing a web application for Nøsted"
                pageRoute="/nosted"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-slate-100 pt-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-900">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Fantasy Wiki"
                description="A full-featured online store with product management, cart functionality, and payment processing."
                technologies={["SvelteKit", "TypeScript", "Stripe", "MongoDB"]}
                imageUrl={WikiImage.src}
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
              <ProjectCard
                title="Pc Parts Shop"
                description="A collaborative task manager with real-time updates, team workspaces, and analytics dashboard."
                technologies={["React", "Node.js", "Socket.io", "PostgreSQL"]}
                imageUrl={EShopImage.src}
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-teal-900 text-white">
        <div className="max-w-5xl mx-auto py-20 px-4 md:px-60 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out if you want to connect, discuss a project, or just say hello!
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:nt.thom.ng@gmail.com"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>nt.thom.ng@gmail.com</span>
            </a>
            <a
              href="https://github.com/NThomTNg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-nguyen-024860253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="border-t border-teal-800 pt-8 mt-8">
            <p className="text-sm text-teal-400">
              © {new Date().getFullYear()} Thomas Nguyen. All Rights Reserved.
            </p>
            <p className="text-sm text-teal-400 mt-2">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
