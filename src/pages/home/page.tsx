import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MenuButton } from "../../components/ui/menu-button";
import { content } from "./content";
import { FaXTwitter } from "react-icons/fa6";
import { Social } from "@/components/ui/social-button";

export default function Home() {
  return (
    <div className="bg-image">
      <main className="h-screen w-full text-zinc-200 flex items-center p-3">
        <div className="w-full md:pl-28 ">
          <h1 className="text-4xl md:text-5xl text-center md:text-start font-bold mb-5 text-zinc-50">
            {content.name}
          </h1>
          <p
            className="text-lg text-center font-semibold md:font-normal md:text-2xl md:text-start mb-10"
            dangerouslySetInnerHTML={{ __html: content.description }}
          />

          <div className="md:flex justify-start items-center gap-6 mb-10 hidden">
            <MenuButton className="border-b-[2px] border-green-400">
              Home
            </MenuButton>
            <MenuButton href="/about">About</MenuButton>
            <MenuButton href="/resume">Resume</MenuButton>
            <MenuButton href="/portfolio">Portfolio</MenuButton>
            <MenuButton href="/services">Services</MenuButton>
            <MenuButton href="/contact">Contanct</MenuButton>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-3">
            <Social href={content.urls.linkedin}>
              <FaLinkedin size={20} />
            </Social>
            <Social href={content.urls.instagram}>
              <FaInstagram size={20} />
            </Social>
            <Social href={content.urls.facebook}>
              <FaFacebook size={20} />
            </Social>
            <Social href={content.urls.x}>
              <FaXTwitter size={20} />
            </Social>
          </div>
        </div>
      </main>
    </div>
  );
}
