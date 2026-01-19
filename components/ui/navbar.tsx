"use client";

import { Link } from "@/i18n/navigation";
import { NavButtons, navButtons } from "@/utils/navbar-buttons";
import { useTranslations } from "next-intl";
import React, {
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { LanguageSwitcher } from "./language-switcher";
import { MenuButton } from "./menu-button";

const subscribeToResize = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};
const getWindowWidth = () => window.innerWidth;
const getServerWidth = () => undefined as number | undefined;

interface Navbar extends NavbarTransparency {
  navButtons: NavButtons[];
}

interface NavbarTransparency {
  transparentWhenTop?: boolean;
  backgroundTransparency: number;
}

interface NavbarProps {
  transparentWhenTop?: boolean;
  mobileOnly?: boolean;
}

export default function Navbar({
  transparentWhenTop,
  mobileOnly,
}: NavbarProps) {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const windowWidth = useSyncExternalStore(
    subscribeToResize,
    getWindowWidth,
    getServerWidth
  );

  const isMobile = useMemo(() => {
    if (mobileOnly) return true;
    if (windowWidth && windowWidth < 1024) return true;
    return false;
  }, [windowWidth, mobileOnly]);

  const backgroundTransparency = useMemo(() => {
    if (transparentWhenTop) {
      const transparencyVar = clientWindowHeight / 600;
      return transparencyVar < 1 ? transparencyVar : 1;
    }
    return 0;
  }, [clientWindowHeight, transparentWhenTop]);

  useEffect(() => {
    if (transparentWhenTop) {
      const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [transparentWhenTop]);

  return (
    <>
      {isMobile ? (
        <MobileNavbar
          transparentWhenTop={transparentWhenTop}
          backgroundTransparency={backgroundTransparency}
          navButtons={navButtons}
        />
      ) : (
        <Desktop
          transparentWhenTop={transparentWhenTop}
          backgroundTransparency={backgroundTransparency}
          navButtons={navButtons}
        />
      )}
    </>
  );
}

function NavbarLogo() {
  return (
    <Link href="/">
      <span className="mx-3 border-transparent text-2xl font-bold duration-150 hover:border-b-2 hover:border-green-500 hover:text-zinc-50">
        Heitor M Bonfim
      </span>
    </Link>
  );
}

function MobileNavbar({
  transparentWhenTop,
  backgroundTransparency,
  navButtons,
}: Navbar) {
  const [showMenu, setShowMenu] = useState(false);
  const t = useTranslations("navigation");

  function handleToggleMenu(event: React.MouseEvent<HTMLElement | SVGElement>) {
    event.stopPropagation();

    setShowMenu((prev) => !prev);
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-30 w-full transition-all duration-200 ease-in lg:hidden ${
        showMenu && "bg-[#000d]!"
      }`}
      style={{
        background: transparentWhenTop
          ? `rgba(0, 0, 0, ${backgroundTransparency})`
          : "#000d",
      }}
    >
      <div
        className={`relative mx-auto flex w-full items-center justify-between px-2 py-4 ${
          showMenu && "backdrop-blur-sm"
        }`}
      >
        <NavbarLogo />

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <MdOutlineMenuOpen
            size={35}
            className={`mx-3 text-zinc-100 transition-all duration-200 ease-in ${
              showMenu && "rotate-180"
            }`}
            onClick={(event) => handleToggleMenu(event)}
          />
        </div>
      </div>

      <div
        className={`fixed z-30 h-full w-full backdrop-blur-sm transition-transform duration-200 ease-in ${
          !showMenu && "translate-x-full"
        } flex justify-end`}
        onClick={(event) => handleToggleMenu(event)}
      >
        <div
          className="flex h-full w-[60%] flex-col justify-start gap-2 bg-[#000d] p-5"
          onClick={(event) => event.stopPropagation()}
        >
          {navButtons.map((button, idx) => {
            return (
              <React.Fragment key={button.titleKey + idx}>
                <MenuButton
                  className="w-full border-b-0 text-center text-2xl font-bold"
                  href={button.href}
                  _blank={button._blank}
                >
                  {t(button.titleKey)}
                </MenuButton>
                <hr />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function Desktop({
  transparentWhenTop,
  backgroundTransparency,
  navButtons,
}: Navbar) {
  const t = useTranslations("navigation");

  return (
    <nav
      className={`fixed top-0 z-30 w-full ${!transparentWhenTop && "backdrop-blur-sm"}`}
      style={{
        background: transparentWhenTop
          ? `rgba(0, 0, 0, ${backgroundTransparency})`
          : "#000d",
      }}
    >
      <div className="mx-auto hidden w-full max-w-330 items-center justify-between px-2 py-4 lg:flex">
        <NavbarLogo />

        <div className="mr-3 flex items-center justify-center gap-5">
          {navButtons.map((button, idx) => {
            return (
              <React.Fragment key={button.titleKey + idx}>
                <MenuButton href={button.href} _blank={button._blank}>
                  {t(button.titleKey)}
                </MenuButton>
              </React.Fragment>
            );
          })}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
