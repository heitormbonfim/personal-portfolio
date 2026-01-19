import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

export interface SkillCardProps {
  name: string;
  icon: IconType;
  iconStyle?: string;
  level: "noob" | "intermediate" | "advanced";
}

export function SkillCard({
  name,
  icon: Icon,
  iconStyle,
  level,
}: SkillCardProps) {
  return (
    <div
      className={cn(
        "flex min-h-16 w-full cursor-default flex-wrap items-center gap-5 bg-[#222b] px-4 py-4 duration-300 hover:bg-[#333b]",
        renderLevel(level)
      )}
    >
      <Icon size={30} className={iconStyle} />
      <span className="text-lg font-semibold tracking-widest">{name}</span>
    </div>
  );
}

function renderLevel(level: string) {
  if (level == "noob") {
    return "border-2 border-red-400";
  } else if (level == "intermediate") {
    return "border-2 border-yellow-400";
  } else if (level == "advanced") {
    return "border-2 border-green-500";
  } else {
    return "border border-zinc-100";
  }
}
