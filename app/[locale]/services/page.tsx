"use client";

import { ServiceCard } from "@/components/services/service-card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { servicesData } from "./data";

export default function Services() {
  const t = useTranslations("services");

  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles
          title={t("sectionTitle")}
          subTitle={t("sectionSubtitle")}
        />

        <div className="grid w-full gap-5 lg:grid-cols-3">
          {servicesData.map((service, idx) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: idx * 0.2,
                }}
                key={service.key + idx}
              >
                <ServiceCard
                  title={t(`items.${service.key}.title`)}
                  description={t(`items.${service.key}.description`)}
                  icon={service.icon}
                />
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
