import { PageContainer } from "@/components/ui/page-container";
import { content } from "./content";
import { InfoArrow } from "@/components/about/info-arrows";
import Img from "@/assets/img2.jpg";

export default function About() {
  return (
    <PageContainer navbar>
      <main>
        <div className="px-20 pt-10">
          <div className="bg-[#000d] backdrop-blur-sm w-full h-full p-5">
            <div className="flex items-center gap-2">
              <h2 className="text-zinc-400 mb-2 font-semibold tracking-widest">
                ABOUT
              </h2>
              <div className="h-[1px] max-w-32 w-full bg-green-400 mb-1"></div>
            </div>

            <h2 className="text-4xl font-bold text-zinc-50 mb-10">
              LEARN MORE ABOUT ME
            </h2>

            <div className="flex">
              <div className="w-[30%] px-5">
                <img
                  src={Img}
                  alt="Profile Picture"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-[70%]">
                <h1 className="text-3xl mb-2 text-green-400 font-semibold">
                  {content.title}
                </h1>
                <p className="italic mb-4">{content.description}</p>

                <div className="flex flex-wrap items-center gap-y-4 my-10">
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

                <p>{content.description2}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageContainer>
  );
}
