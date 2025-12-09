"use client";

import { useEffect, useState } from "react";

export default function ThemeFloatingToggle() {
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState<string>("light");

  // Read preset theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  };

  // Auto hide when user not interacting
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const activate = () => {
      setVisible(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(false);
      }, 2000);
    };

    window.addEventListener("mousemove", activate);
    window.addEventListener("scroll", activate);

    activate(); // call initially

    return () => {
      window.removeEventListener("mousemove", activate);
      window.removeEventListener("scroll", activate);
    };
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 left-6 z-[9999]
        transition-opacity duration-500
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={toggleTheme}
        className={`
          relative w-16 h-8 rounded-full flex items-center px-1
          transition-all duration-500 border
          ${ theme === "dark" 
              ? "bg-white border-white justify-end" 
              : "bg-black border-black justify-start"
          }
        `}
      >
        <div
          className={`
            w-6 h-6 rounded-full transition-all duration-500
            ${ theme === "dark" ? "bg-black" : "bg-white"}
          `}
        ></div>
      </button>
    </div>
  );
}
