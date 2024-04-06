import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return <div className={cn("w-full h-[1px] bg-[#fff9]", className)}></div>;
}
