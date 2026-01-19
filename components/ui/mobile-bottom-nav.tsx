"use client";

import { type Locale } from "@/i18n/config";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NavButtons } from "@/utils/navbar-buttons";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useMemo } from "react";

interface MobileBottomNavProps {
  navButtons: NavButtons[];
}

export function MobileBottomNav({ navButtons }: MobileBottomNavProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  function switchLocale() {
    const newLocale: Locale = locale === "en" ? "pt-br" : "en";
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-zinc-800 bg-black/95 backdrop-blur-sm lg:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navButtons.map((button) => (
          <NavItem
            key={button.titleKey}
            href={button.href}
            icon={button.icon}
            isExternal={button._blank}
            pathname={pathname}
          />
        ))}
        <button
          onClick={switchLocale}
          className="flex flex-col items-center justify-center p-2 text-zinc-400 transition-colors hover:text-green-500"
          aria-label="Switch language"
        >
          <Globe size={24} />
          <span className="mt-1 text-xs">{locale === "en" ? "PT" : "EN"}</span>
        </button>
      </div>
    </nav>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  isExternal: boolean;
  pathname: string;
}

function NavItem({ href, icon: Icon, isExternal, pathname }: NavItemProps) {
  const isActive = useMemo(() => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  }, [href, pathname]);

  const className = cn(
    "flex flex-col items-center justify-center p-2 transition-colors",
    isActive ? "text-green-500" : "text-zinc-400 hover:text-zinc-100"
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <Icon size={24} />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <Icon size={24} />
    </Link>
  );
}
