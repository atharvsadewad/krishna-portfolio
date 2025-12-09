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
        flex items-center justify-start
      "
    >
      {/* Ambient gradient gloss */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[var(--surface-gloss)]
          opacity-[0.9]
        "
      />

      {/* CONTENT WRAPPER */}
      <div className="w-full h-full flex items-center justify-between px-[12vw]">

        {/* LEFT CONTENT */}
        <div className="max-w-[480px]">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="
              uppercase text-xs tracking-[0.38em]
              opacity-60 mb-3
            "
          >
            who
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-[72px] leading-[70px] font-extrabold
            "
          >
            Krishna
            <br />
            Burse
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 leading-relaxed text-[15px] opacity-85"
          >
            A video editor & visual designer turning raw footage into emotional edits.
            Skilled in pacing, sound sync, transitions, and cinematic visual direction.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-8 space-y-3 text-sm opacity-85"
          >
            <li>— High-energy reel edits</li>
            <li>— Cinematic frame sequences</li>
            <li>— Performance-driven storytelling</li>
            <li>— Portrait-based visuals</li>
          </motion.ul>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 1 }}
          className="
            relative w-[430px] h-[430px]
            rounded-[40px] overflow-hidden
            shadow-[0_0_40px_rgba(0,0,0,0.08)]
            dark:shadow-[0_0_50px_rgba(255,255,255,0.08)]
          "
        >
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
