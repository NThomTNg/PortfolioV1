import { FaReact, FaDocker, FaPython, FaBootstrap } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiCsharp,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiSvelte,
  SiMicrosoftazure,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: JSX.Element;
}

export default function TechGrid() {
  const technologies: TechItem[] = [
    {
      name: "Javascript",
      icon: <SiJavascript className="text-3xl w-8 h-8 text-yellow-400" />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript className="text-3xl w-8 h-8 text-blue-600" />,
    },
    {
      name: "C#",
      icon: <SiCsharp className="text-3xl w-8 h-8 text-purple-600" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-3xl w-8 h-8 text-sky-700" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-3xl w-8 h-8 text-blue-400" />,
    },
    {
      name: "Svelte",
      icon: <SiSvelte className="text-3xl w-8 h-8 text-orange-600" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-3xl w-8 h-8 text-purple-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-3xl w-8 h-8 text-teal-400" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-3xl w-8 h-8 text-blue-500" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-3xl w-8 h-8 text-cyan-600" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-3xl w-8 h-8 text-blue-500" />,
    },
    {
      name: "Azure DevOps",
      icon: <SiMicrosoftazure className="text-3xl w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-teal-900">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex items-center gap-3 border-2 border-teal-500 p-4 rounded-xl transition-all duration-300 
          hover:bg-gradient-to-br hover:border-teal-600 group relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
              {tech.icon}
            </div>
            <span className="font-semibold transition-all duration-300 group-hover:text-teal-800">
              {tech.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
