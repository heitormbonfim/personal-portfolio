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

        <div className="grid lg:grid-cols-3 gap-5 w-full">
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
