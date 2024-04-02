import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MenuButton } from "../../components/ui/menu-button";
import { content } from "./content";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-desktop text-zinc-200 flex items-center">
      <div className="w-full pl-28">
        <h1 className="text-5xl font-bold mb-5 text-zinc-50">{content.name}</h1>
        <p
          className="text-2xl mb-10 decoration-red-800"
          dangerouslySetInnerHTML={{ __html: content.description }}
        />

        <div className="flex justify-start items-center gap-6 mb-10">
          <MenuButton className="border-b-[2px] border-green-400">
            Home
          </MenuButton>
          <MenuButton href="/about">About</MenuButton>
          <MenuButton href="/resume">Resume</MenuButton>
          <MenuButton href="/portfolio">Portfolio</MenuButton>
          <MenuButton href="/services">Services</MenuButton>
          <MenuButton href="/contact">Contanct</MenuButton>
        </div>
        <div className="flex items-center gap-3">
          <Social href="https://www.instagram.com/heitor.m.bonfim">
            <FaInstagram size={20} />
          </Social>
          <Social href="https://www.facebook.com/heitormbonfim">
            <FaFacebook size={20} />
          </Social>
          <Social href="https://twitter.com/HeitorMBonfim">
            <FaXTwitter size={20} />
          </Social>
          <Social href="https://www.linkedin.com/in/heitormbonfim">
            <FaLinkedin size={20} />
          </Social>
        </div>
      </div>
    </main>
  );
}

function Social({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} target="_blank">
      <div className="w-10 h-10 rounded-full text-zinc-50 bg-zinc-800 hover:bg-green-400 flex justify-center items-center transition-all duration-300">
        {children}
      </div>
    </a>
  );
}
