"use client";

import { motion } from "framer-motion";

export default function Slide6Tools() {
  const tools = [
    {
      icon: "🎬",
      name: "Premiere Pro",
      line: "Cuts, pacing and transitions that feel natural.",
    },
    {
      icon: "🎨",
      name: "Lightroom",
      line: "Tone, texture and a consistent visual feel.",
    },
    {
      icon: "🌀",
      name: "After Effects",
      line: "Titles, motion accents and graphic moments.",
    },
    {
      icon: "🎧",
      name: "Audio Sync",
      line: "Rhythm-anchored edits locked to the track.",
    },
  ];

  const flow = [
    "Story & intent",
    "Visual feel & framing",
    "Music & rhythm",
    "Structure & timing",
  ];

  return (
    <section
      id="slide6"
      className="
        relative h-screen snap-start
        flex items-center justify-center
        px-[10vw] gap-16
        bg-light-bg dark:bg-dark-bg
        text-light-text dark:text-dark-text
        transition-colors duration-500
        overflow-hidden
      "
    >
      {/* Background gloss */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[var(--surface-gloss)]
          opacity-[0.9]
        "
      />

      <div className="relative z-10 flex w-full items-start justify-between gap-16 flex-col lg:flex-row">
        {/* LEFT – tools grid */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            className="uppercase text-xs tracking-[0.35em] mb-3"
          >
            tools
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[44px] sm:text-[52px] font-bold leading-tight mb-6"
          >
            Tools that shape
            <span className="block text-transparent bg-gradient-to-r from-black/85 dark:from-white to-neutral-500 bg-clip-text">
              Krishna’s visual language.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm max-w-md mb-8"
          >
            From rough footage to a finished piece, each tool plays a specific role
            in pacing, mood and detail.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="
                  rounded-2xl px-4 py-4
                  bg-white/70 dark:bg-black/40
                  shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                  dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]
                  backdrop-blur-sm
                  flex flex-col gap-1
                "
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{tool.icon}</span>
                  <span className="text-[15px] font-semibold">
                    {tool.name}
                  </span>
                </div>
                <p className="text-[13px] opacity-75 mt-1">{tool.line}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT – workflow steps */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:w-[320px] w-full"
        >
          <p className="uppercase text-xs tracking-[0.28em] opacity-60 mb-4">
            workflow
          </p>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-3 top-1 bottom-1 w-[1px] bg-gradient-to-b from-neutral-400/70 to-neutral-300/10 dark:from-neutral-500/80 dark:to-neutral-700/10" />

            <ul className="space-y-5 pl-8">
              {flow.map((step, idx) => (
                <li key={step} className="relative">
                  <div
                    className="
                      absolute -left-8 top-1.5 w-5 h-5 rounded-full
                      border border-neutral-300 dark:border-neutral-600
                      bg-light-bg dark:bg-dark-bg
                      flex items-center justify-center text-[10px]
                    "
                  >
                    {idx + 1}
                  </div>
                  <p className="text-sm font-medium">{step}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-[12px] opacity-70 leading-relaxed">
            Each project moves through this arc:{" "}
            <span className="font-medium">
              Story → Visual feel → Music → Structure
            </span>
            , so every cut feels intentional, not random.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
