import {
  FaDatabase,
  FaGitAlt,
  FaMicrosoft,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVercel,
  SiDocker,
  SiExpress,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiSupabase,
  SiPython,
  SiMui,
  SiShadcnui,
  SiMysql,
  SiSwagger,
} from "react-icons/si";
import type { TechGroup } from "../types/tech-stack";

export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, iconColor: "text-sky-500" },
      { name: "Next.js", icon: SiNextdotjs, iconColor: "text-neutral-900" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "text-cyan-500" },
      { name: "Material UI", icon: SiMui, iconColor: "text-sky-600" },
      { name: "Shadcn", icon: SiShadcnui, iconColor: "text-neutral-900" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, iconColor: "text-green-600" },
      { name: "Express", icon: SiExpress, iconColor: "text-neutral-800" },
      {
        name: "ASP.NET Core Web API",
        icon: FaMicrosoft,
        iconColor: "text-indigo-600",
      },
      { name: "REST APIs", icon: FaDatabase, iconColor: "text-slate-500" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "Supabase", icon: SiSupabase, iconColor: "text-emerald-500" },
      { name: "SQL Server", icon: FaDatabase, iconColor: "text-rose-500" },
      { name: "MongoDB", icon: SiMongodb, iconColor: "text-green-700" },
      { name: "MySQL", icon: SiMysql, iconColor: "text-blue-700" },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython, iconColor: "text-blue-500" },
      { name: "TypeScript", icon: SiTypescript, iconColor: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, iconColor: "text-yellow-400" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, iconColor: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, iconColor: "text-neutral-900" },
      { name: "Docker", icon: SiDocker, iconColor: "text-sky-500" },
      { name: "Azure", icon: FaMicrosoft, iconColor: "text-blue-600" },
      { name: "AWS", icon: FaAws, iconColor: "text-gray-600" },
      { name: "Vercel", icon: SiVercel, iconColor: "text-neutral-900" },
      { name: "Postman", icon: SiPostman, iconColor: "text-orange-500" },
      { name: "Swagger", icon: SiSwagger, iconColor: "text-green-500" },
    ],
  },
];
