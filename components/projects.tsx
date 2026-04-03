"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group border border-slate-200 dark:border-slate-800 shadow-md bg-slate-50 dark:bg-slate-900">
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-teal-900 dark:text-teal-300 group-hover:text-teal-700 dark:group-hover:text-teal-200">
            {title}
          </CardTitle>
          <CardDescription className="text-black dark:text-slate-300">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-800 text-black dark:text-slate-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} source code on GitHub`}
            className="inline-flex items-center justify-center rounded-md px-4 py-2 font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo`}
            className="inline-flex items-center justify-center rounded-md px-4 py-2 font-medium bg-teal-700 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500 text-white transition-colors"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
