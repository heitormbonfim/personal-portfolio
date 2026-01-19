"use client";

import { usePathname } from "@/i18n/navigation";
import { NavButtons } from "@/utils/navbar-buttons";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { MenuButton } from "./menu-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

interface MobileMenuProps {
  navButtons: NavButtons[];
}

export function MobileMenu({ navButtons }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("navigation");

  useEffect(() => {
    queueMicrotask(() => setOpen(false));
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mx-3 text-zinc-100 hover:bg-transparent hover:text-zinc-50"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-3/5 border-l border-zinc-800 bg-black/95 text-zinc-100 backdrop-blur-sm"
      >
        <VisuallyHidden.Root>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Site navigation links</SheetDescription>
        </VisuallyHidden.Root>
        <nav className="mt-8 flex flex-col gap-2">
          {navButtons.map((button, idx) => (
            <div key={button.titleKey + idx}>
              <MenuButton
                className="w-full border-b-0 text-center text-2xl font-bold"
                href={button.href}
                _blank={button._blank}
                onClick={() => setOpen(false)}
              >
                {t(button.titleKey)}
              </MenuButton>
              <hr className="border-zinc-700" />
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
