import { createContext, useState } from "react";

interface GlobalContextProps {
  loading: boolean;
  setLoading: (load: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextProps>(null!);

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
