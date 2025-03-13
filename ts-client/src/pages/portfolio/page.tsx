import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { content } from "./content";
import GitHubRepos from "@/components/portfolio/github";
import { ProjectCard } from "@/components/portfolio/project-card";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles title="PORTFOLIO" subTitle="MY WORKS" />

        <div className="mb-20 inline-grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {content.projects.map((project, idx) => {
            return (
              <ProjectCard
                key={project.title + idx}
                title={project.title}
                content={project.content}
                url={project.url}
                img={project?.img}
              />
            );
          })}
        </div>

        <h2 className="mb-5 flex w-full items-center justify-center gap-2 text-xl font-semibold lg:gap-3 lg:text-3xl">
          <FaGithub /> GitHub{" "}
          <span className="font-bold text-green-500">public</span> repositories
        </h2>

        <GitHubRepos username={content.githubUsername} />
      </SectionContainer>
    </PageContainer>
  );
}
