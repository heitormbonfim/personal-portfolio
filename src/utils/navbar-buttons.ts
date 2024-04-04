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
    href: "https://mailto:heitormbonfim@gmail.com",
    _blank: true,
  },
];
