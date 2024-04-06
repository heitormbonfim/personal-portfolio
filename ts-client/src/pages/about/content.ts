import { SkillCardProps } from "@/components/about/skill-card";
import { FaNodeJs } from "react-icons/fa";
import {
  SiDjango,
  SiDocker,
  SiElectron,
  SiExpress,
  SiGnubash,
  SiJavascript,
  SiKalilinux,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

export const content = {
  title: "Software Developer & Ethical Hacker",

  description:
    "I live and breathe software development, where every line of code is a brushstroke of innovation. When not coding, I'm an ethical hacker, safeguarding digital realms. And in moments of calm, I'm a writer, spinning tales that inspire and captivate. Each pursuit fuels my passion for creativity and exploration.",

  arrowInfos: [
    {
      title: "Age",
      content: calculateDate("2000-01-27").toString(),
    },
    {
      title: "Phone",
      content: "+5588993205605",
    },
    {
      title: "Location",
      content: "Brazil, CE",
    },
    {
      title: "Degrees",
      content: "High School",
    },
    {
      title: "Education",
      content: "FreeCodeCamp.org",
    },
    {
      title: "Years of Experience",
      content: calculateDate("2022-01-01").toString(),
    },
    {
      title: "Freelance",
      content: "Available",
    },
    {
      title: "Email",
      content: "heitormbonfim@gmail.com",
    },
    {
      title: "Languages",
      content: "Portuguese and English",
    },
  ],

  description2: `<strong class="text-green-400 text-lg">Who is Heitor?</strong> He's a former English teacher and now a modern wizard, weaving spells with zeros and ones! In 2020, captivated by the endless possibilities of computer programming, he embarked on a journey into the world of software development. During the pandemic, Heitor discovered the magic of coding—a realm where creativity meets science. He's a proactive and ambitious individual who follows the Stoic philosophy, believing in the power of self-improvement to make the world better. He views computers as magical tools, enabling us to create, connect, and transform lives. In the digital realm, Heitor sees himself as one of the wizards, crafting innovative solutions and shaping new worlds.`,

  skills: [
    {
      name: "React",
      icon: SiReact,
      level: "advanced",
    },
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
      name: "MongoDB",
      icon: SiMongodb,
      level: "advanced",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: "advanced",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      level: "advanced",
    },
    {
      name: "NextJS",
      icon: SiNextdotjs,
      level: "intermediate",
    },
    {
      name: "Electron",
      icon: SiElectron,
      level: "intermediate",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      level: "intermediate",
    },
    {
      name: "Python",
      icon: SiPython,
      level: "advanced",
    },
    {
      name: "Django",
      icon: SiDjango,
      level: "noob",
    },
    {
      name: "Wordpress",
      icon: SiWordpress,
      level: "noob",
    },
    {
      name: "Linux",
      icon: SiLinux,
      level: "advanced",
    },
    {
      name: "Bash",
      icon: SiGnubash,
      level: "intermediate",
    },
    {
      name: "Kali Linux",
      icon: SiKalilinux,
      level: "intermediate",
    },
    {
      name: "Docker",
      icon: SiDocker,
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
