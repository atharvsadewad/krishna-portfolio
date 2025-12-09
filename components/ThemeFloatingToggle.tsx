"use client";

import { useEffect, useState } from "react";

export default function ThemeFloatingToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    window.dispatchEvent(new Event("themeChanged"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed bottom-6 left-6 w-12 h-6 rounded-full transition-all duration-300
        flex items-center px-1
        dark:bg-white bg-black
        border border-neutral-700 dark:border-neutral-400
        z-[10000]
      "
    >
      <div
        className={`
          w-4 h-4 rounded-full transition-all
          ${dark ? "translate-x-6 bg-black" : "translate-x-0 bg-white"}
        `}
      ></div>
    </button>
  );
}
