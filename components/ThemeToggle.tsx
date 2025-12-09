"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("rgba(0,0,0,0.10)");

  const handleMove = (e: MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const applyTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setColor(isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.08)");
  };

  useEffect(() => {
    applyTheme();
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("themeChanged", applyTheme);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("themeChanged", applyTheme);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: coords.x - 90,
        top: coords.y - 90,
        width: 180,
        height: 180,
        borderRadius: "100%",
        background: color,
        filter: "blur(60px)",
        transition: "background 0.4s ease"
      }}
    ></div>
  );
}
