interface SectionTitlesProps {
  title: string;
  subTitle?: string;
}

export function SectionTitles({ title, subTitle }: SectionTitlesProps) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <h2 className="font-semibold tracking-widest text-zinc-400">
          {title.toUpperCase()}
        </h2>
        <div className="h-px w-full max-w-32 bg-green-500"></div>
      </div>

      {subTitle && (
        <h2 className="mb-10 text-xl font-bold text-zinc-50 lg:text-4xl">
          {subTitle?.toUpperCase()}
        </h2>
      )}
    </div>
  );
}
