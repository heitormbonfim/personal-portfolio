interface ProjectCardProps {
  title: string;
  content: string;
  url: string;
  img?: string;
}

export function ProjectCard({ url, title, content, img }: ProjectCardProps) {
  if (!url) {
    return <Content content={content} title={title} url={url} img={img} />;
  }

  return (
    <a href={url} target="_blank" className="w-full max-w-md">
      <Content content={content} title={title} url={url} img={img} />
    </a>
  );
}

function Content({ content, title, img, url }: ProjectCardProps) {
  return (
    <div
      onClick={() => {
        if (!url) alert("This project is not online anymore");
      }}
      className="w-full max-w-md h-fit flex flex-col gap-1 bg-black p-1 border-2 border-zinc-800 hover:border-green-500 duration-300 cursor-pointer hover:scale-95"
    >
      <figure>
        {img ? (
          <img loading="lazy" src={img} className="w-full" />
        ) : (
          <div className="w-full min-h-52 bg-zinc-500" />
        )}

        <figcaption className="text-lg font-bold p-2 border-t-2 border-green-500">
          {title}
        </figcaption>
      </figure>

      <div className="px-2 pb-5" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
