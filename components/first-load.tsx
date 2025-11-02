"use client";

import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const FirstLoading: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [text, setText] = useState<string>("");
  const fullText: string = "<Heitor M Bonfim />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center bg-black text-gray-100"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mb-4 text-center font-mono text-2xl font-bold lg:text-4xl">
        {text}
        <span className="animate-blink">|</span>
      </div>

      <div className="relative h-[2px] w-[200px] overflow-hidden rounded bg-zinc-900">
        <div className="animate-loading-bar h-full w-[40%] bg-green-500 shadow-[0_0_15px_#3b82f6]"></div>
      </div>
    </div>
  );
};
