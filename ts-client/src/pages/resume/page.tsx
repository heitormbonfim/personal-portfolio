import { ColumnItems } from "@/components/resume/column-items";
import { ResumeItem } from "@/components/resume/resume-item";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitles } from "@/components/ui/section-titles";
import { ContentFormat, content } from "./content";

export default function Resume() {
  function handleRenderColumn(column: ContentFormat, idx: number) {
    return (
      <ColumnItems key={column.title + idx} title={column.title}>
        {column.items.map((item, idx) => {
          return (
            <ResumeItem
              key={item.title + idx}
              title={item.title}
              className="w-full text-justify"
            >
              {item.dates && (
                <div
                  className="mb-5 h-8 w-36 bg-zinc-800 font-bold tracking-wider flex justify-center items-center"
                  dangerouslySetInnerHTML={{ __html: item.dates }}
                />
              )}

              {item.description && (
                <div
                  className="mb-5"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}

              {item.content && (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              )}
            </ResumeItem>
          );
        })}
      </ColumnItems>
    );
  }

  return (
    <PageContainer navbar>
      <SectionContainer>
        <SectionTitles title="RESUME" subTitle="CHECK MY RESUME" />

        <div className="flex flex-wrap">
          <div className="md:w-[50%]">
            {content.map((section, idx) => {
              if (idx % 2 !== 0) return;

              return handleRenderColumn(section, idx);
            })}
          </div>

          <div className="md:w-[50%]">
            {content.map((section, idx) => {
              if (idx % 2 === 0) return;

              return handleRenderColumn(section, idx);
            })}
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
