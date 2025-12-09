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
      {/* IMPORTANT → Apply theme BEFORE page loads */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `,
        }}
      />

      <body
        className="
          antialiased
          min-h-screen
          transition-colors duration-500
          bg-light-bg text-light-text
          dark:bg-dark-bg dark:text-dark-text
        "
      >
        <ClientEffects />

        {children}

        <ThemeFloatingToggle />
      </body>
    </html>
  );
}
