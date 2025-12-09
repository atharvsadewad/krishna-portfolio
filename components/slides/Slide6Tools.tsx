"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Slide6Tools() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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
        w-screen flex items-center justify-center
        px-[10vw]
        bg-light-bg dark:bg-dark-bg
        text-light-text dark:text-dark-text
        transition-colors duration-500
        overflow-hidden
      "
    >
      {/* universal gloss */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[var(--surface-gloss)]
          opacity-[0.94]
        "
      />

      <div className="relative z-10 flex flex-col lg:flex-row w-full gap-[70px] justify-between items-start">

        {/* LEFT — Tools */}
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
            transition={{ duration: 0.9 }}
            className="text-[45px] sm:text-[54px] font-[700] leading-tight mb-6"
          >
            The process is shaped by
            <span className="block text-transparent bg-gradient-to-r dark:from-white from-black to-neutral-400 bg-clip-text">
              precision tools & clean workflow.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 0.88, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm opacity-80 max-w-md mb-10"
          >
            Each tool plays a role in pacing, feel, color and narrative alignment.
          </motion.p>

          <div className="grid grid-cols-2 gap-6">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                onHoverStart={() => setHoveredTool(tool.name)}
                onHoverEnd={() => setHoveredTool(null)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="
                  relative rounded-3xl px-5 py-5 overflow-hidden cursor-default
                  bg-white/70 dark:bg-black/40
                  shadow-[0_20px_40px_rgba(0,0,0,0.07)]
                  dark:shadow-[0_20px_45px_rgba(0,0,0,0.65)]
                  backdrop-blur-md
                "
              >
                {/* Glow highlight */}
                {hoveredTool === tool.name && (
                  <motion.div
                    layoutId="tool-glow"
                    className="
                      absolute inset-0 rounded-3xl
                      dark:bg-white/10 bg-black/5
                    "
                    transition={{ duration: 0.35 }}
                  />
                )}

                <div className="relative flex flex-col gap-1 z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-[16px] font-[600]">{tool.name}</span>
                  </div>
                  <p className="text-[13px] opacity-75 leading-tight mt-[2px]">
                    {tool.line}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Workflow Steps */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:w-[310px] w-full"
        >
          <p className="uppercase text-xs tracking-[0.28em] opacity-60 mb-4">
            workflow
          </p>

          <ul className="space-y-6 relative">
            {flow.map((step, index) => (
              <motion.li
                key={step}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                className="relative pl-8"
              >
                {/* Number badge */}
                <motion.div
                  layoutId={`badge-${index}`}
                  className="
                    absolute -left-7 top-1 w-[22px] h-[22px]
                    rounded-full text-[11px] flex items-center justify-center
                    border border-neutral-300 dark:border-neutral-600
                    bg-light-bg dark:bg-dark-bg
                  "
                  animate={{
                    backgroundColor:
                      hoveredStep === index
                        ? "rgba(255,255,255,0.10)"
                        : "transparent",
                  }}
                >
                  {index + 1}
                </motion.div>

                <motion.p
                  animate={{
                    opacity: hoveredStep === index ? 1 : 0.7,
                    x: hoveredStep === index ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-[15px] font-medium tracking-tight"
                >
                  {step}
                </motion.p>
              </motion.li>
            ))}
          </ul>

          <p className="mt-10 text-[12px] opacity-75 leading-relaxed max-w-xs">
            Every edit follows an arc:
            <br />
            <span className="font-semibold">Story → Visual Feel → Music → Structure</span>
            <br />
            so every cut lands with purpose—not randomness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
