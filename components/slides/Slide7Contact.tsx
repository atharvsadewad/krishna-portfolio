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
      {/* Ambient Gloss Surface */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[var(--surface-gloss)]
          opacity-[0.92]
        "
      />

      {/* Floating parallax Krishna portrait */}
      <motion.div
        initial={{ opacity: 0, x: 120, scale: 0.92 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="
          absolute right-[10%] hidden lg:block
          w-[340px] h-[460px]
          rounded-[38px] overflow-hidden
          shadow-[0_32px_60px_rgba(0,0,0,0.45)]
          dark:shadow-[0_36px_75px_rgba(0,0,0,0.75)]
          z-[3]
        "
        style={{
          WebkitMaskImage: "radial-gradient(circle, white 70%, transparent 100%)",
          maskImage: "radial-gradient(circle, white 70%, transparent 100%)",
        }}
      >
        <Image
          src="/media/krishna-working.jpg"
          alt="Krishna Working"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full justify-between gap-20 items-start">

        {/* LEFT TEXT SECTION */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.65 }}
            className="uppercase text-xs tracking-[0.35em] mb-3"
          >
            collaboration
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[46px] sm:text-[56px] font-bold leading-tight"
          >
            Let’s create something
            <span className="block text-transparent bg-gradient-to-r dark:from-white from-black to-neutral-500 bg-clip-text">
              visually meaningful.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-[15px] opacity-80 max-w-md leading-relaxed"
          >
            Whether you're building a brand identity, creator profile film or
            product launch—Krishna ensures visuals that feel precise and
            emotionally resonant.
          </motion.p>

          {/* Button with ripple emphasis */}
          <motion.a
            href="mailto:krishnabursestudio@gmail.com"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="
              mt-12 inline-flex items-center justify-center
              px-12 py-4 rounded-full
              text-sm font-medium tracking-wide
              bg-black text-white dark:bg-white dark:text-black
              shadow-md
              hover:shadow-lg transition-all
            "
          >
            Contact Now
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.65 }}
            transition={{ delay: 0.65 }}
            className="text-[12px] mt-5 leading-relaxed opacity-75 max-w-sm"
          >
            You’ll receive a response with project breakdown, timelines & relevant work samples.
          </motion.p>
        </div>

        {/* RIGHT CONTACT INFO CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="
            w-full lg:w-[350px] py-6 px-8 rounded-3xl
            bg-white/75 dark:bg-black/40
            backdrop-blur-md
            shadow-[0_22px_60px_rgba(0,0,0,0.14)]
            dark:shadow-[0_28px_80px_rgba(0,0,0,0.72)]
          "
        >
          <p className="text-xs uppercase opacity-75 tracking-[0.32em] mb-4">
            also reachable at
          </p>

          <div className="space-y-4 text-sm opacity-85 leading-relaxed">
            <p>
              Instagram —{" "}
              <span className="font-medium">@krishna.edits</span>
            </p>
            <p>YouTube — Studio Narratives</p>
            <p>Pune, Maharashtra, India</p>
          </div>

          <div className="mt-8 text-[10px] opacity-60">
            Business hours: 10 AM – 8 PM IST
          </div>
        </motion.div>
      </div>

    </section>
  );
}
