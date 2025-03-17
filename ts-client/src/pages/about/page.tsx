import { PageContainer } from "@/components/ui/page-container";
import { content } from "./content";
import { InfoArrow } from "@/components/about/info-arrows";
import { Divider } from "@/components/ui/divider";
import { SectionTitles } from "@/components/ui/section-titles";
import { SectionContainer } from "@/components/ui/section-container";
import { SkillCard } from "@/components/about/skill-card";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/Global";
import Loading from "../../components/loading";
import { AnimatePresence, motion } from "motion/react";
import { RevealOnScroll } from "../../components/reveal-on-scroll";

export default function About() {
  const { loading } = useContext(GlobalContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <PageContainer navbar>
      <main>
        <SectionContainer>
          <SectionTitles title="ABOUT" subTitle="LEARN MORE ABOUT ME" />

          <div className="mb-10 flex flex-col lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="w-full lg:w-[30%] lg:pt-2"
            >
              <img
                loading="lazy"
                src={content.img}
                alt="Profile Picture"
                className="w-full"
              />
            </motion.div>

            <Divider className="my-5 lg:hidden" />

            <div className="w-full lg:w-[70%] lg:px-5">
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="mb-2 text-xl font-semibold text-green-500 lg:text-3xl"
              >
                {content.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="mb-4 text-justify italic"
              >
                {content.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                }}
                className="my-10 flex flex-wrap items-center justify-center gap-y-4"
              >
                <AnimatePresence>
                  {content.arrowInfos.map((item, idx) => {
                    return (
                      <motion.div
                        key={`${item.title}-${idx}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: idx * 0.2,
                        }}
                        className="w-full max-w-xs"
                      >
                        <InfoArrow title={item.title} content={item.content} />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: content.description2 }}
              />
            </div>
          </div>

          <div></div>

          <div>
            <SectionTitles title="SKILLS" />

            <div className="mb-5">
              <div className="flex items-center gap-2">
                <span className="block h-[1px] w-full max-w-5 bg-green-500"></span>
                ~80%
                <span className="font-semibold">Advanced</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="block h-[1px] w-full max-w-5 bg-yellow-400"></span>
                ~50%
                <span className="font-semibold">Intermediate</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="block h-[1px] w-full max-w-5 bg-red-400"></span>
                ~20%
                <span className="font-semibold">Basic</span>
              </div>
            </div>

            <RevealOnScroll>
              <div className="mb-10 flex flex-wrap items-center gap-5">
                <AnimatePresence>
                  {content.skills.map((item, idx) => {
                    return (
                      <motion.div
                        key={`${item.name}-${idx}`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: idx * 0.2,
                        }}
                        viewport={{ once: true, amount: 0 }}
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
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          </div>
        </SectionContainer>
      </main>
    </PageContainer>
  );
}
