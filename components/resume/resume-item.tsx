"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ResumeItemProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
}

export function ResumeItem({ children, title, className }: ResumeItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.2,
      }}
      className={cn(
        "relative flex flex-wrap items-start border-l-2 border-s-zinc-500",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.3,
        }}
        className="absolute top-0 -left-2.25 h-4 w-4 rounded-full border-2 border-green-500 bg-green-500"
      ></motion.div>
      <div className="px-6 pb-10">
        <h2 className="relative -top-0.5 mb-2 text-lg leading-5 font-semibold text-green-500 uppercase">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </motion.div>
  );
}
