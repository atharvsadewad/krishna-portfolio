"use client";

import { motion } from "framer-motion";

export default function AnimatedShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-purple-500/20 dark:bg-purple-500/25 blur-3xl"
        animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 h-64 w-64 rounded-[3rem] bg-blue-400/15 dark:bg-cyan-400/20 blur-3xl"
        animate={{ y: [0, -50, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-6rem] left-10 h-56 w-56 rounded-full bg-pink-500/15 dark:bg-pink-500/25 blur-3xl"
        animate={{ y: [0, 35, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
