import Link from "next/link";

export function Social({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-zinc-50 transition-all duration-300 hover:bg-green-500">
        {children}
      </div>
    </Link>
  );
}
