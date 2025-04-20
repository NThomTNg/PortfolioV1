"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NostedProject() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-20 pb-12 bg-gradient-to-r from-teal-800 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <Button
            variant="ghost"
            className="mb-6 text-white hover:bg-teal-700/50"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Nøsted Project
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">
              University Project
            </span>
            <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">
              Web Development
            </span>
            <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">
              2023
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-black prose-li:text-black"
        >
          <h2>Project Description</h2>
          <p>
            As part of my studies at the University of Agder, I participated in
            a group project to develop a web application for Nøsted. This
            project was a significant part of our practical curriculum, allowing
            us to apply our theoretical knowledge in a real-world scenario.
          </p>

          <h2>My Role</h2>
          <p>
            As a team member, I contributed to various aspects of the project,
            including frontend development, database design, and project
            documentation. I collaborated with a diverse team of students to
            meet the requirements set by both our university instructors and the
            client.
          </p>

          <h2>Technologies Used</h2>
          <ul>
            <li>HTML/CSS/JavaScript</li>
            <li>Database Management</li>
            <li>Version Control</li>
            <li>Project Management Tools</li>
          </ul>

          <h2>Outcomes and Achievements</h2>
          <p>
            Our team successfully delivered a functional web application that
            addressed the client's needs. This project enhanced my teamwork
            skills and provided valuable experience in managing client
            expectations and delivering a product according to specifications.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
