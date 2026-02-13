"use client";

import GitHubRepos from "@/components/portfolio/github";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { useTranslations } from "next-intl";
import { IoConstruct } from "react-icons/io5";

export default function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles
          title={t("sectionTitle")}
          subTitle={t("sectionSubtitle")}
        />

        <div className="mb-8 flex w-full items-center gap-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-3 text-sm text-yellow-400">
          <IoConstruct className="shrink-0 text-lg" />
          {t("constructionBanner")}
        </div>

        <GitHubRepos username="heitormbonfim" />
      </SectionContainer>
    </PageContainer>
  );
}
