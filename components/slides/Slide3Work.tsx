"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Rhythm Cuts",
    tagline: "Fast, music-locked edits for reels and shorts.",
    image: "/media/work-reels.jpg",
  },
  {
    id: 2,
    title: "Cinematic Frames",
    tagline: "Wide, moody frames that feel like film stills.",
    image: "/media/work-cinematic.jpg",
  },
  {
    id: 3,
    title: "Portrait Stories",
    tagline: "Faces, expressions and light-driven portraits.",
    image: "/media/work-photo.jpg",
  },
  {
    id: 4,
    title: "Motion & Titles",
    tagline: "Animated titles, overlays and subtle motion.",
    image: "/media/work-motion.jpg",
  },
];

export default function Slide3Work() {
  const [activeId, setActiveId] = useState<number>(services[0].id);
  const activeService = services.find((s) => s.id === activeId)!;

  return (
    <section
      id="slide3"
      className="
        relative h-screen w-screen snap-start overflow-hidden
        bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text
        transition-colors duration-500 flex items-center justify-center
      "
    >
      {/* universal gloss */}
      <div className="absolute inset-0 z-[1] bg-[var(--surface-gloss)] opacity-[0.9] pointer-events-none" />

      {/* faint atmospheric glow */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="
          absolute inset-0 blur-[140px] z-[2]
          dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]
          bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_65%)]
        "
      />

      {/* MAIN CONTENT AREA */}
      <div className="relative z-[10] flex items-center justify-between w-full px-[10vw] gap-20">

        {/* LEFT SECTION */}
        <div className="max-w-[540px]">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase text-xs tracking-[0.36em] opacity-60 mb-4"
          >
            what i create
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-[44px] sm:text-[56px] font-bold leading-tight
              drop-shadow-[0_4px_30px_rgba(0,0,0,0.09)]
              dark:drop-shadow-[0_4px_36px_rgba(255,255,255,0.18)]
            "
          >
            Visual directions built on
            <span className="block text-transparent bg-gradient-to-r from-black/85 dark:from-white to-neutral-500 bg-clip-text">
              pacing, mood & movement.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[15px] opacity-75 mt-7 max-w-[420px]"
          >
            Move your cursor over each role — see a glimpse of what that world looks like visually.
          </motion.p>

          {/* LIST */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-9 flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700/80 select-none"
          >
            {services.map((service) => {
              const isActive = activeId === service.id;
              return (
                <button
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  className="py-5 text-left outline-none group"
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`
                        text-[20px] font-semibold transition
                        ${
                          isActive
                            ? "text-black dark:text-white"
                            : "text-neutral-500 dark:text-neutral-400"
                        }
                      `}
                    >
                      {service.title}
                    </span>

                    <span
                      className={`
                        text-[11px] uppercase tracking-[0.22em] hidden sm:inline-block
                        transition-opacity
                        ${isActive ? "opacity-70" : "opacity-30"}
                      `}
                    >
                      {isActive ? "active" : "view"}
                    </span>
                  </div>

                  <p
                    className={`
                      mt-1 text-[13px] transition-opacity duration-200
                      ${isActive ? "opacity-80" : "opacity-40"}
                    `}
                  >
                    {service.tagline}
                  </p>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT VISUAL PREVIEW */}
        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-[380px] h-[440px] sm:w-[440px] sm:h-[500px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -22, scale: 0.92 }}
              transition={{ duration: 0.45 }}
              className="
                absolute inset-0 rounded-[38px] overflow-hidden
                shadow-[0_26px_80px_rgba(0,0,0,0.15)]
                dark:shadow-[0_26px_80px_rgba(0,0,0,0.75)]
              "
            >
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover select-none"
              />

              {/* tinted top overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-6 text-xs tracking-[0.26em] uppercase text-white/85">
                {activeService.title}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
