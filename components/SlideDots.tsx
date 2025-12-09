"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function SlideDots() {
  const { scrollYProgress } = useScroll();

  const ranges = [
    [0.00, 0.12],
    [0.12, 0.25],
    [0.25, 0.37],
    [0.37, 0.50],
    [0.50, 0.62],
    [0.62, 0.75],
    [0.75, 0.87],
    [0.87, 1.00],
  ];

  const items = ranges.map((range, index) => ({
    link: `#slide${index + 1}`,
    scale: useTransform(scrollYProgress, range, [1, 0]),
  }));

  return (
    <motion.div
      className="
        fixed right-10 top-1/2 -translate-y-1/2 
        flex flex-col gap-4 
        z-[9999]
      "
    >
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          className="
            relative w-3 h-3 rounded-full 
            dark:bg-white/30 bg-black/30
            hover:scale-125 transition-transform
          "
        >
          <motion.div
            style={{ scale: item.scale }}
            className="absolute inset-0 rounded-full dark:bg-white bg-black"
          />
        </motion.a>
      ))}
    </motion.div>
  );
}
