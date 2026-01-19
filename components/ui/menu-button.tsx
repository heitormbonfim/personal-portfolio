"use client";

import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

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
  const isCurrentWindow = useMemo(() => {
    if (href) {
      const currentPage = href.slice(1);
      const currentPathname = pathname.slice(1);
      return currentPathname.toLowerCase() === currentPage.toLowerCase();
    }
    return false;
  }, [href, pathname]);

  if (href && _blank) {
    return (
      <Button
        variant="ghost"
        asChild
        className={cn(
          "h-auto rounded-none border-b-2 border-transparent p-0 text-lg transition-all duration-300 hover:border-green-500 hover:bg-transparent hover:text-zinc-50",
          className
        )}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      </Button>
    );
  }

  if (href) {
    return (
      <Button
        variant="ghost"
        asChild
        className={cn(
          `h-auto rounded-none border-b-2 border-transparent p-0 text-lg transition-all duration-300 hover:border-green-500 hover:bg-transparent hover:text-zinc-50 ${
            isCurrentWindow && "border-green-500 text-green-500 lg:text-zinc-50"
          }`,
          className
        )}
      >
        <Link href={href} onClick={onClick}>
          {children}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "h-auto rounded-none border-b-2 border-transparent p-0 text-lg transition-all duration-300 hover:border-green-500 hover:bg-transparent hover:text-zinc-50",
        className
      )}
    >
      {children}
    </Button>
  );
}
