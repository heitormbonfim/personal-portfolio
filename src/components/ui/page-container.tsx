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
      <div className="w-full h-full px-3 pt-16 pb-10">{children}</div>
    </>
  );
}
