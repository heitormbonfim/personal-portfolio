"use client";

import Loading from "@/components/loading";
import { MenuButton } from "@/components/ui/menu-button";
import { PageContainer } from "@/components/ui/page-container";
import { Social } from "@/components/ui/social-button";
import { navButtons } from "@/utils/navbar-buttons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { content } from "./content";
import { GlobalContext } from "./contexts/global-provider";
export default function Home() {
  const { loading } = useContext(GlobalContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <PageContainer
      navMobileOnly
      navTransparentWhenTop
      className="flex items-center"
    >
      <AnimatePresence>
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
              {content.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.4,
              }}
              className="mb-10 text-center text-lg font-semibold lg:max-w-xl lg:text-start lg:text-2xl lg:font-normal"
              dangerouslySetInnerHTML={{ __html: content.description }}
            />

            <div className="mb-10 hidden items-center justify-start gap-6 lg:flex">
              {navButtons.map((item, idx) => {
                return (
                  <motion.div
                    key={item.title + idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: (idx + 1) * 0.2,
                    }}
                  >
                    <MenuButton href={item.href} _blank={item._blank}>
                      {item.title}
                    </MenuButton>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-3 lg:justify-start">
              {content.socials.map((item, idx) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: (idx + 1) * 0.2,
                    }}
                    key={item.url + idx}
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
                Explore
              </Link>
            </motion.div>
          </div>
        </main>
      </AnimatePresence>
    </PageContainer>
  );
}
