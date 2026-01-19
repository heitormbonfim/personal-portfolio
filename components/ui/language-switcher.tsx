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
      size={"sm"}
      onClick={() => switchLocale(locale === "en" ? "pt-br" : "en")}
      className="rounded border border-green-500 px-3 py-1 text-sm font-medium transition-colors hover:bg-green-500 hover:text-zinc-900"
    >
      {locale === "en" ? "PT" : "EN"}
    </Button>
  );
}
