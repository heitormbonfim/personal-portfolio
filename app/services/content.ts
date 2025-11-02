import { BsRobot } from "react-icons/bs";
import { FaCode, FaLanguage } from "react-icons/fa";
import { GiHangingSpider } from "react-icons/gi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoDesktopOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
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
      title: "Mobile Applications",
      description:
        "Building cross-platform mobile applications for Android and IOS with React Native or Ionic",
      icon: HiOutlineDevicePhoneMobile,
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
      title: "Data Analysis",
      description:
        "Datadata analysis service leverages Python's powerful ecosystem of libraries to deliver comprehensive, efficient, and insightful data analysis solutions",
      icon: MdOutlineAnalytics,
    },

    {
      title: "Web Scraping",
      description:
        "Web scraping service utilizes the robust libraries of Python and JavaScript to efficiently and accurately extract valuable data from websites. ",
      icon: GiHangingSpider,
    },
    {
      title: "Pentest",
      description:
        "Conducting penetration testing to identify vulnerabilities in systems and performing code reviews.",
      icon: SiHackaday,
    },
    {
      title: "Translations",
      description:
        "Providing real-time translation services between English and Portuguese, including document translation and website localization.",
      icon: FaLanguage,
    },
  ],
};
