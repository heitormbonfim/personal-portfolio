import { SkillCardProps } from "@/components/about/skill-card";
import { FaBeer, FaJava, FaNodeJs } from "react-icons/fa";
import {
  SiAnsible,
  SiCyberdefenders,
  SiDocker,
  SiElectron,
  SiExpress,
  SiGo,
  SiKalilinux,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTauri,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
const Img = "/assets/about.webp";

export const content = {
  title: "Software Developer & Ethical Hacker",

  img: Img,

  description:
    "I live and breathe software development, where every line of code is a brushstroke of innovation. When not coding, I'm an ethical hacker, safeguarding digital realms. And in moments of calm, I'm a writer, spinning tales that inspire and captivate. Each pursuit fuels my passion for creativity and exploration.",

  arrowInfos: [
    {
      title: "Full Name",
      content: "Heitor Macedo Bonfim",
    },
    {
      title: "Age",
      content: calculateDate("2000-01-27").toString(),
    },
    {
      title: "Phone",
      content: "+5511919934876",
    },
    {
      title: "Location",
      content: "Brazil, CE",
    },
    {
      title: "Education",
      content: "FreeCodeCamp, ProgBr, Java10x, Cisco, Rocketseat",
    },
    {
      title: "Years of Experience",
      content: calculateDate("2022-01-01").toString(),
    },
    {
      title: "Email",
      content: "heitormbonfim@gmail.com",
    },
    {
      title: "Languages",
      content: "Portuguese, English",
    },
  ],

  description2: `<strong class="text-green-500 text-lg">About Me</strong> A former English teacher who transitioned to software development in 2020. I work with technologies like TypeScript, Node.js, React, and Go, building web applications and exploring cybersecurity. I'm passionate about learning new technologies and improving my craft through hands-on projects. Guided by Stoic principles, I focus on continuous growth, writing clean code, and solving real problems. I enjoy collaborating with others and contributing to projects that make a difference.`,

  skills: [
    // Programming Languages
    {
      name: "TypeScript",
      icon: SiTypescript,
      level: "advanced",
    },
    {
      name: "Golang",
      icon: SiGo,
      level: "intermediate",
    },
    {
      name: "Java",
      icon: FaJava,
      level: "intermediate",
    },
    {
      name: "Python",
      icon: SiPython,
      level: "intermediate",
    },
    // Backend & Frameworks
    {
      name: "NodeJS",
      icon: FaNodeJs,
      level: "advanced",
    },
    {
      name: "ExpressJS",
      icon: SiExpress,
      level: "advanced",
    },
    {
      name: "NestJS",
      icon: SiNestjs,
      level: "noob",
    },
    {
      name: "Gin gonic",
      icon: FaBeer,
      level: "intermediate",
    },
    {
      name: "Springboot",
      icon: SiSpringboot,
      level: "noob",
    },
    // Databases
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: "advanced",
    },
    {
      name: "Postgres",
      icon: SiPostgresql,
      level: "advanced",
    },
    // Frontend Frameworks
    {
      name: "React",
      icon: SiReact,
      level: "advanced",
    },
    {
      name: "NextJS",
      icon: SiNextdotjs,
      level: "intermediate",
    },
    {
      name: "VueJS",
      icon: SiVuedotjs,
      level: "intermediate",
    },
    {
      name: "Nuxt",
      icon: SiNuxtdotjs,
      level: "intermediate",
    },
    // Desktop & Mobile
    {
      name: "Electron",
      icon: SiElectron,
      level: "intermediate",
    },
    {
      name: "Tauri",
      icon: SiTauri,
      level: "noob",
    },
    {
      name: "React Native",
      icon: TbBrandReactNative,
      level: "noob",
    },
    // CMS
    {
      name: "Wordpress",
      icon: SiWordpress,
      level: "noob",
    },
    // DevOps & Infrastructure
    {
      name: "Docker",
      icon: SiDocker,
      level: "intermediate",
    },
    {
      name: "Ansible",
      icon: SiAnsible,
      level: "advanced",
    },
    {
      name: "Linux",
      icon: SiLinux,
      level: "advanced",
    },
    // Security
    {
      name: "Kali Linux",
      icon: SiKalilinux,
      level: "intermediate",
    },
    {
      name: "Cybersecurity",
      icon: SiCyberdefenders,
      level: "noob",
    },
  ] as SkillCardProps[],

  spotifyPlaylist:
    "https://open.spotify.com/playlist/7ANHh0Q9wCpwnA06pkUj4J?si=21481610592a4036",
};

function calculateDate(year: string): number {
  const dob = new Date(year); // yy-dd-mm;
  const today = new Date();
  const diffMs = today.getTime() - dob.getTime();
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
}
