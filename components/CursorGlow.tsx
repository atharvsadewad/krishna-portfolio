"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const update = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="
        fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[999]
        w-[390px] h-[390px] blur-[90px] pointer-events-none 
        opacity-60 mix-blend-screen
        bg-[radial-gradient(circle,var(--cursor-glow-color),transparent 65%)]
      "
    />
  );
}
