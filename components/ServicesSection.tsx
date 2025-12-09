"use client";

import { motion } from "framer-motion";

const services = [
  {
    tag: "01",
    title: "Video Editing",
    points: [
      "Cinematic cuts & pacing",
      "Story-first structuring",
      "Sound sync & beat edits",
      "Color grading for mood",
    ],
  },
  {
    tag: "02",
    title: "Photography",
    points: [
      "Portrait & lifestyle shoots",
      "Clean, stylized compositions",
      "Natural & stylized edits",
      "Delivery for social & print",
    ],
  },
  {
    tag: "03",
    title: "Motion & Graphics",
    points: [
      "Title animations",
      "Logo & text reveals",
      "Animated overlays for reels",
      "Social media graphic motion",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
            what I can do for you
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
            Editing, frames & motion crafted
            <span className="block text-neutral-600 dark:text-neutral-300 text-base sm:text-lg mt-2">
              for creators, brands and stories that need impact.
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 text-sm shadow-sm transition-colors dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-neutral-400">
                  {service.tag}
                </span>
                <span className="h-6 w-6 rounded-full border border-neutral-300 text-[10px] flex items-center justify-center text-neutral-500 group-hover:bg-black group-hover:text-white dark:border-neutral-700 dark:text-neutral-300 dark:group-hover:bg-white dark:group-hover:text-black transition">
                  +
                </span>
              </div>
              <h3 className="text-base font-semibold text-black dark:text-white mb-3">
                {service.title}
              </h3>
              <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300 text-xs">
                {service.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-[6px] h-[4px] w-[4px] rounded-full bg-neutral-400 dark:bg-neutral-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
