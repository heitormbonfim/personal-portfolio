import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-100">
      <Loader2 className="h-20 w-20 animate-spin" />
    </div>
  );
}
