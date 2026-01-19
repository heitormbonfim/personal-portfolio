"use client";

import { MenuButton } from "@/components/ui/menu-button";
import { PageContainer } from "@/components/ui/page-container";
import { Social } from "@/components/ui/social-button";
import { navButtons } from "@/utils/navbar-buttons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FaGithub, FaLinkedin, FaSpotify, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    url: "https://wa.me/+5511919934876",
    icon: FaWhatsapp,
  },
  {
    url: "https://github.com/heitormbonfim",
    icon: FaGithub,
  },
  {
    url: "https://www.linkedin.com/in/heitormbonfim",
    icon: FaLinkedin,
  },
  {
    url: "https://x.com/HeitorMBonfim",
    icon: FaXTwitter,
  },
  {
    url: "https://open.spotify.com/user/315cxioc3ykggqrh6b7q2hvqwvnu",
    icon: FaSpotify,
  },
];

export default function Home() {
  const t = useTranslations("home");
  const tNav = useTranslations("navigation");

  return (
    <PageContainer
      navMobileOnly
      navTransparentWhenTop
      className="flex items-center"
    >
      <main className="flex w-full items-center p-3 pt-20 lg:pt-3">
          <div className="w-full lg:pl-28">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
              className="mb-5 text-center text-4xl font-bold text-zinc-50 lg:text-start lg:text-5xl"
            >
              {t("name")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.4,
              }}
              className="mb-10 text-center text-lg font-semibold lg:max-w-xl lg:text-start lg:text-2xl lg:font-normal"
            >
              {t("description")}
            </motion.p>

            <div className="mb-10 hidden items-center justify-start gap-6 lg:flex">
              {navButtons.map((item, idx) => {
                return (
                  <motion.div
                    key={item.href || item.titleKey}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: (idx + 1) * 0.2,
                    }}
                  >
                    <MenuButton href={item.href} _blank={item._blank}>
                      {tNav(item.titleKey)}
                    </MenuButton>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-3 lg:justify-start">
              {socials.map((item, idx) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: (idx + 1) * 0.2,
                    }}
                    key={item.url}
                  >
                    <Social href={item.url}>
                      <item.icon size={20} />
                    </Social>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.6,
              }}
              className="mt-6 text-center lg:hidden"
            >
              <Link
                href="/about"
                className="animate-pulse underline decoration-green-500 underline-offset-2"
              >
                {t("explore")}
              </Link>
            </motion.div>
          </div>
        </main>
    </PageContainer>
  );
}
