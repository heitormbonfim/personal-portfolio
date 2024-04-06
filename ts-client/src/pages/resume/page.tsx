import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";

export default function Resume() {
  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles title="RESUME" subTitle="CHECK MY RESUME" />
      </SectionContainer>
    </PageContainer>
  );
}
