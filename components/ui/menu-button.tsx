"use client";

import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";

interface MenuButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  _blank?: boolean;
}

export function MenuButton({
  className,
  children,
  onClick,
  href,
  _blank,
}: MenuButtonProps) {
  const pathname = usePathname();
  const [isCurrentWindow, setIsCurrentWindow] = useState(false);

  useEffect(() => {
    if (href) {
      const currentPage = href.slice(1);
      const currentPathname = pathname.slice(1);
      setIsCurrentWindow(
        currentPathname.toLowerCase() === currentPage.toLowerCase()
      );
    }
  }, [href, pathname]);

  if (href && _blank) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button
          onClick={onClick}
          className={cn(
            "border-b-[2px] border-transparent text-lg transition-all duration-300 hover:border-green-500 hover:text-zinc-50",
            className
          )}
        >
          {children}
        </button>
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <button
          onClick={onClick}
          className={cn(
            `border-b-[2px] border-transparent text-lg ${
              isCurrentWindow &&
              "border-green-500 text-green-500 lg:text-zinc-50"
            } transition-all duration-300 hover:border-green-500 hover:text-zinc-50`,
            className
          )}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "border-b-[2px] border-transparent text-lg transition-all duration-300 hover:border-green-500 hover:text-zinc-50",
        className
      )}
    >
      {children}
    </button>
  );
}
