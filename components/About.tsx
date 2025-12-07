"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  const handleDownload = () => {
    // Placeholder for resume download
    alert("Resume download functionality - Add your resume file in public/assets/resume.pdf");
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-white/10 to-gray-500/20 p-1">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center border-2 border-white/20">
              <div className="text-6xl font-bold text-white">KB</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-white/80 text-lg leading-relaxed">
            I'm a creative professional passionate about bringing stories to life through
            video editing, photography, and animation. With years of experience in the
            industry, I specialize in creating visually stunning content that captivates
            audiences and delivers powerful messages.
          </p>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">
              Specializations
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>• Cinematic Video Editing & Post-Production</li>
              <li>• Professional Photography & Retouching</li>
              <li>• Motion Graphics & Animation</li>
              <li>• Color Grading & Visual Effects</li>
            </ul>
          </div>

          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg shadow-white/20 hover:shadow-white/30 hover:bg-gray-100 transition-all"
          >
            <Download size={20} />
            Download Résumé
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

