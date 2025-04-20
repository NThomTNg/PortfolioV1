"use client";

import { Calendar, Building, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  pageRoute: string;
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  pageRoute, // Changed parameter name
}: ExperienceCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(pageRoute);
  };

  return (
    <motion.div
      onClick={handleClick}
      data-is-experience-card="true"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="block cursor-pointer group"
    >
      <Card className="transition-all duration-300 bg-slate-100 border-l-4 border-l-teal-600 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-teal-500/10 group-hover:to-teal-500/5 transition-all duration-500"></div>
        <CardHeader className="pb-2 relative z-10">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl text-teal-900 group-hover:text-teal-700 transition-colors">
              {role}
            </CardTitle>
            <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
            <div className="flex items-center gap-1">
              <Building className="h-4 w-4 text-teal-700" />
              <span className="text-teal-900">{company}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-teal-700" />
              <span className="text-teal-900">{period}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-slate-700">{description}</p>
        </CardContent>
        <div className="h-1 w-0 bg-gradient-to-r from-teal-500 to-teal-700 absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
      </Card>
    </motion.div>
  );
}
