"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Youtube, Linkedin, Palette, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-400" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-red-400" },
    { name: "Behance", icon: Palette, href: "https://behance.net", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-cyan-400" },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-[#1a1a1a]/60 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#1a1a1a]/60 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 bg-black/40 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg shadow-white/20 hover:shadow-white/30 hover:bg-gray-100 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
              Connect With Me
            </h3>
            <p className="text-white/70 leading-relaxed">
              Feel free to reach out through the form or connect with me on social media.
              I'm always open to discussing new projects and creative opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 bg-[#1a1a1a]/60 border border-white/10 rounded-lg text-white/80 hover:text-white hover:border-white/30 transition-all`}
                aria-label={`Visit ${social.name} profile`}
              >
                <social.icon size={20} />
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <Mail size={20} className="text-white/80" />
            <span>krishna.burse@example.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

