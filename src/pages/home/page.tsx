import { MenuButton } from "../../components/ui/menu-button";
import { content } from "./content";
import { Social } from "@/components/ui/social-button";
import { navButtons } from "@/utils/navbar-buttons";
import { PageContainer } from "@/components/ui/page-container";

export default function Home() {
  return (
    <PageContainer navMobileOnly navTransparentWhenTop>
      <main className="h-full w-full flex items-center p-3 pt-20 md:pt-3">
        <div className="w-full md:pl-28">
          <h1 className="text-4xl md:text-5xl text-center md:text-start font-bold mb-5 text-zinc-50">
            {content.name}
          </h1>
          <p
            className="text-lg text-center font-semibold md:font-normal md:text-2xl md:text-start md:max-w-xl mb-10"
            dangerouslySetInnerHTML={{ __html: content.description }}
          />

          <div className="md:flex justify-start items-center gap-6 mb-10 hidden">
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
          <div className="flex justify-center md:justify-start items-center gap-3">
            {content.socials.map((item, idx) => {
              return (
                <Social key={item.url + idx} href={item.url}>
                  <item.icon size={20} />
                </Social>
              );
            })}
          </div>
        </div>
      </main>
    </PageContainer>
  );
}
