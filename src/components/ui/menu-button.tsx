import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MenuButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => any;
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
  if (href && _blank) {
    return (
      <a href={href} target="_blank">
        <button
          onClick={onClick}
          className={cn(
            "text-lg border-b-[2px] border-transparent hover:border-green-400 hover:text-zinc-50 transition-all duration-300",
            className
          )}
        >
          {children}
        </button>
      </a>
    );
  } else if (href) {
    return (
      <Link to={href}>
        <button
          onClick={onClick}
          className={cn(
            "text-lg border-b-[2px] border-transparent hover:border-green-400 hover:text-zinc-50 transition-all duration-300",
            className
          )}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={cn(
          "text-lg border-b-[2px] border-transparent hover:border-green-400 hover:text-zinc-50 transition-all duration-300",
          className
        )}
      >
        {children}
      </button>
    );
  }
}
