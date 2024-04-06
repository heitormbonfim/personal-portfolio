import { cn } from "@/lib/utils";
import Navbar from "./navbar";

interface PageContainerProps {
  children?: React.ReactNode;
  className?: string;
  navbar?: boolean;
  navMobileOnly?: boolean;
  navTransparentWhenTop?: boolean;
}

export function PageContainer({
  children,
  navMobileOnly,
  className,
  navTransparentWhenTop,
  navbar,
}: PageContainerProps) {
  if (navMobileOnly || navTransparentWhenTop) {
    navbar = true;
  }

  return (
    <>
      {navbar && (
        <Navbar
          mobileOnly={navMobileOnly}
          transparentWhenTop={navTransparentWhenTop}
        />
      )}
      <div
        className={cn(
          "w-full h-full px-3 pt-16 pb-10 overflow-auto",
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
