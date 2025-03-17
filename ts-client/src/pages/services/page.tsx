import { ServiceCard } from "@/components/services/service-card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { content } from "./content";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/Global";
import Loading from "../../components/loading";
import { AnimatePresence, motion } from "motion/react";

export default function Services() {
  const { loading } = useContext(GlobalContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles title="SERVICES" subTitle="MY SERVICES" />

        <div className="grid w-full gap-5 lg:grid-cols-3">
          <AnimatePresence>
            {content.services.map((service, idx) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: idx * 0.2,
                  }}
                  key={service.title + idx}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
