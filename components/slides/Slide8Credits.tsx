"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Slide8Credits() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Play subtle sound — optional & safe
  useEffect(() => {
    if (open) {
      const audio = new Audio("/popup-open.wav");
      audio.volume = 0.22;
      audio.play().catch(() => {});
    }
  }, [open]);

  // Close popup on outside click
  useEffect(() => {
    const closeIfClickedOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", closeIfClickedOutside);
    }
    return () => {
      document.removeEventListener("mousedown", closeIfClickedOutside);
    };
  }, [open]);

  return (
    <section
      id="slide8"
      className="
        relative h-screen snap-start flex flex-col justify-center items-center
        bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text
        overflow-hidden transition-colors duration-500
      "
    >
      {/* DIM BACKGROUND WHEN POPUP ACTIVE */}
      <motion.div
        animate={{
          opacity: open ? 0.30 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="
          absolute inset-0 pointer-events-none
          bg-black dark:bg-white
          mix-blend-soft-light
          z-[150]
        "
      />

      {/* Glow behind everything */}
      <motion.div
        initial={{ opacity: 0.35, scale: 0.8 }}
        animate={{
          opacity: [0.35, 0.65, 0.45],
          scale: [0.8, 1, 0.92],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="
          absolute w-[90vw] h-[90vw]
          rounded-full blur-[180px] -top-[15%]
          bg-[var(--cursor-glow-color)]
          pointer-events-none
        "
      />

      {/* MAIN HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[56px] font-semibold text-center relative z-[200]"
      >
        Thank you
        <span className="block text-[21px] opacity-70 font-medium mt-2">
          for browsing through the work
        </span>
      </motion.h2>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="
          mt-9 text-[15px] opacity-75
          text-center max-w-xl leading-relaxed relative z-[200]
        "
      >
        A journey of edits, transitions, rhythm and stories—built to leave viewers
        with a lasting visual memory.
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
        className="text-[11px] tracking-[0.28em] uppercase mt-6 relative z-[200]"
      >
        Designed & Developed by
      </motion.div>

      {/* BRAND NAME — now animated underline */}
      <motion.div
        onMouseEnter={() => setOpen(true)}
        className="
          text-[20px] font-bold tracking-wide mt-2 cursor-pointer relative z-[200]
          hover:text-transparent hover:bg-clip-text
          hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-400
          transition-all duration-300
        "
      >
        FATHER'S MEDIA

        {/* animated underline */}
        <motion.div
          layoutId="underlineAnimation"
          className="h-[2px] mt-[3px] rounded-full bg-gradient-to-r from-pink-500 to-purple-400"
          initial={{ width: 0 }}
          animate={{ width: open ? "100%" : "0%" }}
          transition={{ duration: 0.35 }}
        />
      </motion.div>

      {/* Floating bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-8 text-[11px] opacity-60 z-[200]"
      >
        Built for modern creators and brands
      </motion.p>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="popup"
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.88, y: 55 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.39, ease: "easeOut" }}
            className="
              absolute bottom-[26%] z-[310]
              w-[300px] p-6 rounded-2xl
              bg-white dark:bg-black
              shadow-[0_22px_60px_rgba(0,0,0,0.25)]
              dark:shadow-[0_26px_75px_rgba(0,0,0,0.75)]
              border border-neutral-200 dark:border-neutral-700
              backdrop-blur-md flex flex-col items-center gap-4
            "
          >
            <p className="text-[13px] opacity-75 text-center leading-relaxed">
              Explore studio projects, case studies, and brand assets.
            </p>

            <a
              href="https://fathersmedia.in"
              target="_blank"
              className="
                inline-flex items-center justify-center px-5 py-2.5 rounded-full
                bg-black text-white dark:bg-white dark:text-black
                font-semibold text-[13px]
                hover:scale-[1.08] active:scale-[0.92]
                transition-all shadow-sm
              "
            >
              Visit Website →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
