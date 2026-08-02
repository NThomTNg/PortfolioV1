"use client";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BachelorProject() {
const router = useRouter();

const handleBackClick = () => {
    sessionStorage.setItem("returnToHome", "true");
    router.back();
};

return (
    <div id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950">
    <div className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
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
            Internship at Curio
        </motion.h1>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-4"
        >
            <span className="bg-yellow-500/80 px-4 py-1.5 rounded-full text-sm font-medium">
            Curio
            </span>
            <span className="bg-yellow-500/80 px-4 py-1.5 rounded-full text-sm font-medium">
            NTNU
            </span>
            <span className="bg-yellow-500/80 px-4 py-1.5 rounded-full text-sm font-medium">
            2025
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
            <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300">Project Overview</h2>
            <p className="text-lg leading-relaxed mb-4">
                I worked for 5 months as an intern system developer at Curio besides my studies. Curio is a startup
                focused on creating innovative solutions for educational institutions. My role involved
                contributing to the development of their core platform, which aims to enhance the learning
                experience through technology. I worked closely with a team of fellow interns with backgrounds
                in AI, IT and pedagogy, allowing us to combine our skills to build a user-friendly and effective educational tool.
            </p>
        </section>

        <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300">My Role</h2>
            <p className="text-lg leading-relaxed mb-4">
                As a system developer at Curio, my responsibilities included designing and implementing new features,
                optimizing existing code, and ensuring the overall performance and reliability of the platform.
                I was also involved in testing and debugging to maintain high-quality standards. I also contributed to 
                the development of the AI system to improve its effectiveness. This internship
                provided me with valuable hands-on experience, as well as letting me use my already acquired skills
                in software development, and the experience of working in a startup environment.
            </p>
        </section>

        <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300">Technologies Used</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <li className="flex items-start space-x-2">
                <span className="text-yellow-500 font-bold">•</span>
                <span><span className="font-medium">Frontend:</span> Typescript | Tanstack</span>
            </li>
            <li className="flex items-start space-x-2">
                <span className="text-yellow-500 font-bold">•</span>
                <span><span className="font-medium">Backend:</span> Convex</span>
            </li>
            <li className="flex items-start space-x-2">
                <span className="text-yellow-500 font-bold">•</span>
                <span><span className="font-medium">AI:</span> OpenAI Agent SDK</span>
            </li>
            <li className="flex items-start space-x-2">
                <span className="text-yellow-500 font-bold">•</span>
                <span><span className="font-medium">Database:</span> Convex</span>
            </li>
            </ul>
        </section>

          {/* Project Links Section */}
        <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-300">Project Links</h2>
            <div className="flex flex-wrap gap-6">
            <a 
                href="https://www.curiolearning.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-200 transition-colors"
            >
                <ExternalLink size={24} />
                <span className="font-medium">Company Website</span>
            </a>
            </div>
        </section>
        </motion.div>
    </div>
    </div>
);
}
