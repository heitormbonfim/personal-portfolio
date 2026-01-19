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
import { IconType } from "react-icons";

export interface SkillData {
  name: string;
  icon: IconType;
  level: "advanced" | "intermediate" | "noob";
}

export const aboutData = {
  img: "/assets/about.webp",
  skills: [
    { name: "TypeScript", icon: SiTypescript, level: "advanced" },
    { name: "Golang", icon: SiGo, level: "intermediate" },
    { name: "Java", icon: FaJava, level: "intermediate" },
    { name: "Python", icon: SiPython, level: "intermediate" },
    { name: "NodeJS", icon: FaNodeJs, level: "advanced" },
    { name: "ExpressJS", icon: SiExpress, level: "advanced" },
    { name: "NestJS", icon: SiNestjs, level: "noob" },
    { name: "Gin gonic", icon: FaBeer, level: "intermediate" },
    { name: "Springboot", icon: SiSpringboot, level: "noob" },
    { name: "MongoDB", icon: SiMongodb, level: "advanced" },
    { name: "Postgres", icon: SiPostgresql, level: "advanced" },
    { name: "React", icon: SiReact, level: "advanced" },
    { name: "NextJS", icon: SiNextdotjs, level: "intermediate" },
    { name: "VueJS", icon: SiVuedotjs, level: "intermediate" },
    { name: "Nuxt", icon: SiNuxtdotjs, level: "intermediate" },
    { name: "Electron", icon: SiElectron, level: "intermediate" },
    { name: "Tauri", icon: SiTauri, level: "noob" },
    { name: "React Native", icon: TbBrandReactNative, level: "noob" },
    { name: "Wordpress", icon: SiWordpress, level: "noob" },
    { name: "Docker", icon: SiDocker, level: "intermediate" },
    { name: "Ansible", icon: SiAnsible, level: "advanced" },
    { name: "Linux", icon: SiLinux, level: "advanced" },
    { name: "Kali Linux", icon: SiKalilinux, level: "intermediate" },
    { name: "Cybersecurity", icon: SiCyberdefenders, level: "noob" },
  ] as SkillData[],
  spotifyPlaylist:
    "https://open.spotify.com/playlist/7ANHh0Q9wCpwnA06pkUj4J?si=21481610592a4036",
};

export function calculateDate(year: string): number {
  const dob = new Date(year);
  const today = new Date();
  const diffMs = today.getTime() - dob.getTime();
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
}
