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
    <div className="py-16 px-5 bg-[#222a] w-full hover:bg-green-500 duration-300 group relative">
      <Icon
        size={80}
        className="m-auto mb-5 text-green-500 group-hover:text-zinc-50"
      />
      <h2 className="text-zinc-50 text-2xl font-bold text-center mb-5">
        {title}
      </h2>
      <p className="text-center">{description}</p>
    </div>
  );
}
