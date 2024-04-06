interface ColumnItemsProps {
  children?: React.ReactNode;
  title: string;
}

export function ColumnItems({ children, title }: ColumnItemsProps) {
  return (
    <div className="mb-5 w-full">
      <h2 className="text-2xl text-zinc-50 font-bold mb-5 uppercase tracking-widest">
        {title}
      </h2>
      {children}
    </div>
  );
}
