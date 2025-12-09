"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth follow animation
  const springX = useSpring(mouseX, { stiffness: 150, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={glowRef}
      style={{
        translateX: springX,
        translateY: springY,
      }}
      
        className="
        fixed z-[99999] pointer-events-none
        h-[60px] w-[3px] rounded-full
        bg-black/60 dark:bg-white
        animate-pulse
        shadow-[0_0_18px_rgba(0,0,0,0.28)]
        dark:shadow-[0_0_22px_rgba(255,255,255,0.6)]
        "
    />
  );
}
