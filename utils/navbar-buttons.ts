import {
  Briefcase,
  FileText,
  Home,
  LucideIcon,
  Mail,
  Settings,
  User,
} from "lucide-react";

export interface NavButtons {
  titleKey: string;
  href: string;
  icon: LucideIcon;
  className?: string;
  _blank: boolean;
}

export const navButtons: NavButtons[] = [
  {
    titleKey: "home",
    href: "/",
    icon: Home,
    _blank: false,
  },
  {
    titleKey: "about",
    href: "/about",
    icon: User,
    _blank: false,
  },
  {
    titleKey: "resume",
    href: "/resume",
    icon: FileText,
    _blank: false,
  },
  {
    titleKey: "portfolio",
    href: "/portfolio",
    icon: Briefcase,
    _blank: false,
  },
  {
    titleKey: "services",
    href: "/services",
    icon: Settings,
    _blank: false,
  },
  {
    titleKey: "contact",
    href: "mailto:heitormbonfim@gmail.com?subject=I%20checked%20your%20website&body=Hello,%20Heitor",
    icon: Mail,
    _blank: true,
  },
];
