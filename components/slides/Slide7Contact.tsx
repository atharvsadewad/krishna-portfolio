"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide7Contact() {
  return (
    <section
      id="slide7"
      className="
        relative h-screen snap-start
        flex items-center justify-center
        px-[10vw]
        bg-light-bg dark:bg-dark-bg
        text-light-text dark:text-dark-text
        transition-colors duration-500
        overflow-hidden
      "
    >
      {/* background gloss */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[var(--surface-gloss)]
          opacity-[0.9]
        "
      />

      {/* Floating Krishna image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 80 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          absolute right-[12%]
          w-[320px] h-[420px]
          sm:w-[380px] sm:h-[480px]
          z-[2]
          rounded-[38px]
          overflow-hidden
          shadow-[0_25px_60px_rgba(0,0,0,0.4)]
          dark:shadow-[0_30px_70px_rgba(0,0,0,0.72)]
          hidden lg:block
        "
        style={{
          WebkitMaskImage: "radial-gradient(circle, white 68%, transparent 100%)",
          maskImage: "radial-gradient(circle, white 68%, transparent 100%)",
        }}
      >
        <Image
          src="/media/krishna-working.jpg"
          alt="Krishna portrait"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full justify-between gap-16">
        
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            className="uppercase text-xs tracking-[0.35em] mb-3"
          >
            collaboration
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[44px] sm:text-[52px] font-bold leading-tight"
          >
            Let’s create something
            <span className="block text-transparent bg-gradient-to-r from-black/85 dark:from-white to-neutral-500 bg-clip-text">
              visually meaningful.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-[15px] opacity-75 max-w-md leading-relaxed"
          >
            Whether you're building a brand identity, creator profile or product launch—
            Krishna crafts visuals that feel modern, aesthetic and emotionally cohesive.
          </motion.p>

          <motion.a
            href="mailto:krishnabursestudio@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="
              mt-12 inline-flex items-center justify-center
              px-10 py-4 rounded-full
              text-sm font-medium
              bg-black text-white dark:bg-white dark:text-black
              hover:scale-[1.04] active:scale-[0.97]
              transition-all
            "
          >
            Contact Now
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.75 }}
            transition={{ delay: 0.6 }}
            className="text-[11px] mt-4 leading-relaxed opacity-70"
          >
            Share details of your project — timeline, references, formats —
            and get an actionable response.
          </motion.p>
        </div>

        {/* RIGHT SIDE - Contact Details Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="
            rounded-3xl p-7 w-full lg:w-[340px]
            bg-white/80 dark:bg-black/40 backdrop-blur-md
            shadow-[0_20px_55px_rgba(0,0,0,0.12)]
            dark:shadow-[0_26px_75px_rgba(0,0,0,0.7)]
          "
        >
          <p className="text-xs uppercase tracking-[0.25em] opacity-70 mb-4">
            also reachable at:
          </p>

          <div className="space-y-3 text-sm opacity-80">
            <p>Instagram — @krishna.edits</p>
            <p>YouTube — Studio Narratives</p>
            <p>Location — Pune, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
