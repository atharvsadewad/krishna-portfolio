"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- IMAGES IMPORTED HERE ---
// Ensure these files exist in your public/media folder
const moodBoards = [
  {
    id: 1,
    label: "Storyline Reels",
    preview: "/media/mood1.jpg", 
    desc: "Fast sequences built around rhythm & pacing.",
  },
  {
    id: 2,
    label: "Cinematic Edits",
    preview: "/media/mood2.jpg",
    desc: "Wide frames, atmosphere and emotional tone.",
  },
  {
    id: 3,
    label: "Studio Promos",
    preview: "/media/mood3.jpg",
    desc: "Clean, typography-driven brand visuals.",
  },
  {
    id: 4,
    label: "Portrait Visuals",
    preview: "/media/mood4.jpg",
    desc: "Faces, stories & light-driven compositions.",
  },
];

export default function Slide5ProjectDetails() {
  // State to track which image is active
  const [activeId, setActiveId] = useState(moodBoards[0].id);
  
  // Find the full object for the active ID
  const active = moodBoards.find((b) => b.id === activeId) || moodBoards[0];

  return (
    <section
      id="slide5"
      className="
        relative h-screen snap-start w-screen flex items-center justify-center
        overflow-hidden transition-colors duration-500
        
        /* --- FIXED TO MATCH SLIDE 6 --- */
        bg-light-bg dark:bg-dark-bg
        text-light-text dark:text-dark-text
      "
    >

      {/* BG gloss (Same as Slide 6) */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[var(--surface-gloss)]
          opacity-[0.85]
          z-[1]
        "
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-[10] flex items-center justify-between w-full px-[10vw] gap-20">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="uppercase text-xs tracking-[0.35em] opacity-60 mb-4">visual direction</p>

          <h2 className="text-[48px] sm:text-[56px] font-bold leading-tight">
            Emotion-built visuals,
            <span
              className="
                block text-transparent bg-clip-text
                bg-gradient-to-r from-black/90 dark:from-white/90 to-neutral-500
              "
            >
              refined through tone & structure
            </span>
          </h2>

          <p className="mt-7 text-sm opacity-75 leading-relaxed max-w-md">
            Hover below to preview mood styles applied to editing.
          </p>

          <div className="mt-10 flex flex-col divide-y divide-neutral-300/60 dark:divide-neutral-700/70">
            {moodBoards.map((board) => {
              const activeMatch = activeId === board.id;

              return (
                <motion.button
                  key={board.id}
                  // --- HOVER LOGIC ---
                  onMouseEnter={() => setActiveId(board.id)}
                  className="text-left py-4 outline-none relative group"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      backgroundColor: activeMatch
                        ? "rgba(125,125,125,0.1)" 
                        : "rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.35 }}
                  />

                  <span
                    className={`
                      relative z-10 text-[18px] font-semibold
                      ${activeMatch ? "text-current" : "text-neutral-500"}
                    `}
                  >
                    {board.label}
                  </span>

                  <p className={`
                      mt-1 z-10 text-[12px]
                      ${activeMatch ? "opacity-80" : "opacity-55"}
                  `}>
                    {board.desc}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT IMAGE SIDE (Logic Applied) */}
        <div className="relative w-[400px] h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.9, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="
                absolute inset-0 overflow-hidden rounded-[38px]
                shadow-[0_35px_70px_rgba(0,0,0,0.28)]
                dark:shadow-[0_40px_100px_rgba(240,240,240,0.2)]
                
                /* Matches card style from Slide 6 */
                bg-white/70 dark:bg-black/40
                backdrop-blur-md
              "
            >
              {/* The Image */}
              <Image
                src={active.preview}
                alt={active.label}
                fill
                className="object-cover select-none"
              />

              <div className="absolute bottom-4 left-4 text-xs uppercase text-white tracking-widest drop-shadow-md z-10">
                {active.label}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* OUTER GLOW */}
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1.04, 1, 1.08],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="
              absolute -inset-[60px] blur-[120px] rounded-full
              pointer-events-none dark:bg-white/10 bg-black/10
            "
          />
        </div>
      </div>
    </section>
  );
}