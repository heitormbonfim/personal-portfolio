"use client";

import { GlobalContext } from "@/app/contexts/global-provider";
import Loading from "@/components/loading";
import { ColumnItems } from "@/components/resume/column-items";
import { ResumeItem } from "@/components/resume/resume-item";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { ContentFormat, content } from "./content";

export default function Resume() {
  const { loading } = useContext(GlobalContext);

  if (loading) {
    return <Loading />;
  }

  function handleRenderColumn(column: ContentFormat, idx: number) {
    return (
      <ColumnItems key={column.title + idx} title={column.title}>
        <AnimatePresence>
          {column.items.map((item, idx) => {
            return (
              <ResumeItem
                key={item.title + idx}
                title={item.title}
                className="w-full text-justify"
              >
                {item.dates && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.4,
                    }}
                    className="lg:text-md mb-5 h-fit w-fit bg-zinc-800 px-3 py-2 text-center text-xs font-bold tracking-wider sm:text-sm"
                    dangerouslySetInnerHTML={{ __html: item.dates }}
                  />
                )}

                {item.description && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.5,
                    }}
                    className="mb-5"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                )}

                {item.content && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                )}
              </ResumeItem>
            );
          })}
        </AnimatePresence>
      </ColumnItems>
    );
  }

  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles title="RESUME" subTitle="CHECK MY RESUME" />

        <div className="flex flex-wrap">
          <div className="lg:w-[50%]">
            {content.map((section, idx) => {
              if (idx % 2 !== 0) return;

              return handleRenderColumn(section, idx);
            })}
          </div>

          <div className="lg:w-[50%]">
            {content.map((section, idx) => {
              if (idx % 2 === 0) return;

              return handleRenderColumn(section, idx);
            })}
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
