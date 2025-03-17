import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { content } from "./content";
import GitHubRepos from "@/components/portfolio/github";
import { ProjectCard } from "@/components/portfolio/project-card";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/Global";
import Loading from "../../components/loading";
import { AnimatePresence, motion } from "motion/react";

export default function Portfolio() {
  const { loading } = useContext(GlobalContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles title="PORTFOLIO" subTitle="MY WORKS" />

        <div className="mb-20 inline-grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <AnimatePresence>
            {content.projects.map((project, idx) => {
              return (
                <motion.div
                  key={project.title + idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.2,
                  }}
                >
                  <ProjectCard
                    title={project.title}
                    content={project.content}
                    url={project.url}
                    img={project?.img}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-5 flex w-full items-center justify-center gap-2 text-xl font-semibold lg:gap-3 lg:text-3xl"
        >
          <FaGithub /> GitHub{" "}
          <span className="font-bold text-green-500">public</span> repositories
        </motion.h2>

        <GitHubRepos username={content.githubUsername} />
      </SectionContainer>
    </PageContainer>
  );
}
