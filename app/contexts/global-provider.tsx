"use client";

import { createContext, useEffect, useState } from "react";

interface GlobalContextProps {
  loading: boolean;
  setLoading: (load: boolean) => void;
  isMobile: boolean;
}

export const GlobalContext = createContext<GlobalContextProps>(null!);

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(
    typeof window !== "undefined" ? window.innerWidth : undefined
  );

  const isMobile = windowWidth !== undefined && windowWidth < 1024;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        isMobile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
