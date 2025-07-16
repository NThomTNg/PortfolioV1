"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageCarousel from "@/components/ImageCarousel";
import Praksis1 from "@/app/assets/Praksis1.jpg";
import Praksis2 from "@/app/assets/Praksis2.png";
import Praksis3 from "@/app/assets/Praksis3.jpg";

const projectImages = [
  { src: Praksis1.src, alt: "Intern screenshot 1" },
  { src: Praksis2.src, alt: "Intern screenshot 2" },
  { src: Praksis3.src, alt: "Intern screenshot 3" },
];

export default function BachelorProject() {
  const router = useRouter();

  const handleBackClick = () => {
    sessionStorage.setItem("returnToHome", "true");
    router.back();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-24 pb-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
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
            Internship at Swipload
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-4"
          >
            <span className="bg-blue-600/80 px-4 py-1.5 rounded-full text-sm font-medium">
              Swipload
            </span>
            <span className="bg-blue-600/80 px-4 py-1.5 rounded-full text-sm font-medium">
              2024
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
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Project Overview</h2>
            <p className="text-lg leading-relaxed mb-4">
              Swipload is a software development company focusing on developing transport planning and management software.
              During my internship at Swipload in 2024, I was tasked with working on a new feature of their application. This feature 
              was a dedicated page for drivers to view their upcoming trips, including details such as the destination, time, and the cargo.
              With three other interns, we worked together as frontend developers to develop this page using 
              SvelteKit and Typescript, as well as other technologies used by the company.
            </p>
          </section>

          {/* Image Carousel Section */}
          <section className="my-2">
            <ImageCarousel images={projectImages} />
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">My Role</h2>
            <p className="text-lg leading-relaxed mb-4">
              As a we were four interns working on the same project, I was responsible for coordinating the frontend development efforts
              and ensuring that our work aligned with the overall project goals. I collaborated closely with my fellow interns to split 
              tasks effectively and ensure that we met our deadlines. On a technical level, I focused on retrieving the necessary data from the backend
              and displaying it to the new page. I also worked on implementing the user interface and features that followed the design 
              specifications provided by the company. We worked closley with the product designer, as well with our team 
              lead that provided us with the necessary guidance and support. 
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Technologies Used</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><span className="font-medium">Frontend:</span> SvelteKit and Typescript</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><span className="font-medium">Backend:</span> C#</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><span className="font-medium">Database:</span> Azure Database</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><span className="font-medium">Containerization:</span> Docker to ensure consistant testing and running of the application</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Goals and Outcomes</h2>
            <p className="text-lg leading-relaxed mb-4">
              After 3 months of work, we were succsessful in delivering a fully functional page that met the requirements set by the company.
              The page allows drivers to view their upcoming trips, including details such as the destination, time, and cargo. As it was connected
              to the existing system, admins could easily manage the trips and update the information and send it to the drivers. The drivers coul also
              update their status and provide feedback on the trips in real time. This feature was said to be tested shortly after our internship ended.
              It was a great experience to work on a real-world project and collaborate with professionals in the field.
            </p>
          </section>

          {/* Project Links Section */}
          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">Project Links</h2>
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://nthomtng.github.io/PraksisNettSide/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Monitor size={24} />
                <span className="font-medium">Our internship website</span>
              </a>
              <a 
                href="https://www.swipload.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <ExternalLink size={24} />
                <span className="font-medium">Swipload website</span>
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
