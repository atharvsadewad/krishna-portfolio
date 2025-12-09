"use client";

import { motion } from "framer-motion";

export default function Slide8Credits() {
  return (
    <section
      id="slide8"
      className="
        relative h-screen snap-start flex flex-col justify-center items-center
        bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text
        transition-colors duration-500 overflow-hidden
      "
    >
      {/* Ambient background glow */}
      <motion.div
        initial={{ opacity: 0.3, scale: 0.75 }}
        animate={{
          opacity: [0.35, 0.55, 0.4],
          scale: [0.85, 1, 0.92],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="
          absolute w-[95vw] h-[95vw]
          rounded-full blur-[180px]
          bg-[var(--cursor-glow-color)]
          pointer-events-none
          -top-[12%]
        "
      />

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          text-[56px] font-bold text-center
          leading-tight relative z-[200]
        "
      >
        Thank you
        <span className="block text-[20px] opacity-70 font-medium mt-2">
          for browsing through the experience
        </span>
      </motion.h2>

      {/* MESSAGE */}
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="
          mt-9 text-[15px] opacity-75 text-center
          max-w-lg leading-relaxed relative z-[200]
        "
      >
        A portfolio of edits, narratives and visual signatures crafted to feel
        memorable, emotional and modern.
      </motion.p>

      {/* DIVIDER */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ delay: 1, duration: 0.8 }}
        className="h-[1px] mt-14 bg-neutral-400 dark:bg-neutral-600 relative z-[200]"
      />

      {/* LABEL */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        transition={{ delay: 1.2 }}
        className="
          text-[11px] tracking-[0.28em] uppercase mt-6
          relative z-[200]
        "
      >
        Designed & Developed by
      </motion.div>

      {/* FATHER'S MEDIA LINK — refined */}
      <motion.a
        href="https://fathersmedia.in"
        target="_blank"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="
          text-[21px] font-semibold mt-2 cursor-pointer relative
          z-[200] tracking-wide
          group
        "
      >
        Father's Media

        {/* subtle underline */}
        <span
          className="
            block h-[2px] mt-[5px] w-full
            bg-gradient-to-r from-pink-600 via-violet-500 to-purple-500
            scale-x-[0.3] group-hover:scale-x-100
            transition-transform duration-400 origin-left
          "
        />
      </motion.a>

      {/* Floating line at bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="
          absolute bottom-8 text-[11px] opacity-70
          z-[200]
        "
      >
        Built for modern creators and digital-first brands
      </motion.p>
    </section>
  );
}
