"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const moodBoards = [
  {
    id: 1,
    label: "Storyline Reels",
    preview: "/media/mood1.jpg",
  },
  {
    id: 2,
    label: "Cinematic Edits",
    preview: "/media/mood2.jpg",
  },
  {
    id: 3,
    label: "Studio Promos",
    preview: "/media/mood3.jpg",
  },
  {
    id: 4,
    label: "Portrait Visuals",
    preview: "/media/mood4.jpg",
  },
];

export default function Slide5ProjectDetails() {
  const [activeId, setActiveId] = useState(moodBoards[0].id);

  const activeBoard = moodBoards.find((b) => b.id === activeId)!;

  return (
    <section
      id="slide5"
      className="
        relative h-screen snap-start
        flex items-center justify-center
        overflow-hidden
        bg-light-bg dark:bg-dark-bg
        text-light-text dark:text-dark-text
        transition-colors duration-500
      "
    >
      {/* BACKGROUND GLOSS */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[var(--surface-gloss)]
          opacity-90
        "
      />

      <div className="relative z-10 flex items-center justify-between w-full px-[10vw] gap-20">
        {/* LEFT SIDE — TEXT */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            className="uppercase text-xs tracking-[0.35em] mb-3"
          >
            details
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[48px] sm:text-[56px] font-semibold leading-tight"
          >
            Creating visuals that are
            <span className="block text-transparent bg-gradient-to-r dark:from-white/90 from-black/90 to-neutral-500 bg-clip-text">
              refined, stylized and emotional.
            </span>
          </motion.h2>

          <p className="mt-8 text-sm opacity-70 leading-relaxed max-w-md">
            Hover on any label below to preview the visual direction behind it.
          </p>

          <div className="mt-8 flex flex-col divide-y divide-neutral-300/70 dark:divide-neutral-700/70">
            {moodBoards.map((board) => {
              const isActive = activeId === board.id;

              return (
                <button
                  key={board.id}
                  type="button"
                  onMouseEnter={() => setActiveId(board.id)}
                  onFocus={() => setActiveId(board.id)}
                  className="text-left py-4 outline-none"
                >
                  <span
                    className={`
                      text-[18px] font-medium transition-colors duration-300
                      ${
                        isActive
                          ? "text-black dark:text-white"
                          : "text-neutral-500 dark:text-neutral-300"
                      }
                    `}
                  >
                    {board.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE — VISUAL PREVIEW */}
        <div className="relative w-[380px] h-[460px] rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBoard.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0 rounded-[36px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.18)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
            >
              <Image
                src={activeBoard.preview}
                alt={activeBoard.label}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.22em] text-white/85">
                {activeBoard.label}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
