"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/60 text-sm"
        >
          © 2025 Krishna Burse. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

