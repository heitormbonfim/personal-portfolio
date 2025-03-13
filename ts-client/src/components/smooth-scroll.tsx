import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface SmoothScrollProps {
  children: React.ReactNode;
  speed?: number;
  scrollThreshold?: number;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  speed = 0.8,
  scrollThreshold = 100,
}) => {
  const targetScrollY = useRef(window.scrollY);
  const animationFrameId = useRef<number>();
  const lastDeltaY = useRef(0);
  const timeStamp = useRef(0);
  const accumulatedDelta = useRef(0);
  const reactLocation = useLocation();

  const animateScroll = () => {
    const currentScrollY = window.scrollY;
    const difference = targetScrollY.current - currentScrollY;

    if (Math.abs(difference) > 1) {
      window.scrollTo(0, currentScrollY + difference * 0.1);
      animationFrameId.current = requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, targetScrollY.current);
      animationFrameId.current = undefined;
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
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = undefined;
    }

    targetScrollY.current = 0;
    accumulatedDelta.current = 0;
    lastDeltaY.current = 0;

    window.scroll({ top: 0, left: 0, behavior: "instant" });
  }, [reactLocation.pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
