"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="bg-404 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="my-5 pt-10 text-2xl font-extrabold text-zinc-50 lg:text-4xl">
        {t("title")}
      </h1>
      <Link
        href="/"
        className="text-center font-semibold text-green-500 underline lg:text-lg"
      >
        {t("goBack")}
      </Link>
    </div>
  );
}
