import type { Metadata } from "next";
import "./globals.css";
import ClientEffects from "@/components/ClientEffects";
import ThemeFloatingToggle from "@/components/ThemeFloatingToggle";

export const metadata: Metadata = {
  title: "Krishna Burse | Video Editor | Photographer | Animator",
  description:
    "Professional portfolio of Krishna Burse - Expert in video editing, photography, and animation",
  keywords:
    "video editor, photographer, animator, motion design, portfolio",
  authors: [{ name: "Krishna Burse" }],
  openGraph: {
    title: "Krishna Burse | Creative Professional",
    description: "Video Editor | Photographer | Animator",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          antialiased
          min-h-screen
          transition-colors duration-500
          bg-light-bg text-light-text
          dark:bg-dark-bg dark:text-dark-text
        "
      >
        {/* Auto theme loader, scroll, pointer logic */}
        <ClientEffects />

        {/* Render all slides & page content */}
        {children}

        {/* Floating Theme Switch */}
        <ThemeFloatingToggle />
      </body>
    </html>
  );
}
