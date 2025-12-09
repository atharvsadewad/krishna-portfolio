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
import Slide5ProjectDetails from "@/components/slides/Slide5ProjectDetails";
import Slide6Tools from "@/components/slides/Slide6Tools";
import Slide7Contact from "@/components/slides/Slide7Contact";
import Slide8Credits from "@/components/slides/Slide8Credits";

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
        <Slide5ProjectDetails />  {/* Detailed preview UI */}
        <Slide6Tools />           {/* Tools & workflow */}
        <Slide7Contact />         {/* Contact CTA */}
        <Slide8Credits />         {/* Credits */}
      </SlideContainer>
    </>
  );
}
