"use client";

import { useEffect } from "react";
import { initSmoothScroll } from "@/app/utils/smoothscroll";
import CursorGlow from "./CursorGlow";
import ThemeToggle from "./ThemeToggle";

export default function ClientEffects() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <>
      <CursorGlow />
      <ThemeToggle />
    </>
  );
}
