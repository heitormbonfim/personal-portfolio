import { createContext, useEffect, useState } from "react";

interface GlobalContextProps {
  loading: boolean;
  setLoading: (load: boolean) => void;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextProps>(null!);

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", () =>
        setWindowWidth(window.innerWidth),
      );
    }

    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth),
      );
  }, []);

  useEffect(() => {
    if (windowWidth && windowWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
