"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SwiploadInternship() {
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
            Swipload Internship
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">
              Frontend
            </span>
            <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">
              Svelte
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
          <h2 className="text-black font-bold text-2xl">Internship Overview</h2>
          <p className="text-black">
            During my internship at Swipload, I focused on frontend development
            using Svelte. This experience provided valuable insights into
            professional software development and agile methodologies in a
            real-world setting.
          </p>

          <h2 className="text-black font-bold text-2xl">My Contributions</h2>
          <p className="text-black">
            As a frontend developer intern, I contributed to building and
            enhancing the user interface for Swipload's applications. I worked
            closely with senior developers to implement new features and improve
            the existing codebase.
          </p>

          <h2 className="text-black font-bold text-2xl">Technologies Used</h2>
          <ul className="text-black">
            <li className="text-black">Svelte</li>
            <li className="text-black">JavaScript/TypeScript</li>
            <li className="text-black">CSS/SCSS</li>
            <li className="text-black">Version Control (Git)</li>
            <li className="text-black">Agile Development Tools</li>
          </ul>

          <h2 className="text-black font-bold text-2xl">Key Learnings</h2>
          <p className="text-black">
            This internship strengthened my frontend development skills and gave
            me practical experience with Svelte, which is known for its
            efficiency and component-based approach. I also learned about
            deployment processes, code reviews, and collaborative development.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
