import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { content } from "./content";
import GitHubRepos from "@/components/portfolio/github";
import { MdOutlineSettings } from "react-icons/md";

export default function Portfolio() {
  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles title="PORTFOLIO" subTitle="MY WORKS" />
        <h2 className="text-3xl font-bold text-green-500 text-center animate-pulse">
          THIS PAGE IS IN BUILDING PROGRESS...{" "}
        </h2>

        <MdOutlineSettings
          size={200}
          className="m-auto text-green-500 animate-spin-slow my-20"
        />

        <h2 className="text-center text-3xl font-bold mb-5">GitHub Repos</h2>
        <GitHubRepos username={content.username} />
      </SectionContainer>
    </PageContainer>
  );
}
