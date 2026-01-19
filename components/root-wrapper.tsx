import ScrollProgress from "./scroll-progress";

export function RootWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-image min-h-screen bg-zinc-900 text-zinc-200">
      {children}
      <ScrollProgress />
    </div>
  );
}
