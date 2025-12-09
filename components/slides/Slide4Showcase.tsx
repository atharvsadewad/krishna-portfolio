"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide4Showcase() {
  const works = [
    {
      title: "Fashion Lifestyle Edit",
      thumb: "/media/work1.jpg",
    },
    {
      title: "Cinematic Travel Story",
      thumb: "/media/work2.jpg",
    },
    {
      title: "Creator Reels Promo",
      thumb: "/media/work3.jpg",
    },
  ];

  return (
    <section
      id="slide4"
      className="
        relative h-screen snap-start flex flex-col justify-center
        px-[10vw] gap-14
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
          opacity-90
        "
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <p className="uppercase text-xs tracking-[0.35em] opacity-60 mb-3">
          showcase
        </p>

        <h2 className="text-[44px] sm:text-[52px] font-semibold leading-tight">
          Selected projects I’ve worked on.
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl z-10">
        {works.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
            className="
              rounded-2xl overflow-hidden
              cursor-pointer relative group
            "
          >
            <Image
              src={item.thumb}
              alt={item.title}
              width={420}
              height={240}
              className="object-cover w-full aspect-video"
            />

            {/* gradient overlay */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-b from-black/30 to-black/80
              "
            />

            {/* title text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="
                absolute bottom-4 left-4 text-sm font-medium text-white
                tracking-wide
              "
            >
              {item.title}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ delay: 0.4 }}
        className="text-[12px] tracking-wide text-center opacity-60"
      >
        Hover over a thumbnail to preview the mood
      </motion.p>
    </section>
  );
}
