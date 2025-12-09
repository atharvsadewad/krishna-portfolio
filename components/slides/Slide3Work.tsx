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
        relative h-screen snap-start
        flex items-center justify-center
        bg-light-bg dark:bg-dark-bg
        text-light-text dark:text-dark-text
        transition-colors duration-500
        overflow-hidden
      "
    >
      {/* soft background gloss */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[var(--surface-gloss)]
          opacity-[0.9]
        "
      />

      <div className="relative z-10 flex items-center justify-between w-full px-[10vw] gap-16">
        {/* LEFT: text + services list */}
        <div className="max-w-xl">
          <p className="uppercase text-xs tracking-[0.35em] opacity-60 mb-3">
            how i work
          </p>

          <h2 className="text-[44px] sm:text-[52px] font-bold leading-tight mb-6">
            Every edit is built
            <span className="block text-transparent bg-gradient-to-r from-black/85 dark:from-white to-neutral-500 bg-clip-text">
              around sound, pacing and mood.
            </span>
          </h2>

          <p className="text-[14px] opacity-80 max-w-md mb-8">
            Hover over a line to see the kind of visuals Krishna creates.
          </p>

          <div className="mt-4 flex flex-col divide-y divide-neutral-200/70 dark:divide-neutral-700/70">
            {services.map((service) => {
              const isActive = service.id === activeId;

              return (
                <button
                  key={service.id}
                  type="button"
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  className="text-left py-4 outline-none"
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`
                        text-[18px] font-semibold
                        transition-colors duration-200
                        ${
                          isActive
                            ? "text-black dark:text-white"
                            : "text-neutral-500 dark:text-neutral-300"
                        }
                      `}
                    >
                      {service.title}
                    </span>
                    <span
                      className={`
                        text-xs tracking-[0.22em] uppercase
                        hidden sm:inline-block
                        ${isActive ? "opacity-80" : "opacity-40"}
                      `}
                    >
                      {isActive ? "selected" : "view"}
                    </span>
                  </div>

                  <p
                    className={`
                      mt-1 text-[13px]
                      transition-opacity duration-200
                      ${isActive ? "opacity-80" : "opacity-50"}
                    `}
                  >
                    {service.tagline}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: changing visual */}
        <div className="relative w-[360px] h-[420px] sm:w-[420px] sm:h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="
                absolute inset-0 rounded-[32px] overflow-hidden
                shadow-[0_22px_60px_rgba(0,0,0,0.15)]
                dark:shadow-[0_22px_60px_rgba(0,0,0,0.7)]
              "
            >
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-5 text-xs tracking-[0.22em] uppercase text-white/85">
                {activeService.title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
