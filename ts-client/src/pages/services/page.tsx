import { ServiceCard } from "@/components/services/service-card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { content } from "./content";

export default function Services() {
  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles title="SERVICES" subTitle="MY SERVICES" />

        <div className="grid w-full gap-5 lg:grid-cols-3">
          {content.services.map((service, idx) => {
            return (
              <ServiceCard
                key={service.title + idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            );
          })}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
