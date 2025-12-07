"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    company: "Studio X",
    content: "Krishna's video editing skills are exceptional. He transformed our raw footage into a cinematic masterpiece that exceeded all expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Manager",
    company: "Brand Co",
    content: "Working with Krishna was a pleasure. His attention to detail and creative vision brought our brand story to life in ways we never imagined.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Event Coordinator",
    company: "Events Plus",
    content: "The wedding film Krishna created for us was absolutely stunning. Every frame was perfect, and the emotional storytelling was incredible.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO",
    company: "Tech Innovations",
    content: "Krishna's motion graphics work elevated our product launch. Professional, creative, and delivered on time. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Testimonials
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -50 * (testimonials.length * 400 + testimonials.length * 24)],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[400px] bg-[#1a1a1a]/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all"
            >
              <Quote className="text-white/60 mb-4" size={32} />
              <p className="text-white/80 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

