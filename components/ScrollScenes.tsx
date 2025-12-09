"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollScenes({ children }: any) {
  const { scrollYProgress } = useScroll();

  // Subtle zoom effect only
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.div style={{ scale }}>
      {children}
    </motion.div>
  );
}
