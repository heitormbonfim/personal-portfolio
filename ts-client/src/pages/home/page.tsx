import { MenuButton } from "../../components/ui/menu-button";
import { content } from "./content";
import { Social } from "@/components/ui/social-button";
import { navButtons } from "@/utils/navbar-buttons";
import { PageContainer } from "@/components/ui/page-container";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageContainer
      navMobileOnly
      navTransparentWhenTop
      className="flex items-center"
    >
      <main className="flex w-full items-center p-3 pt-20 lg:pt-3">
        <div className="w-full lg:pl-28">
          <h1 className="mb-5 text-center text-4xl font-bold text-zinc-50 lg:text-start lg:text-5xl">
            {content.name}
          </h1>
          <p
            className="mb-10 text-center text-lg font-semibold lg:max-w-xl lg:text-start lg:text-2xl lg:font-normal"
            dangerouslySetInnerHTML={{ __html: content.description }}
          />

          <div className="mb-10 hidden items-center justify-start gap-6 lg:flex">
            {navButtons.map((item, idx) => {
              if (item.title === "Home") {
                return (
                  <MenuButton
                    key={item.title + 1}
                    className="border-b-[2px] border-green-500"
                  >
                    {item.title}
                  </MenuButton>
                );
              }

              return (
                <MenuButton
                  key={item.title + idx}
                  href={item.href}
                  _blank={item._blank}
                >
                  {item.title}
                </MenuButton>
              );
            })}
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-3 lg:justify-start">
            {content.socials.map((item, idx) => {
              return (
                <Social key={item.url + idx} href={item.url}>
                  <item.icon size={20} />
                </Social>
              );
            })}
          </div>

          <div className="mt-6 text-center lg:hidden">
            <Link
              to="/about"
              className="animate-pulse underline decoration-green-500 underline-offset-2"
            >
              Explore
            </Link>
          </div>
        </div>
      </main>
    </PageContainer>
  );
}
