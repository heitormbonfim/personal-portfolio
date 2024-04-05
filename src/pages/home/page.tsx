import { MenuButton } from "../../components/ui/menu-button";
import { content } from "./content";
import { Social } from "@/components/ui/social-button";
import { navButtons } from "@/utils/navbar-buttons";
import { PageContainer } from "@/components/ui/page-container";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageContainer navMobileOnly navTransparentWhenTop>
      <main className="h-full w-full flex items-center p-3 pt-20 lg:pt-3">
        <div className="w-full lg:pl-28">
          <h1 className="text-4xl lg:text-5xl text-center lg:text-start font-bold mb-5 text-zinc-50">
            {content.name}
          </h1>
          <p
            className="text-lg text-center font-semibold lg:font-normal lg:text-2xl lg:text-start lg:max-w-xl mb-10"
            dangerouslySetInnerHTML={{ __html: content.description }}
          />

          <div className="lg:flex justify-start items-center gap-6 mb-10 hidden">
            {navButtons.map((item, idx) => {
              if (item.title === "Home") {
                return (
                  <MenuButton
                    key={item.title + 1}
                    className="border-b-[2px] border-green-400"
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

          <div className="w-full flex-wrap flex justify-center lg:justify-start items-center gap-3">
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
              className="underline underline-offset-2 decoration-green-400 animate-pulse"
            >
              Explore
            </Link>
          </div>
        </div>
      </main>
    </PageContainer>
  );
}
