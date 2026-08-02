"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Netcompany() {
  const router = useRouter();

  const handleBackClick = () => {
    sessionStorage.setItem("returnToHome", "true");
    router.back();
  };

  return (
    <div id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="pt-24 pb-16 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <button
            className="mb-8 bg-transparent text-white hover:text-gray-200 flex items-center gap-2"
            onClick={handleBackClick}
          >
            <ArrowLeft className="h-5 w-5" /> Back to Home
          </button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Internship at Netcompany
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-4"
          >
            <span className="bg-emerald-800/80 px-4 py-1.5 rounded-full text-sm font-medium">
              Netcompany
            </span>
            <span className="bg-emerald-800/80 px-4 py-1.5 rounded-full text-sm font-medium">
              2026
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 text-slate-800 dark:text-slate-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-10"
        >
          <section>
            <h2 className="text-3xl font-bold mb-6 text-emerald-800 dark:text-emerald-300">Project Overview</h2>
            <p className="text-lg leading-relaxed mb-4">
              I worked as an IT Consultant Intern at Netcompany during the summer of 2026, in-house on a
              scalability focused project for a public sector customer. Netcompany is an IT consultancy
              delivering large-scale digital solutions. I worked as part of a team of professional consultants
              and fellow interns.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-emerald-800 dark:text-emerald-300">My Role</h2>
            <p className="text-lg leading-relaxed mb-4">
              My main responsibility was contributing to backend development on an existing production system
              built with .NET. Since the system was already live and serving a public sector customer, the work
              was centred on identifying and implementing improvements that would support its scalability on
              Azure as demand and load on the system increased. This meant working within an established
              codebase and understanding how the existing architecture behaved under growing usage before
              making changes to it.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I collaborated closely with senior consultants and other interns in a professional, client-facing
              team environment, following the development practices and workflows already established on the
              project. Working directly with a public sector customer gave me valuable experience in balancing
              technical requirements against delivery expectations, and showed me how software is planned,
              built and delivered in a consultancy setting.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-emerald-800 dark:text-emerald-300">Technologies Used</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><span className="font-medium">Backend:</span> .NET</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><span className="font-medium">Cloud:</span> Microsoft Azure</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><span className="font-medium">Containerization:</span> Docker</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><span className="font-medium">Database:</span> PostgreSQL</span>
              </li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
