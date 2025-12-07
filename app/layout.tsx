import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krishna Burse | Video Editor | Photographer | Animator",
  description: "Professional portfolio of Krishna Burse - Expert in video editing, photography, and animation",
  keywords: "video editor, photographer, animator, motion design, portfolio",
  authors: [{ name: "Krishna Burse" }],
  openGraph: {
    title: "Krishna Burse | Creative Professional",
    description: "Video Editor | Photographer | Animator",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

