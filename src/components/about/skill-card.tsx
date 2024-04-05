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
        "w-full max-w-72 min-h-16 flex flex-wrap items-center gap-5 bg-[#222b] hover:bg-[#333b] py-4 px-8 cursor-default duration-300",
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
    return "border border-red-400";
  } else if (level == "intermediate") {
    return "border border-yellow-400";
  } else if (level == "advanced") {
    return "border border-green-400";
  } else {
    ("border border-zinc-100");
  }
}
