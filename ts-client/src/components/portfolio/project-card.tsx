import { useState } from "react";

interface ProjectCardProps {
  title: string;
  content: string;
  url: string;
  img?: string;
}

export function ProjectCard({ url, title, content, img }: ProjectCardProps) {
  const cardContent = (
    <Content content={content} title={title} url={url} img={img} />
  );

  return (
    <div className="block w-full max-w-md transform transition duration-300 hover:scale-[101%]">
      {cardContent}
    </div>
  );
}

function Content({ content, title, img, url }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxCharacters = 100;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedContent =
    !isExpanded && content.length > maxCharacters
      ? `${content.slice(0, maxCharacters)}...`
      : content;

  return (
    <div className="group w-full max-w-md overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-lg transition-all hover:border-green-500">
      <figure className="relative overflow-hidden">
        {img ? (
          <img
            loading="lazy"
            src={img}
            alt={title}
            className="h-60 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-48 w-full items-center justify-center bg-zinc-900">
            <span className="text-zinc-300">No Image</span>
          </div>
        )}
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          {url ? (
            <a href={url} target="_blank">
              <h3 className="cursor-pointer text-xl font-bold text-white duration-300 hover:text-green-500">
                {title}
              </h3>
            </a>
          ) : (
            <h3
              onClick={() => {
                if (!url) alert("This project is not online anymore");
              }}
              className="cursor-pointer text-xl font-bold text-white duration-300 hover:text-green-500"
            >
              {title}
            </h3>
          )}
        </figcaption>
      </figure>
      <div className="p-4 text-zinc-300">
        <div
          className={`max-h-fit overflow-hidden transition-all duration-300`} // Removed line-clamp and fixed max-h
        >
          <div
            dangerouslySetInnerHTML={{
              __html: isExpanded ? content : truncatedContent,
            }}
          />
        </div>
        {!isExpanded && content.length > maxCharacters ? (
          <button
            onClick={toggleExpand}
            className="mt-2 block text-sm text-green-500 hover:underline"
          >
            Show more...
          </button>
        ) : isExpanded ? (
          <button
            onClick={toggleExpand}
            className="mt-2 block text-sm text-green-500 hover:underline"
          >
            Show less...
          </button>
        ) : null}
      </div>
    </div>
  );
}
