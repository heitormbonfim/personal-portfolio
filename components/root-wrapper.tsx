"use client";

import { useState } from "react";
import { FirstLoading } from "./first-load";
import ScrollProgress from "./scroll-progress";
import { useContext } from "react";
import { GlobalContext } from "@/app/contexts/global-provider";

export function RootWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { setLoading } = useContext(GlobalContext);

  return (
    <>
      {!isLoaded && (
        <FirstLoading
          onComplete={() => {
            setIsLoaded(true);
            setLoading(false);
          }}
        />
      )}
      <div
        className={`bg-image min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-zinc-900 text-zinc-200`}
      >
        {children}
        <ScrollProgress />
      </div>
    </>
  );
}
