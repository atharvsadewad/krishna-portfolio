import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ADD THESE LINES so "bg-light-bg" works in Tailwind
        'light-bg': 'var(--light-bg)',
        'dark-bg': 'var(--dark-bg)',
        'light-text': 'var(--light-text)',
        'dark-text': 'var(--dark-text)',
        
        neon: {
          cyan: "#00ffff",
          pink: "#ff00ff",
          green: "#00ff00",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;