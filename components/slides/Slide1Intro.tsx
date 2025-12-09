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
        overflow-hidden
      "
    >
      {/* Glass Gloss Layer */}
      <div className="gloss-overlay absolute inset-0 z-[2]" />

      {/* Soft cinematic ambient glow */}
      <motion.div
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute inset-0 blur-[160px] z-[1]
          dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_63%)]
          bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_60%)]
        "
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 65 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="z-[10] flex flex-col items-center text-center space-y-8"
      >
        <h1
          className="
            text-[82px] sm:text-[120px] font-bold leading-none tracking-tight
            drop-shadow-[0_0_35px_rgba(0,0,0,0.34)]
            dark:drop-shadow-[0_0_55px_rgba(255,255,255,0.25)]
          "
        >
          Portfolio
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
            max-w-md text-sm opacity-80 leading-relaxed
          "
        >
          A cinematic showcase of edits, frames, and moving visuals.
        </motion.p>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[20px] opacity-75 font-medium pt-3"
        >
          ↓ scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
