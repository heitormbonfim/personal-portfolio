interface SectionTitlesProps {
  title: string;
  subTitle?: string;
}

export function SectionTitles({ title, subTitle }: SectionTitlesProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-zinc-400 font-semibold tracking-widest">
          {title.toUpperCase()}
        </h2>
        <div className="h-[1px] max-w-32 w-full bg-green-500"></div>
      </div>

      {subTitle && (
        <h2 className="text-xl lg:text-4xl font-bold text-zinc-50 mb-10">
          {subTitle?.toUpperCase()}
        </h2>
      )}
    </div>
  );
}
