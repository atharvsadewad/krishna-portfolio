"use client";

import { motion } from "framer-motion";

export default function Slide1Intro() {
  return (
    <section
      id="slide1"
      className="
        relative h-screen snap-start flex flex-col items-center justify-center
        bg-light-bg dark:bg-dark-bg
        text-light-text dark:text-dark-text
        transition-colors duration-500
        gradient-bg
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="z-10 flex flex-col items-center text-center space-y-6"
      >
        <h1 className="text-[80px] sm:text-[120px] font-bold leading-none drop-shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_50px_rgba(255,255,255,0.12)]">
          Portfolio
        </h1>

        <p className="tracking-wide max-w-md text-sm opacity-85">
          A cinematic showcase of edits, frames, and moving visuals.
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg opacity-70"
        >
          ↓ scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
