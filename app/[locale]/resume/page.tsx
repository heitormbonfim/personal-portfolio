"use client";

import { ColumnItems } from "@/components/resume/column-items";
import { DownloadResumeButton } from "@/components/resume/download-resume-button";
import { ResumeItem } from "@/components/resume/resume-item";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { resumeData } from "./data";

export default function Resume() {
  const t = useTranslations("resume");
  const tAbout = useTranslations("about");
  const locale = useLocale();

  const pdfTranslations = {
    summary: {
      title: t("summary.title"),
      name: t("summary.name"),
      description: t("summary.description"),
      location: t("summary.location"),
    },
    education: {
      title: t("education.title"),
      java10x: {
        title: t("education.java10x.title"),
        dates: t("education.java10x.dates"),
        description: t("education.java10x.description"),
      },
      cybersecurity: {
        title: t("education.cybersecurity.title"),
        dates: t("education.cybersecurity.dates"),
        description: t("education.cybersecurity.description"),
      },
      rocketseat: {
        title: t("education.rocketseat.title"),
        dates: t("education.rocketseat.dates"),
        description: t("education.rocketseat.description"),
      },
      freecodecamp: {
        title: t("education.freecodecamp.title"),
        dates: t("education.freecodecamp.dates"),
        description: t("education.freecodecamp.description"),
      },
      webFullStack: {
        title: t("education.webFullStack.title"),
        dates: t("education.webFullStack.dates"),
        description: t("education.webFullStack.description"),
      },
      english: {
        title: t("education.english.title"),
        dates: t("education.english.dates"),
        description: t("education.english.description"),
      },
    },
    experience: {
      title: t("experience.title"),
      onePanel: {
        title: t("experience.onePanel.title"),
        dates: t("experience.onePanel.dates"),
        description: t("experience.onePanel.description"),
        role: t("experience.onePanel.role"),
      },
      freelance: {
        title: t("experience.freelance.title"),
        dates: t("experience.freelance.dates"),
        description: t("experience.freelance.description"),
        role: t("experience.freelance.role"),
      },
      llSoftware: {
        title: t("experience.llSoftware.title"),
        dates: t("experience.llSoftware.dates"),
        description: t("experience.llSoftware.description"),
        role: t("experience.llSoftware.role"),
      },
      freelanceTeacher: {
        title: t("experience.freelanceTeacher.title"),
        dates: t("experience.freelanceTeacher.dates"),
        description: t("experience.freelanceTeacher.description"),
        role: t("experience.freelanceTeacher.role"),
      },
      mundoHb: {
        title: t("experience.mundoHb.title"),
        dates: t("experience.mundoHb.dates"),
        description: t("experience.mundoHb.description"),
        role: t("experience.mundoHb.role"),
      },
    },
  };

  return (
    <PageContainer navbar>
      <SectionContainer>
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <SectionTitles
            title={t("sectionTitle")}
            subTitle={t("sectionSubtitle")}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            <DownloadResumeButton
              locale={locale}
              translations={pdfTranslations}
              skillsTitle={tAbout("skillsTitle")}
              buttonText={t("downloadButton")}
              loadingText={t("downloadLoading")}
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap">
          <div className="lg:w-[50%]">
            {/* Summary */}
            <ColumnItems title={t("summary.title")}>
              <>
                <ResumeItem
                  title={t("summary.name")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("summary.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc">
                      <li>{t("summary.location")}</li>
                      <li>
                        <a
                          href={`mailto:${resumeData.email}?subject=I%20checked%20your%20website&body=Hello,%20Heitor`}
                          target="_blank"
                          className="underline decoration-green-500 underline-offset-4"
                        >
                          {resumeData.email}
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </ResumeItem>
              </>
            </ColumnItems>

            {/* Professional Experience */}
            <ColumnItems title={t("experience.title")}>
              <>
                {/* One Panel */}
                <ResumeItem
                  title={t("experience.onePanel.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("experience.onePanel.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("experience.onePanel.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc">
                      <li>{t("experience.onePanel.role")}</li>
                      <li>
                        <a
                          href={resumeData.expLinks.onePanel}
                          target="_blank"
                          className="underline decoration-green-500 underline-offset-4"
                        >
                          One Panel
                        </a>
                      </li>
                    </ul>
                    <h3 className="mt-5 text-lg font-semibold text-green-500">
                      {t("experience.onePanel.techStack")}
                    </h3>
                    <ul className="grid list-inside list-disc gap-x-3 md:grid-cols-2">
                      {resumeData.techStacks.onePanel.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </motion.div>
                </ResumeItem>

                {/* Freelance */}
                <ResumeItem
                  title={t("experience.freelance.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("experience.freelance.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("experience.freelance.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc">
                      <li>{t("experience.freelance.role")}</li>
                    </ul>
                    <h3 className="mt-5 text-lg font-semibold text-green-500">
                      {t("experience.freelance.techStack")}
                    </h3>
                    <ul className="grid list-inside list-disc gap-x-3 md:grid-cols-2">
                      {resumeData.techStacks.freelance.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </motion.div>
                </ResumeItem>

                {/* LL Software */}
                <ResumeItem
                  title={t("experience.llSoftware.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("experience.llSoftware.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("experience.llSoftware.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc">
                      <li>{t("experience.llSoftware.role")}</li>
                      <li>
                        <a
                          href={resumeData.expLinks.llSoftware}
                          target="_blank"
                          className="underline decoration-green-500 underline-offset-4"
                        >
                          LL Software
                        </a>
                      </li>
                    </ul>
                    <h3 className="mt-5 text-lg font-semibold text-green-500">
                      {t("experience.llSoftware.techStack")}
                    </h3>
                    <ul className="grid list-inside list-disc gap-x-3 md:grid-cols-2">
                      {resumeData.techStacks.llSoftware.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </motion.div>
                </ResumeItem>

                {/* Freelance Teacher */}
                <ResumeItem
                  title={t("experience.freelanceTeacher.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("experience.freelanceTeacher.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("experience.freelanceTeacher.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc">
                      <li>{t("experience.freelanceTeacher.role")}</li>
                      <li>{t("experience.freelanceTeacher.freelancer")}</li>
                    </ul>
                  </motion.div>
                </ResumeItem>

                {/* Mundo HB */}
                <ResumeItem
                  title={t("experience.mundoHb.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("experience.mundoHb.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("experience.mundoHb.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc">
                      <li>{t("experience.mundoHb.role")}</li>
                      <li>
                        <a
                          href={resumeData.expLinks.mundoHb}
                          target="_blank"
                          className="underline decoration-green-500 underline-offset-4"
                        >
                          Mundo HB
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </ResumeItem>
              </>
            </ColumnItems>
          </div>

          <div className="lg:w-[50%]">
            {/* Education */}
            <ColumnItems title={t("education.title")}>
              <>
                {/* Java10x */}
                <ResumeItem
                  title={t("education.java10x.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("education.java10x.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("education.java10x.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc underline decoration-green-500 underline-offset-4">
                      <li>
                        <a
                          href={resumeData.certLinks.java10x.cert1}
                          target="_blank"
                        >
                          {t("education.java10x.cert1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href={resumeData.certLinks.java10x.cert2}
                          target="_blank"
                        >
                          {t("education.java10x.cert2")}
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </ResumeItem>

                {/* Cybersecurity */}
                <ResumeItem
                  title={t("education.cybersecurity.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("education.cybersecurity.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("education.cybersecurity.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc underline decoration-green-500 underline-offset-4">
                      <li>
                        <a
                          href={resumeData.certLinks.cybersecurity.cert}
                          target="_blank"
                        >
                          {t("education.cybersecurity.cert")}
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </ResumeItem>

                {/* Rocketseat */}
                <ResumeItem
                  title={t("education.rocketseat.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("education.rocketseat.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("education.rocketseat.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc underline decoration-green-500 underline-offset-4">
                      <li>
                        <a
                          href={resumeData.certLinks.rocketseat.cert}
                          target="_blank"
                        >
                          {t("education.rocketseat.cert")}
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </ResumeItem>

                {/* FreeCodeCamp */}
                <ResumeItem
                  title={t("education.freecodecamp.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("education.freecodecamp.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("education.freecodecamp.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc underline decoration-green-500 underline-offset-4">
                      <li>
                        <a
                          href={resumeData.certLinks.freecodecamp.cert1}
                          target="_blank"
                        >
                          {t("education.freecodecamp.cert1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href={resumeData.certLinks.freecodecamp.cert2}
                          target="_blank"
                        >
                          {t("education.freecodecamp.cert2")}
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </ResumeItem>

                {/* Web Full Stack */}
                <ResumeItem
                  title={t("education.webFullStack.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("education.webFullStack.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("education.webFullStack.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc underline decoration-green-500 underline-offset-4">
                      <li>
                        <a
                          href={resumeData.certLinks.webFullStack.cert1}
                          target="_blank"
                        >
                          {t("education.webFullStack.cert1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href={resumeData.certLinks.webFullStack.cert2}
                          target="_blank"
                        >
                          {t("education.webFullStack.cert2")}
                        </a>
                      </li>
                      <li>
                        <a
                          href={resumeData.certLinks.webFullStack.cert3}
                          target="_blank"
                        >
                          {t("education.webFullStack.cert3")}
                        </a>
                      </li>
                      <li>
                        <a
                          href={resumeData.certLinks.webFullStack.cert4}
                          target="_blank"
                        >
                          {t("education.webFullStack.cert4")}
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </ResumeItem>

                {/* English Language */}
                <ResumeItem
                  title={t("education.english.title")}
                  className="w-full text-justify"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                  >
                    {t("education.english.dates")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    className="mb-5"
                  >
                    {t("education.english.description")}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                  >
                    <ul className="list-inside list-disc">
                      <li>{t("education.english.fluent")}</li>
                      <li>
                        <a
                          href={resumeData.certLinks.english.mundoHb}
                          target="_blank"
                          className="underline decoration-green-500 underline-offset-4"
                        >
                          Mundo HB
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </ResumeItem>
              </>
            </ColumnItems>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
