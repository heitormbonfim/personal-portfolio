"use client";

import { type Locale } from "@/i18n/config";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NavButtons } from "@/utils/navbar-buttons";
import { Globe, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Button } from "./button";

interface MobileFABProps {
  navButtons: NavButtons[];
}

export function MobileFAB({ navButtons }: MobileFABProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("navigation");

  function switchLocale() {
    const newLocale: Locale = locale === "en" ? "pt-br" : "en";
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  }

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <div className="fixed right-4 bottom-6 z-40 lg:hidden">
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Nav items */}
      <div
        className={cn(
          "absolute right-0 bottom-14 flex flex-col-reverse gap-2 transition-all duration-300",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        {/* Language switcher */}
        <button
          onClick={switchLocale}
          className="flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-900 py-2 pr-4 pl-3 text-zinc-100 shadow-lg transition-colors hover:border-green-500 hover:text-green-500"
          aria-label="Switch language"
        >
          <Globe size={18} />
          <span className="text-sm font-medium">
            {locale === "en" ? "Português" : "English"}
          </span>
        </button>

        {/* Nav buttons */}
        {navButtons.map((button) => (
          <NavItem
            key={button.titleKey}
            href={button.href}
            icon={button.icon}
            title={t(button.titleKey)}
            isExternal={button._blank}
            pathname={pathname}
            onClick={handleNavClick}
          />
        ))}
      </div>

      {/* FAB toggle */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative z-50 size-12 rounded-full shadow-lg transition-all duration-300",
          isOpen
            ? "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
            : "bg-green-500 text-zinc-900 hover:bg-green-400"
        )}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  isExternal: boolean;
  pathname: string;
  onClick: () => void;
}

function NavItem({
  href,
  icon: Icon,
  title,
  isExternal,
  pathname,
  onClick,
}: NavItemProps) {
  const isActive = useMemo(() => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  }, [href, pathname]);

  const className = cn(
    "flex items-center gap-3 rounded-full border py-2 pr-4 pl-3 shadow-lg transition-colors",
    isActive
      ? "border-green-500 bg-green-500 text-zinc-900"
      : "border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-green-500 hover:text-green-500"
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        <Icon size={18} />
        <span className="text-sm font-medium">{title}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      <Icon size={18} />
      <span className="text-sm font-medium">{title}</span>
    </Link>
  );
}
