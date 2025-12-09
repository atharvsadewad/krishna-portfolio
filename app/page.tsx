"use client";

import FadeTransition from "@/components/FadeTransition";
import CursorGlow from "@/components/CursorGlow";
import FloatNav from "@/components/FloatNav";
import SlideDots from "@/components/SlideDots";
import SlideContainer from "@/components/SlideContainer";

import Slide1Intro from "@/components/slides/Slide1Intro";
import Slide2Who from "@/components/slides/Slide2Who";
import Slide3Work from "@/components/slides/Slide3Work";
import Slide4Showcase from "@/components/slides/Slide4Showcase";
import Slide6Tools from "@/components/slides/Slide6Tools";
import Slide7Contact from "@/components/slides/Slide7Contact";
import Slide8Credits from "@/components/slides/Slide8Credits";
import { motion } from "framer-motion";

// Inline definition of Slide5ProjectDetails to avoid import issues
function Slide5ProjectDetails() {
  return (
    <section
      id="slide5"
      className="relative h-screen snap-start bg-white text-black flex flex-col justify-center px-20"
    >
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-[54px] font-semibold leading-tight max-w-3xl"
      >
        Creating visuals that are
        <span className="block text-transparent bg-gradient-to-r from-black to-gray-400 bg-clip-text">
          refined, stylized and emotional.
        </span>
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-14 text-lg space-y-5 text-neutral-600"
      >
        <li>— Creator reels with storyline sequencing</li>
        <li>— Music-driven visual edits</li>
        <li>— Minimal studio-style promo pieces</li>
        <li>— Portrait visuals that highlight emotion</li>
      </motion.ul>

      <p className="mt-10 text-sm opacity-70">
        Selected works available in next slide with preview and breakdown.
      </p>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Cinematic Fade-in */}
      <FadeTransition />

      {/* Floating Cursor Glow */}
      <CursorGlow />

      {/* Slide Navigation Dots */}
      <SlideDots />

      {/* Floating Navigation */}
      <FloatNav />

      {/* Slides in order */}
      <SlideContainer>
        <Slide1Intro />           {/* Intro */}
        <Slide2Who />             {/* Krishna identity */}
        <Slide3Work />            {/* What he does / value */}
        <Slide4Showcase />        {/* Selected work thumbnails */}
        <Slide5ProjectDetails />  {/* About the style of work */}
        <Slide6Tools />           {/* Tools & workflow */}
        <Slide7Contact />         {/* CTA */}
        <Slide8Credits />         {/* Credits / Fathers Media */}
      </SlideContainer>
    </>
  );
}
