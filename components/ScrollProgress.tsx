"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calc = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("scroll", calc);
    return () => window.removeEventListener("scroll", calc);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-purple-500 dark:bg-cyan-300 transition-all duration-300"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}
