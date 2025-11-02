"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import Link from "next/link";
import { NavButtons, navButtons } from "@/utils/navbar-buttons";
import { MenuButton } from "./menu-button";

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
  const [backgroundTransparency, setBackgroundTransparency] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (mobileOnly) {
      return setIsMobile(true);
    }

    if (windowWidth && windowWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth, mobileOnly]);

  useEffect(() => {
    if (transparentWhenTop) {
      const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
      };

      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
      }
    }
  }, [transparentWhenTop]);

  useEffect(() => {
    if (transparentWhenTop) {
      const backgroundTransparencyVar = clientWindowHeight / 600;

      if (backgroundTransparencyVar < 1) {
        setBackgroundTransparency(backgroundTransparencyVar);
      }
    }
  }, [clientWindowHeight, transparentWhenTop]);

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

  function handleToggleMenu(event: React.MouseEvent<HTMLElement | SVGElement>) {
    event.stopPropagation();

    setShowMenu((prev) => !prev);
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-30 w-full transition-all duration-200 ease-in lg:hidden ${
        showMenu && "!bg-[#000d]"
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

        <MdOutlineMenuOpen
          size={35}
          className={`mx-3 text-zinc-100 transition-all duration-200 ease-in ${
            showMenu && "rotate-180"
          }`}
          onClick={(event) => handleToggleMenu(event)}
        />
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
              <React.Fragment key={button.title + idx}>
                <MenuButton
                  className="w-full border-b-0 text-center text-2xl font-bold"
                  href={button.href}
                  _blank={button._blank}
                >
                  {button.title}
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
  return (
    <nav
      className={`fixed top-0 z-30 w-full ${!transparentWhenTop && "backdrop-blur-sm"}`}
      style={{
        background: transparentWhenTop
          ? `rgba(0, 0, 0, ${backgroundTransparency})`
          : "#000d",
      }}
    >
      <div className="mx-auto hidden w-full max-w-[1320px] items-center justify-between px-2 py-4 lg:flex">
        <NavbarLogo />

        <div className="mr-3 flex items-center justify-center gap-5">
          {navButtons.map((button, idx) => {
            return (
              <React.Fragment key={button.title + idx}>
                <MenuButton href={button.href} _blank={button._blank}>
                  {button.title}
                </MenuButton>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
