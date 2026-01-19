export interface NavButtons {
  titleKey: string;
  href: string;
  className?: string;
  _blank: boolean;
}

export const navButtons: NavButtons[] = [
  {
    titleKey: "home",
    href: "/",
    _blank: false,
  },
  {
    titleKey: "about",
    href: "/about",
    _blank: false,
  },
  {
    titleKey: "resume",
    href: "/resume",
    _blank: false,
  },
  {
    titleKey: "portfolio",
    href: "/portfolio",
    _blank: false,
  },
  {
    titleKey: "services",
    href: "/services",
    _blank: false,
  },
  {
    titleKey: "contact",
    href: "mailto:heitormbonfim@gmail.com?subject=I%20checked%20your%20website&body=Hello,%20Heitor",
    _blank: true,
  },
];
