export function SectionContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pt-10 lg:px-20">
      <div className="h-full w-full bg-[#000d] p-5 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
