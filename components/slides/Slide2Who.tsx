"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide2Who() {
  return (
    <section
      id="slide2"
      className="
        relative h-screen w-screen snap-start overflow-hidden
        bg-light-bg dark:bg-dark-bg
        text-light-text dark:text-dark-text
        transition-colors duration-500
        flex items-center justify-center
      "
    >
      {/* Cinematic gloss layer */}
      <div className="gloss-overlay absolute inset-0 z-[1]" />

      {/* Ambient radial highlight (soft + cinematic) */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="
          absolute inset-0 blur-[140px] z-[2]
          dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.13),transparent_70%)]
          bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_70%)]
        "
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-[10] w-full flex items-center justify-between px-[12vw]">
        
        {/* LEFT CONTENT */}
        <div className="max-w-[480px]">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="
              uppercase text-xs tracking-[0.38em]
              opacity-60 mb-4
            "
          >
            who
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-[64px] sm:text-[84px] leading-[0.9] font-extrabold tracking-tight
              drop-shadow-[0_0_22px_rgba(0,0,0,0.20)]
              dark:drop-shadow-[0_0_36px_rgba(255,255,255,0.25)]
            "
          >
            Krishna <br />
            Burse
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="
              mt-7 text-[16px] opacity-85 leading-relaxed
            "
          >
            A video editor & visual designer turning raw footage into emotional edits.
            Skilled in pacing, sound sync, transitions, and cinematic visual direction.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="
              mt-9 space-y-3 text-[15px] opacity-90 leading-[1.35]
            "
          >
            <li>— High-energy reel edits</li>
            <li>— Cinematic frame sequences</li>
            <li>— Performance-driven storytelling</li>
            <li>— Portrait-based visuals</li>
          </motion.ul>
        </div>

        {/* ANIMATED PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            relative w-[430px] h-[430px]
            rounded-[46px] overflow-hidden
            shadow-[0_18px_48px_rgba(0,0,0,0.20)]
            dark:shadow-[0_18px_48px_rgba(255,255,255,0.18)]
            border border-black/10 dark:border-white/15
          "
        >
          {/* LAYERED LIGHT SWEEP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="
              absolute inset-x-0 top-0 h-[55%]
              dark:bg-[linear-gradient(to-bottom,rgba(255,255,255,0.14),transparent)]
              bg-[linear-gradient(to-bottom,rgba(0,0,0,0.05),transparent)]
              pointer-events-none
            "
          />

          <Image
            src="/media/profile-closeup.jpg"
            alt="Profile Portrait"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
