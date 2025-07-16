"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageCarousel from "@/components/ImageCarousel";
import Bachelor1 from "@/app/assets/Bachelor1.jpg";
import Bachelor2 from "@/app/assets/Bachelor2.jpg";
import Bachelor3 from "@/app/assets/Bachelor3.jpg";

const projectImages = [
  { src: Bachelor1.src, alt: "Bachelor screenshot 1" },
  { src: Bachelor2.src, alt: "Bachelor screenshot 2" },
  { src: Bachelor3.src, alt: "Bachelor screenshot 3" },
];

export default function BachelorProject() {
  const router = useRouter();

  const handleBackClick = () => {
    sessionStorage.setItem("returnToHome", "true");
    router.back();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-24 pb-16 bg-gradient-to-r from-orange-500 to-orange-700 text-white">
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
            Bachelor Project: GeoGPT
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-4"
          >
            <span className="bg-orange-700/80 px-4 py-1.5 rounded-full text-sm font-medium">
              Kristiansand Kommune
            </span>
            <span className="bg-orange-700/80 px-4 py-1.5 rounded-full text-sm font-medium">
              Kartverket
            </span>
            <span className="bg-orange-700/80 px-4 py-1.5 rounded-full text-sm font-medium">
              UIA
            </span>
            <span className="bg-orange-700/80 px-4 py-1.5 rounded-full text-sm font-medium">
              2025
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 text-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-10"
        >
          <section>
            <h2 className="text-3xl font-bold mb-6 text-orange-900">Bachelor Overview</h2>
            <p className="text-lg leading-relaxed mb-4">
              This bachelor thesis project is a collaboration with Kristiansand
              Kommune and Kartverket to develop a GIS solution using LLM (Large
              Language Models). The project's goal was to make a working MVP (minimal viable product)
              from a proof of concept to explore how LLMs can
              enhance geographic information systems, making them more intuitive
              and usable for users without extensive GIS knowledge.
            </p>
          </section>

          {/* Image Carousel Section */}
          <section className="my-2">
            <ImageCarousel images={projectImages} />
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-orange-900">My Role</h2>
            <p className="text-lg leading-relaxed mb-4">
              As the Group Project Manager, I was responsible for coordinating the
              team's efforts, ensuring deadlines were met, and maintained
              communication between stakeholders. On a technical level, I was involved
              in the development of the frontend part of the project, focusing on
              creating functionality that allows users to interact with the GIS
              system. This included implementing map functionality, dataset searching,
              and conversation features that allow users to chat with the integrated AI chatbot.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-orange-900">Technologies Used</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><span className="font-medium">Frontend:</span> Next.js and Typescript</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><span className="font-medium">Backend:</span> Python</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><span className="font-medium">AI & LLM:</span> RAG (Retrival-Augmented Generation) with Langchain and Langgraph</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><span className="font-medium">Database:</span> pgvector for storing and retrival</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><span className="font-medium">Containerization:</span> Docker to ensure consistant testing and running of the application</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-orange-900">Goals and Outcomes</h2>
            <p className="text-lg leading-relaxed mb-4">
              The project reached its goal of creating a working MVP that
              demonstrates the potential of LLMs in GIS applications. The team completed the project in May of 2025,
              where we presented our application to Kristiansand Kommune.
              In June we presented our project during a general
              company meeting at Kartverket, where we shared the functionality and the 
              potential future applications of our work to the entire company. It was 
              later presented in June by Kartverket to the Norwegian government during a press 
              confrence about digitalisation with the 
              use of AI.
            </p>
          </section>

          {/* Project Links Section */}
          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-orange-900">Project Links</h2>
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://github.com/kartverket/geogpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-700 hover:text-orange-900 transition-colors"
              >
                <Github size={24} />
                <span className="font-medium">GitHub Repository</span>
              </a>
              <a 
                href="https://www.youtube.com/watch?v=gBn2UN6ycjs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-700 hover:text-orange-900 transition-colors"
              >
                <ExternalLink size={24} />
                <span className="font-medium">Live Demo</span>
              </a>
              <a 
                href="https://www.regjeringen.no/no/tema/arbeidsliv/Statlig-arbeidsgiverpolitikk/konferanser/lanseringsseminar190625/id3108382/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-700 hover:text-orange-900 transition-colors"
              >
                <ExternalLink size={24} />
                <span className="font-medium">Press confrence presentation</span>
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
