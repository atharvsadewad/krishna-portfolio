"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide4Showcase() {
  const works = [
    {
      title: "Fashion Lifestyle Edit",
      thumb: "/media/work1.jpg",
      desc: "Luxury product & model-focused brand short",
    },
    {
      title: "Cinematic Travel Story",
      thumb: "/media/work2.jpg",
      desc: "Emotional music-driven montage",
    },
    {
      title: "Creator Reels Promo",
      thumb: "/media/work3.jpg",
      desc: "Fast sequencing promo for creators",
    },
  ];

  return (
    <section
      id="slide4"
      className="
        relative h-screen snap-start w-screen overflow-hidden
        flex flex-col justify-center items-center
        bg-light-bg dark:bg-dark-bg
        text-light-text dark:text-dark-text
        transition-colors duration-500
      "
    >
      {/* ambient gloss */}
      <div className="absolute inset-0 pointer-events-none bg-[var(--surface-gloss)] opacity-[0.9]" />

      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center text-center mb-14"
      >
        <p className="uppercase text-xs tracking-[0.35em] opacity-60 mb-3">
          showcase
        </p>

        <h2 className="text-[54px] sm:text-[62px] font-[800] leading-tight max-w-[700px]">
          A selection of edits with distinct storytelling.
        </h2>
      </motion.div>

      {/* Showcards */}
      <div
        className="
          grid gap-10 w-full px-[8vw]
          grid-cols-1 md:grid-cols-3
          justify-items-center
          relative z-10
        "
      >
        {works.map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
            className="
              relative group cursor-pointer 
              w-[340px] h-[240px] sm:w-[420px] sm:h-[260px]
              rounded-[32px] overflow-hidden
            "
          >
            {/* preview image */}
            <motion.div
              className="absolute inset-0 rounded-[32px]"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={w.thumb}
                alt={w.title}
                fill
                className="object-cover select-none"
              />
            </motion.div>

            {/* subtle shadow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="
                absolute inset-0 bg-gradient-to-b 
                from-black/30 via-black/20 to-black/70 
              "
            />

            {/* text reveal */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute bottom-4 left-6"
            >
              <p className="text-white font-semibold tracking-wide text-sm">
                {w.title}
              </p>
              <p className="text-white/80 text-[12px] mt-[2px] max-w-[230px]">
                {w.desc}
              </p>
            </motion.div>

            {/* glow on hover */}
            <motion.div
              className="
                absolute inset-0 rounded-[32px]
                pointer-events-none opacity-0
                group-hover:opacity-100
              "
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 15px 45px rgba(0,0,0,0.25)",
                ],
              }}
              transition={{ duration: 0.45 }}
            />
          </motion.div>
        ))}
      </div>

      {/* footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xs opacity-60 mt-16 tracking-wider text-center"
      >
        Hover a thumbnail to preview mood & tone
      </motion.p>
    </section>
  );
}
