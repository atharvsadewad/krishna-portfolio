"use client";
import { motion } from "framer-motion";

export default function FloatNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="fixed z-[9999] top-6 w-full flex justify-center pointer-events-none"
    >
      <nav
        className="
          pointer-events-auto
          flex gap-8
          px-10 py-3
          rounded-full
          nav-glass
          transition-all duration-300 select-none
          font-medium
        "
      >
        <a
          href="#slide1"
          className="hover:opacity-70 transition-opacity"
        >
          Intro
        </a>

        <a
          href="#slide2"
          className="hover:opacity-70 transition-opacity"
        >
          Who
        </a>

        <a
          href="#slide3"
          className="hover:opacity-70 transition-opacity"
        >
          Work
        </a>

        <a
          href="#slide7"
          className="hover:opacity-70 transition-opacity"
        >
          Contact
        </a>
      </nav>
    </motion.div>
  );
}
