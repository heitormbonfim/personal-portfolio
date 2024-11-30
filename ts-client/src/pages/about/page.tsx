import { PageContainer } from "@/components/ui/page-container";
import { content } from "./content";
import { InfoArrow } from "@/components/about/info-arrows";
import { Divider } from "@/components/ui/divider";
import { SectionTitles } from "@/components/ui/section-titles";
import { SectionContainer } from "@/components/ui/section-container";
import { SkillCard } from "@/components/about/skill-card";
import { Spotify } from "@/components/about/spotify";

export default function About() {
  return (
    <PageContainer navbar>
      <main>
        <SectionContainer>
          <SectionTitles title="ABOUT" subTitle="LEARN MORE ABOUT ME" />

          <div className="flex flex-col lg:flex-row mb-10">
            <div className="w-full lg:w-[30%] lg:pt-2">
              <img loading="lazy" src={content.img} alt="Profile Picture" className="w-full" />
            </div>

            <Divider className="my-5 lg:hidden" />

            <div className="w-full lg:w-[70%] lg:px-5">
              <h1 className="text-xl lg:text-3xl mb-2 text-green-500 font-semibold">
                {content.title}
              </h1>
              <p className="italic mb-4 text-justify">{content.description}</p>

              <div className="flex flex-wrap items-center gap-y-4 my-10">
                {content.arrowInfos.map((item, idx) => {
                  return (
                    <InfoArrow key={item.title + idx} title={item.title} content={item.content} />
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
                <span className="block max-w-5 w-full h-[1px] bg-green-500"></span>
                ~80%
                <span className="font-semibold">Advanced</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="block max-w-5 w-full h-[1px] bg-yellow-400"></span>
                ~50%
                <span className="font-semibold">Intermediate</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="block max-w-5 w-full h-[1px] bg-red-400"></span>
                ~20%
                <span className="font-semibold">Basic</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5 mb-10">
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

            <SectionTitles title="Musical Taste" />

            <div className="mt-10 flex flex-col lg:flex-row">
              <Spotify
                link={content.spotifyPlaylist}
                className="w-full min-h-[520px] lg:min-h-[420px]"
              />

              <Divider className="my-10 lg:hidden" />

              <div className="w-full lg:px-20">
                <h2 className="text-lg font-bold text-green-500">Philosophical harmony</h2>

                <p className="mb-3">
                  In melodies spun by ancient lore, Pythagoras' harmonies did soar. Numbers in
                  rhythm, a divine decree, Philosophers pondered, music's mystery.
                </p>

                <p className="mb-3">
                  Socrates, with his wisdom deep, Heard in melodies, truths to keep. Plato's cave,
                  with its echoing sound, Music's essence, profound and profound.
                </p>

                <p className="mb-3">
                  Aristotle danced to nature's beat, In music's cadence, he found a feat. From the
                  cosmos' symphony to the earthly hum, Philosophers listened, their minds overcome.
                </p>

                <p className="mb-3">
                  In music's embrace, they found a key, To unlock the secrets of eternity. From
                  Pythagoras' strings to Plato's lyre, Philosophers danced, their souls on fire.
                </p>

                <p className="mb-3">
                  So let the melodies weave their tale, In music's realm, truth shall prevail. For
                  in the notes of each refrain, Philosophers' dreams forever remain.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>
    </PageContainer>
  );
}
