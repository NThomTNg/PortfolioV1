"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageCarousel from "@/components/ImageCarousel";
import GroupPro1 from "@/app/assets/Grouppro1.jpg";
import GroupPro2 from "@/app/assets/Grouppro2.jpg";
import GroupPro3 from "@/app/assets/Grouppro3.jpg";
import GroupPro4 from "@/app/assets/Grouppro4.jpg";

const projectImages = [
  { src: GroupPro1.src, alt: "Group Project screenshot 1" },
  { src: GroupPro2.src, alt: "Group Project screenshot 2" },
  { src: GroupPro3.src, alt: "Group Project screenshot 3" },
  { src: GroupPro4.src, alt: "Group Project screenshot 3" },
];

export default function BachelorProject() {
  const router = useRouter();

  const handleBackClick = () => {
    sessionStorage.setItem("returnToHome", "true");
    router.back();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
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
            School Group Project for Nøsted
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-4"
          >
            <span className="bg-slate-600/80 px-4 py-1.5 rounded-full text-sm font-medium">
              Nøsted
            </span>
            <span className="bg-slate-600/80 px-4 py-1.5 rounded-full text-sm font-medium">
              2023
            </span>
            <span className="bg-slate-600/80 px-4 py-1.5 rounded-full text-sm font-medium">
              UIA
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Project Overview</h2>
            <p className="text-lg leading-relaxed mb-4">
              The project was a cooperation with Nøsted, a company specializing in the design, 
              production, and delivery of chains, forestry tracks, tractor implements, and lifting 
              and mooring equipment. Operating under the brands TRYGG, IGLAND, and FRAM, the company 
              offers a diverse range of products and services. Our role was to help them develop a a 
              digital solution for them to process service orders from their customers. Before they had 
              to do this manually, by phone or email. We developed a web application that allows their 
              customers to create service orders, and Nøsted to administrate and process these orders.
            </p>
          </section>

          {/* Image Carousel Section */}
          <section className="my-2">
            <ImageCarousel images={projectImages} />
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">My Role</h2>
            <p className="text-lg leading-relaxed mb-4">
              This was the first real project I worked on with a group of students where we 
              had to not only think about the technical aspects of the project, but also the 
              design, user experience, and system architecture. We also had a close dialouge 
              with the company, keeping them frequently updated on our progress. This project was a 
              great learning experience for me, where I learned alot about working with C# and .NET 
              which I was not familiar with before. I also got to use Docker in practise for the first 
              time, which helped me grasp how to work with containers and how to deploy applications in a 
              more efficient way. During the projects time, I got to develop my backend skills alot, and it
              was fun learning how to set up, and inject data into a database. Working with fellow students was a 
              great experience, as we all had different skills and knowledge that we could share with each other.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Technologies Used</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-start space-x-2">
                <span className="text-slate-600 font-bold">•</span>
                <span><span className="font-medium">Frontend:</span> Razor Syntax</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-slate-600 font-bold">•</span>
                <span><span className="font-medium">Backend:</span> C#</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-slate-600 font-bold">•</span>
                <span><span className="font-medium">Database:</span> MariaDB and MySQL</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-slate-600 font-bold">•</span>
                <span><span className="font-medium">Containerization:</span> Docker</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Goals and Outcomes</h2>
            <p className="text-lg leading-relaxed mb-4">
              We achieve our goal of making a working application that could be used by the company to process service orders.
              The application allows administrators to create, update, and delete service orders, as well as view the status of each order.
              It is also possible for administrators to change the roles of users, and create reports to each service order. During our
              exam we got positive feedback from the company and professors, and we were happy with the result of our work.
            </p>
          </section>

          {/* Project Links Section */}
          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Project Link</h2>
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://github.com/jonaslefdal/AdminDesk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
              >
                <Github size={24} />
                <span className="font-medium">GitHub Repository</span>
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
