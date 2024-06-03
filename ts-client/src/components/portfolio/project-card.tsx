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
      className="w-full max-w-md flex flex-col gap-2 bg-black p-1 border-2 border-zinc-700 hover:border-green-500 duration-300 cursor-pointer"
    >
      <figure>
        {img ? (
          <img src={img} className="w-full min-h-52" />
        ) : (
          <div className="w-full min-h-52 bg-zinc-500" />
        )}

        <figcaption className="text-lg font-bold pt-2">{title}</figcaption>
      </figure>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
