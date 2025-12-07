"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // GSAP can be used for additional animations if needed
    // Most animations are handled by Framer Motion
  }, []);

  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

