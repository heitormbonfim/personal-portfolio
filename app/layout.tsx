import type { Metadata } from "next";
import { RootWrapper } from "@/components/root-wrapper";
import GlobalProvider from "./contexts/global-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Heitor M Bonfim",
  description: "Full-stack developer portfolio",
  icons: {
    icon: "/file.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <RootWrapper>{children}</RootWrapper>
        </GlobalProvider>
      </body>
    </html>
  );
}
