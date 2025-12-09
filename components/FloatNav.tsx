"use client";
import { motion } from "framer-motion";

export default function FloatNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed z-[9999] top-6 w-full flex justify-center pointer-events-none"
    >
      <nav
        className="
        pointer-events-auto
        flex gap-6
        px-10 py-3
        rounded-full
        bg-white/90
        dark:bg-white/10
        backdrop-blur-xl
        text-sm font-medium text-black dark:text-white
        border border-black/10 dark:border-white/20
        shadow-[0_4px_24px_rgba(0,0,0,0.18)]
        transition-all
      "
      >
        <a href="#slide1" className="hover:opacity-60 transition">Intro</a>
        <a href="#slide2" className="hover:opacity-60 transition">Who</a>
        <a href="#slide3" className="hover:opacity-60 transition">Work</a>
        <a href="#slide4" className="hover:opacity-60 transition">Contact</a>
      </nav>
    </motion.div>
  );
}
