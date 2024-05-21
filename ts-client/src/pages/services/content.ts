import { BsRobot } from "react-icons/bs";
import { FaCode, FaLanguage } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { SiHackaday, SiTryhackme } from "react-icons/si";

export const content = {
  services: [
    {
      title: "Restful API Development",
      description: "Crafting efficient RESTful APIs using ExpressJS and Python.",
      icon: SiTryhackme,
    },
    {
      title: "Landing Pages",
      description: "Creating captivating landing pages leveraging NextJS, ReactJS, and Wordpress.",
      icon: RiPagesLine,
    },
    {
      title: "Automations",
      description: "Streamlining repetitive tasks through automation with NodeJS and Python.",
      icon: BsRobot,
    },
    {
      title: "Desktop Applications",
      description:
        "Building cross-platform desktop applications for Windows and Linux using ElectronJS.",
      icon: IoDesktopOutline,
    },
    {
      title: "Full Stack Applications",
      description:
        "Developing tailor-made full stack applications with ReactJS, MongoDB, and ExpressJS.",
      icon: FaCode,
    },
    {
      title: "Translations",
      description:
        "Providing real-time translation services between English and Portuguese, including document translation and website localization.",
      icon: FaLanguage,
    },
    {
      title: "Pentest",
      description:
        "Conducting penetration testing to identify vulnerabilities in systems and performing code reviews.",
      icon: SiHackaday,
    },
  ],
};
