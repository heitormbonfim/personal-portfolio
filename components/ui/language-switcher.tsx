"use client";

import { type Locale } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "./button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => switchLocale(locale === "en" ? "pt-br" : "en")}
      className="px-3 py-1 text-sm font-medium transition-colors hover:text-green-500"
    >
      {locale === "en" ? "🇬🇧 EN" : "🇧🇷 PT"}
    </Button>
  );
}
