import { PageContainer } from "@/components/ui/page-container";
import { content } from "./content";
import { InfoArrow } from "@/components/about/info-arrows";
import { Divider } from "@/components/ui/divider";
import { SectionTitles } from "@/components/ui/section-titles";
import { SectionContainer } from "@/components/ui/section-container";
import { SkillCard } from "@/components/about/skill-card";

export default function About() {
  return (
    <PageContainer navbar>
      <main>
        <SectionContainer>
          <SectionTitles title="ABOUT" subTitle="LEARN MORE ABOUT ME" />

          <div className="mb-10 flex flex-col lg:flex-row">
            <div className="w-full lg:w-[30%] lg:pt-2">
              <img
                loading="lazy"
                src={content.img}
                alt="Profile Picture"
                className="w-full"
              />
            </div>

            <Divider className="my-5 lg:hidden" />

            <div className="w-full lg:w-[70%] lg:px-5">
              <h1 className="mb-2 text-xl font-semibold text-green-500 lg:text-3xl">
                {content.title}
              </h1>
              <p className="mb-4 text-justify italic">{content.description}</p>

              <div className="my-10 flex flex-wrap items-center gap-y-4">
                {content.arrowInfos.map((item, idx) => {
                  return (
                    <InfoArrow
                      key={item.title + idx}
                      title={item.title}
                      content={item.content}
                    />
                  );
                })}
              </div>

              <p
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

            <div className="mb-10 flex flex-wrap items-center gap-5">
              {content.skills.map((item, idx) => {
                return (
                  <SkillCard
                    key={item.name + idx}
                    name={item.name}
                    icon={item.icon}
                    level={item.level}
                  />
                );
              })}
            </div>
          </div>
        </SectionContainer>
      </main>
    </PageContainer>
  );
}
