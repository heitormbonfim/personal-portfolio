import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="group relative w-full bg-[#222a] px-5 py-16 duration-300 hover:bg-green-500">
      <Icon
        size={80}
        className="m-auto mb-5 text-green-500 group-hover:text-zinc-50"
      />
      <h2 className="mb-5 text-center text-2xl font-bold text-zinc-50">
        {title}
      </h2>
      <p className="text-center">{description}</p>
    </div>
  );
}
