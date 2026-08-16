"use client";

import { ArrowLeft, ExternalLink} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageCarousel from "@/components/ImageCarousel";
import Client1 from "@/app/assets/Client1.jpg";
import Client2 from "@/app/assets/Client2.jpg";
import Client3 from "@/app/assets/Client3.jpg";
import Client4 from "@/app/assets/Client4.jpg";
import Client5 from "@/app/assets/Client5.jpg";

const projectImages = [
  { src: Client1.src, alt: "Client screenshot 1" },
  { src: Client2.src, alt: "Client screenshot 2" },
  { src: Client3.src, alt: "Client screenshot 3" },
  { src: Client4.src, alt: "Client screenshot 4" },
  { src: Client5.src, alt: "Client screenshot 5" },
];

export default function Freelance() {
  const router = useRouter();

  const handleBackClick = () => {
    sessionStorage.setItem("returnToHome", "true");
    router.back();
  };

  return (
    <div id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="pt-24 pb-16 bg-gradient-to-r from-violet-700 to-violet-900 text-white">
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
            Freelance IT Consultant
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-4"
          >
            <span className="bg-violet-900/80 px-4 py-1.5 rounded-full text-sm font-medium">
              Freelance
            </span>
            <span className="bg-violet-900/80 px-4 py-1.5 rounded-full text-sm font-medium">
              IT Consulting
            </span>
            <span className="bg-violet-900/80 px-4 py-1.5 rounded-full text-sm font-medium">
              Present
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
            <h2 className="text-3xl font-bold mb-6 text-violet-800 dark:text-violet-300">Project Overview</h2>
            <p className="text-lg leading-relaxed mb-4">
              Alongside my studies, I work as a freelance IT consultant for smaller
              clients. The work covers everything from building and maintaining web solutions to advising on
              technical choices, and it means handling a project end to end. It involves
              collaborating with the client, agreeing on what should be delivered, and then building and shipping it.
            </p>
          </section>

          <section className="my-2">
            <ImageCarousel images={projectImages} />
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-violet-800 dark:text-violet-300">My Role</h2>
            <p className="text-lg leading-relaxed mb-4">
              For me, working freelance as a consultant means doing every aspect of a full team. 
              I handle the initial conversation with the client to
              understand what they actually need, translate that into a technical scope, and take
              responsibility for the development work itself. Where a client is less technical, a large part of
              the job is explaining the trade-offs in plain language so they can make an informed decision about
              what gets built.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Beyond just coding and programming, the assignments have taught me the parts of development work is more
              outside of the code. This includes estimating how long something will take, keeping a client updated as the work progresses,
              and delivering a product that is maintainable, that the client can keep using after the work ends.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-violet-800 dark:text-violet-300">Technologies Used</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-start space-x-2">
                <span className="text-violet-600 font-bold">&bull;</span>
                <span><span className="font-medium">Frontend:</span> React and TypeScript</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-violet-600 font-bold">&bull;</span>
                <span><span className="font-medium">Backend:</span> Node.js</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-violet-600 font-bold">•</span>
                <span><span className="font-medium">Database:</span> PostgreSQL</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-violet-600 font-bold">•</span>
                <span><span className="font-medium">Cloud:</span> Railway for hosting and deployment</span>
              </li>
            </ul>
          </section>

           {/* Client Links Section */}
          <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-violet-900 dark:text-violet-300">Client Links</h2>
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://www.dennorskafrikanskeorganisasjonen.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-200 transition-colors"
              >
                <ExternalLink size={24} />
                <span className="font-medium">Client 1</span>
              </a>
              <a 
                href="https://www.detnorsksudanskesenteret.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-200 transition-colors"
              >
                <ExternalLink size={24} />
                <span className="font-medium">Client 2</span>
              </a>
              <a 
                href="https://www.detsudanskeorganisasjonen.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-200 transition-colors"
              >
                <ExternalLink size={24} />
                <span className="font-medium">Client 3</span>
              </a>
              <a 
                href="https://www.norsksudanskeorganisasjonen.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-200 transition-colors"
              >
                <ExternalLink size={24} />
                <span className="font-medium">Client 4</span>
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
