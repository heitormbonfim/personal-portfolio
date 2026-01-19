"use client";

import { GlobalContext } from "@/app/contexts/global-provider";
import GitHubRepos from "@/components/portfolio/github";
import { ProjectCard } from "@/components/portfolio/project-card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "./data";

export default function Portfolio() {
  const { isMobile } = useContext(GlobalContext);
  const t = useTranslations("portfolio");

  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles title={t("sectionTitle")} subTitle={t("sectionSubtitle")} />

        <div className="mb-20 inline-grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {portfolioData.projects.map((project, idx) => {
            return (
              <motion.div
                key={project.key + idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.2 + (isMobile ? 0.05 : Math.min(idx * 0.08, 0.5)),
                }}
              >
                <ProjectCard
                  title={t(`projects.${project.key}.title`)}
                  content={t(`projects.${project.key}.content`)}
                  url={project.url}
                  img={project.img}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.8,
          }}
          className="mb-5 flex w-full items-center justify-center gap-2 text-xl font-semibold lg:gap-3 lg:text-3xl"
        >
          <FaGithub />{" "}
          <span>
            {t("githubTitlePart1")}
            <span className="font-bold text-green-500">{t("githubTitleHighlight")}</span>
            {t("githubTitlePart2")}
          </span>
        </motion.h2>

        <GitHubRepos username={portfolioData.githubUsername} />
      </SectionContainer>
    </PageContainer>
  );
}
