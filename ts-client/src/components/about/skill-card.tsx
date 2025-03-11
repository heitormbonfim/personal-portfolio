import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

export interface SkillCardProps {
  name: string;
  icon: IconType;
  iconStyle?: string;
  level: "noob" | "intermediate" | "advanced";
}

export function SkillCard({ name, icon: Icon, iconStyle, level }: SkillCardProps) {
  return (
    <div
      className={cn(
        "w-full lg:min-w-fit lg:max-w-[300px] min-h-16 flex flex-wrap items-center gap-5 bg-[#222b] hover:bg-[#333b] py-4 px-4 cursor-default duration-300",
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
    ("border border-zinc-100");
  }
}
