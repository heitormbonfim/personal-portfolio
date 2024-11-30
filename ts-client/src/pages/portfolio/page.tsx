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

        <div className="flex flex-wrap justify-center gap-5 mb-20">
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

        <h2 className="w-full text-3xl font-semibold mb-5 flex flex-wrap justify-center items-center gap-3">
          <FaGithub /> GitHub <span className="text-green-500 font-bold">public</span> repositories
        </h2>

        <GitHubRepos username={content.githubUsername} />
      </SectionContainer>
    </PageContainer>
  );
}
