"use client";

import React, { useEffect, useRef, useState } from "react";

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        setProgress((scrollTop / scrollHeight) * 100);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-green-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
