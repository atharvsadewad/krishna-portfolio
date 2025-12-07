"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Video Editing Tools",
    color: "from-white to-gray-400",
    skills: [
      { name: "Premiere Pro", level: 95 },
      { name: "Final Cut Pro", level: 90 },
      { name: "DaVinci Resolve", level: 85 },
    ],
  },
  {
    title: "Photography Tools",
    color: "from-gray-300 to-gray-500",
    skills: [
      { name: "Lightroom", level: 92 },
      { name: "Photoshop", level: 88 },
    ],
  },
  {
    title: "Animation Tools",
    color: "from-white to-gray-400",
    skills: [
      { name: "After Effects", level: 90 },
      { name: "Blender", level: 75 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
            Skills & Tools
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
      </motion.div>

      <div ref={ref} className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            className="bg-[#1a1a1a]/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all"
          >
            <h3 className="text-xl font-heading font-semibold mb-6 text-center">
              {group.title}
            </h3>
            <div className="space-y-4">
              {group.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80 font-medium">{skill.name}</span>
                    <span className="text-white font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${group.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: groupIndex * 0.2 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

