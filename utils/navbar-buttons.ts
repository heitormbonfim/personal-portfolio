export interface NavButtons {
  title: string;
  href: string;
  className?: string;
  _blank: boolean;
}

export const navButtons: NavButtons[] = [
  {
    title: "Home",
    href: "/",
    _blank: false,
  },
  {
    title: "About",
    href: "/about",
    _blank: false,
  },
  {
    title: "Resume",
    href: "/resume",
    _blank: false,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    _blank: false,
  },

  {
    title: "Services",
    href: "/services",
    _blank: false,
  },
  {
    title: "Contact",
    href: "mailto:heitormbonfim@gmail.com?subject=I%20checked%20your%20website&body=Hello,%20Heitor",
    _blank: true,
  },
];
