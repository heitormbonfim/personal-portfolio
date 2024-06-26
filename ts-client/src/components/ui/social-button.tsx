export function Social({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} target="_blank">
      <div className="w-10 h-10 rounded-full text-zinc-50 bg-zinc-700 hover:bg-green-500 flex justify-center items-center transition-all duration-300">
        {children}
      </div>
    </a>
  );
}
