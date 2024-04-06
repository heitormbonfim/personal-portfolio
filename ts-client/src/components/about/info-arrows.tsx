import { IoIosArrowForward } from "react-icons/io";

interface InfoArrowProps {
  title: string;
  content: string;
}

export function InfoArrow({ title, content }: InfoArrowProps) {
  return (
    <div className="w-full max-w-sm flex items-center gap-1">
      <IoIosArrowForward size={20} className="text-green-500" />
      <span>
        <strong className="text-zinc-50">{title}:</strong> {content}
      </span>
    </div>
  );
}
