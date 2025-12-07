"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    category: "Video Editing",
    title: "Cinematic Wedding Film",
    description: "A beautiful wedding story told through cinematic editing",
    type: "video",
    thumbnail: "/api/placeholder/400/300",
  },
  {
    id: 2,
    category: "Photography",
    title: "Urban Portrait Series",
    description: "Street photography capturing urban life",
    type: "image",
    thumbnail: "/api/placeholder/400/300",
  },
  {
    id: 3,
    category: "Motion Design",
    title: "Brand Animation",
    description: "Animated logo and brand identity",
    type: "video",
    thumbnail: "/api/placeholder/400/300",
  },
  {
    id: 4,
    category: "Video Editing",
    title: "Music Video",
    description: "High-energy music video with dynamic cuts",
    type: "video",
    thumbnail: "/api/placeholder/400/300",
  },
  {
    id: 5,
    category: "Photography",
    title: "Nature Landscape",
    description: "Breathtaking landscapes from around the world",
    type: "image",
    thumbnail: "/api/placeholder/400/300",
  },
  {
    id: 6,
    category: "Motion Design",
    title: "Product Showcase",
    description: "3D animated product presentation",
    type: "video",
    thumbnail: "/api/placeholder/400/300",
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))];
  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter((item) => item.category === filter);

  return (
    <section
      id="portfolio"
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
            Portfolio
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"></div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-[#1a1a1a]/60 border border-white/10"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-video bg-gradient-to-br from-white/10 to-gray-500/20 flex items-center justify-center">
                {item.type === "video" ? (
                  <Play className="text-white/60" size={48} />
                ) : (
                  <ImageIcon className="text-white/60" size={48} />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <span className="text-white/80 text-sm font-medium">{item.category}</span>
                  <h3 className="text-xl font-heading font-semibold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#1a1a1a] border border-white/20 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-[#1a1a1a]/80 rounded-full p-2 hover:bg-[#1a1a1a] transition-colors"
                aria-label="Close modal"
              >
                <X className="text-white" size={24} />
              </button>
              <div className="aspect-video bg-gradient-to-br from-white/10 to-gray-500/20 flex items-center justify-center">
                {selectedItem.type === "video" ? (
                  <Play className="text-white/60" size={64} />
                ) : (
                  <ImageIcon className="text-white/60" size={64} />
                )}
              </div>
              <div className="p-6">
                <span className="text-white/80 text-sm font-medium">{selectedItem.category}</span>
                <h3 className="text-2xl font-heading font-semibold text-white mt-2">
                  {selectedItem.title}
                </h3>
                <p className="text-white/70 mt-2">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

