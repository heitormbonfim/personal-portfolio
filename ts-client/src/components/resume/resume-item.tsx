import { cn } from "@/lib/utils";

interface ResumeItemProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
}

export function ResumeItem({ children, title, className }: ResumeItemProps) {
  return (
    <div
      className={cn(
        "relative flex flex-wrap items-start border-l-2 border-s-zinc-500",
        className,
      )}
    >
      <div className="absolute -left-[9px] top-0 h-[16px] w-[16px] rounded-full border-2 border-green-500 bg-green-500"></div>
      <div className="px-6 pb-10">
        <h2 className="relative -top-[2px] mb-2 text-lg font-semibold uppercase leading-5 text-green-500">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
}
