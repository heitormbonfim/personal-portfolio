import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface SmoothScrollProps {
  children: React.ReactNode;
  speed?: number;
  scrollThreshold?: number;
  scrollProgressBar?: boolean;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  speed = 0.8,
  scrollThreshold = 100,
  scrollProgressBar = false,
}) => {
  const targetScrollY = useRef(window.scrollY);
  const animationFrameId = useRef<number>();
  const lastDeltaY = useRef(0);
  const timeStamp = useRef(0);
  const accumulatedDelta = useRef(0);
  const reactLocation = useLocation();
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateProgressBar = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / scrollHeight) * 100;
    setScrollProgress(progress);

    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${progress / 100})`;
    }
  };

  const animateScroll = () => {
    const currentScrollY = window.scrollY;
    const difference = targetScrollY.current - currentScrollY;

    if (Math.abs(difference) > 1) {
      window.scrollTo(0, currentScrollY + difference * 0.1);
      updateProgressBar();
      animationFrameId.current = requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, targetScrollY.current);
      animationFrameId.current = undefined;
      updateProgressBar();
    }
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();

    const now = performance.now();
    const delta = event.deltaY * speed;

    if (Math.abs(delta) < scrollThreshold) {
      accumulatedDelta.current += delta;
    } else {
      accumulatedDelta.current += Math.sign(delta) * scrollThreshold;
    }

    if (
      now - timeStamp.current < 50 &&
      Math.sign(delta) === Math.sign(lastDeltaY.current)
    ) {
      accumulatedDelta.current *= 1.2;
    }

    lastDeltaY.current = delta;
    timeStamp.current = now;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    targetScrollY.current = Math.max(
      0,
      Math.min(
        document.documentElement.scrollHeight - window.innerHeight,
        window.scrollY + accumulatedDelta.current,
      ),
    );

    accumulatedDelta.current = 0;

    animationFrameId.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, scrollThreshold]);

  useEffect(() => {
    resetScrollValuesWhenChangingPages();
  }, [reactLocation.pathname]);

  function resetScrollValuesWhenChangingPages() {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = undefined;
    }

    targetScrollY.current = 0;
    accumulatedDelta.current = 0;
    lastDeltaY.current = 0;
    setScrollProgress(0);

    window.scroll({ top: 0, left: 0, behavior: "instant" });
  }

  return (
    <>
      {children}
      {scrollProgressBar && (
        <div
          ref={progressBarRef}
          className="pointer-events-none fixed bottom-0 left-0 h-1 origin-left bg-green-500 transition-transform duration-300"
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
            width: "100%",
          }}
        />
      )}
    </>
  );
};

export default SmoothScroll;
