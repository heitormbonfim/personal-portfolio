"use client";

import { GlobalContext } from "@/app/contexts/global-provider";
import { InfoArrow } from "@/components/about/info-arrows";
import { SkillCard } from "@/components/about/skill-card";
import { Divider } from "@/components/ui/divider";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useContext } from "react";
import { aboutData, calculateDate } from "./data";

export default function About() {
  const { isMobile } = useContext(GlobalContext);
  const t = useTranslations("about");

  const arrowInfos = [
    { titleKey: "fullName", valueKey: "fullName" },
    { titleKey: "age", value: calculateDate("2000-01-27").toString() },
    { titleKey: "phone", value: "+5511919934876" },
    { titleKey: "location", valueKey: "location" },
    { titleKey: "education", valueKey: "education" },
    { titleKey: "yearsOfExperience", value: calculateDate("2022-01-01").toString() },
    { titleKey: "email", value: "heitormbonfim@gmail.com" },
    { titleKey: "languages", valueKey: "languages" },
  ];

  return (
    <PageContainer navbar>
      <main>
        <SectionContainer>
          <SectionTitles title={t("sectionTitle")} subTitle={t("sectionSubtitle")} />

          <div className="mb-10 flex flex-col lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
              className="w-full lg:w-[30%] lg:pt-2"
            >
              <Image
                loading="lazy"
                src={aboutData.img}
                alt="Profile Picture"
                width={500}
                height={500}
                className="h-auto w-full"
              />
            </motion.div>

            <Divider className="my-5 lg:hidden" />

            <div className="w-full lg:w-[70%] lg:px-5">
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.2,
                }}
                className="mb-2 text-xl font-semibold text-green-500 lg:text-3xl"
              >
                {t("title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.4,
                }}
                className="mb-4 text-justify italic"
              >
                {t("description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.6,
                }}
                className="my-10 flex flex-wrap items-center justify-center gap-y-4"
              >
                {arrowInfos.map((item, idx) => {
                  const content = item.valueKey
                    ? t(`infoValues.${item.valueKey}`)
                    : item.value!;
                  return (
                    <motion.div
                      key={`${item.titleKey}-${idx}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.6 + (isMobile ? 0.1 : Math.min(idx * 0.1, 0.4)),
                      }}
                      className="w-full max-w-xs"
                    >
                      <InfoArrow
                        title={t(`infoLabels.${item.titleKey}`)}
                        content={content}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.4,
                }}
                className="text-justify"
              >
                <strong className="text-lg text-green-500">{t("description2Title")}</strong>{" "}
                {t("description2")}
              </motion.div>
            </div>
          </div>

          <div></div>

          <div>
            <SectionTitles title={t("skillsTitle")} />

            <div className="mb-5">
              <div className="flex items-center gap-2">
                <span className="block h-px w-full max-w-5 bg-green-500"></span>
                ~80%
                <span className="font-semibold">{t("skillLevels.advanced")}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="block h-px w-full max-w-5 bg-yellow-400"></span>
                ~50%
                <span className="font-semibold">{t("skillLevels.intermediate")}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="block h-px w-full max-w-5 bg-red-400"></span>
                ~20%
                <span className="font-semibold">{t("skillLevels.basic")}</span>
              </div>
            </div>

            <div className="mb-10 flex flex-wrap items-center gap-5">
              {aboutData.skills.map((item, idx) => {
                return (
                  <motion.div
                    key={`${item.name}-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 1.2 + (isMobile ? 0.05 : Math.min(idx * 0.05, 0.5)),
                    }}
                    className="w-full md:max-w-fit"
                  >
                    <SkillCard
                      name={item.name}
                      icon={item.icon}
                      level={item.level}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </SectionContainer>
      </main>
    </PageContainer>
  );
}
