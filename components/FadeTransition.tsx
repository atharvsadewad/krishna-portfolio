"use client";
import { motion } from "framer-motion";

export default function FadeTransition() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed inset-0 bg-black pointer-events-none z-[9990]"
    />
  );
}
