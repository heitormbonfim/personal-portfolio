export function SectionContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className="lg:px-20 pt-10">
      <div className="bg-[#000d] backdrop-blur-sm w-full h-full p-5">
        {children}
      </div>
    </div>
  );
}
