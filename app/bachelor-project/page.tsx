"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BachelorProject() {
  const router = useRouter();

  const handleBackClick = () => {
    sessionStorage.setItem("returnToHome", "true");
    router.back();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-20 pb-12 bg-gradient-to-r from-teal-800 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <Button
            variant="ghost"
            className="mb-6 text-white hover:bg-teal-700/50"
            onClick={handleBackClick}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Bachelor Project
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">
              Kristiansand Kommune
            </span>
            <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">
              Kartverket
            </span>
            <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">
              2024
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 text-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none text-black"
        >
          <h2 className="text-black font-bold text-2xl">Project Overview</h2>
          <p className="text-black">
            This bachelor thesis project is a collaboration with Kristiansand
            Kommune and Kartverket to develop a GIS solution using LLM (Large
            Language Models). The project aims to create innovative solutions
            for geographic information systems.
          </p>

          <h2 className="text-black font-bold text-2xl">My Role</h2>
          <p className="text-black">
            As the Group Project Manager, I'm responsible for coordinating the
            team's efforts, ensuring deadlines are met, and maintaining
            communication between stakeholders.
          </p>

          <h2 className="text-black font-bold text-2xl">Technologies Used</h2>
          <ul className="text-black">
            <li className="text-black">GIS Systems</li>
            <li className="text-black">Large Language Models</li>
            <li className="text-black">Web Development Technologies</li>
            <li className="text-black">Data Processing Tools</li>
          </ul>

          <h2 className="text-black font-bold text-2xl">Goals and Outcomes</h2>
          <p className="text-black">
            The project aims to investigate how large language models can be
            integrated with geographic information systems to create more
            intuitive and powerful mapping tools. This includes developing
            prototypes and conducting user testing to validate our approach.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
