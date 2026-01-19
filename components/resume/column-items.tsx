interface ColumnItemsProps {
  children?: React.ReactNode;
  title: string;
}

export function ColumnItems({ children, title }: ColumnItemsProps) {
  return (
    <div className="mb-5 w-full">
      <h2 className="mb-5 text-2xl font-bold tracking-widest text-zinc-50 uppercase">
        {title}
      </h2>
      {children}
    </div>
  );
}
