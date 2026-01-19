import { BsRobot } from "react-icons/bs";
import { FaCode, FaLanguage } from "react-icons/fa";
import { GiHangingSpider } from "react-icons/gi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoDesktopOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { SiHackaday, SiTryhackme } from "react-icons/si";
import { IconType } from "react-icons";

export interface ServiceData {
  key: string;
  icon: IconType;
}

export const servicesData: ServiceData[] = [
  { key: "restfulApi", icon: SiTryhackme },
  { key: "landingPages", icon: RiPagesLine },
  { key: "automations", icon: BsRobot },
  { key: "mobileApps", icon: HiOutlineDevicePhoneMobile },
  { key: "desktopApps", icon: IoDesktopOutline },
  { key: "fullStack", icon: FaCode },
  { key: "dataAnalysis", icon: MdOutlineAnalytics },
  { key: "webScraping", icon: GiHangingSpider },
  { key: "pentest", icon: SiHackaday },
  { key: "translations", icon: FaLanguage },
];
