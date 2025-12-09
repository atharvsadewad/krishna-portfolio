import type { Metadata } from "next";
import "./globals.css";
import ClientEffects from "@/components/ClientEffects";
import ThemeFloatingToggle from "@/components/ThemeFloatingToggle";

export const metadata: Metadata = {
  title: "Krishna Burse | Video Editor | Photographer | Animator",
  description:
    "Professional portfolio of Krishna Burse - Expert in video editing, photography, and animation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Loader FIRST → fixes production issue */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                const saved = localStorage.getItem("theme");
                if (saved === "dark") document.documentElement.classList.add("dark");
                if (saved === "light") document.documentElement.classList.remove("dark");
              } catch (e) {}
            })();`,
          }}
        />
      </head>

      <body
        className="
          antialiased
          transition-colors duration-500
          bg-light-bg text-light-text
          dark:bg-dark-bg dark:text-dark-text
        "
      >
        {/* auto theme watcher + pointer */}
        <ClientEffects />

        {children}

        <ThemeFloatingToggle />
      </body>
    </html>
  );
}
