import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
  const pathname = useRef(window.location.pathname.slice(1));
  const [isCurrentWindow, setIsCurrentWindow] = useState(false);

  useEffect(() => {
    if (href) {
      const currentPage = href.slice(1);
      setIsCurrentWindow(
        pathname.current.toLowerCase() === currentPage.toLowerCase(),
      );
    }
  }, [href]); // Ensure effect runs when `href` changes

  if (href && _blank) {
    return (
      <a href={href} target="_blank">
        <button
          onClick={onClick}
          className={cn(
            "border-b-[2px] border-transparent text-lg transition-all duration-300 hover:border-green-500 hover:text-zinc-50",
            className,
          )}
        >
          {children}
        </button>
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href}>
        <button
          onClick={onClick}
          className={cn(
            `border-b-[2px] border-transparent text-lg ${
              isCurrentWindow &&
              "border-green-500 text-green-500 lg:text-zinc-50"
            } transition-all duration-300 hover:border-green-500 hover:text-zinc-50`,
            className,
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
        className,
      )}
    >
      {children}
    </button>
  );
}
