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
        className
      )}
    >
      <div className="absolute w-[16px] h-[16px] rounded-full bg-green-500 border-2 border-green-400 -left-[9px] top-0"></div>
      <div className="px-6">
        <h2 className="text-green-400 uppercase font-semibold text-lg leading-5 mb-2 relative -top-[2px]">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
}