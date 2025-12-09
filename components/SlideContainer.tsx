"use client";

import { ReactNode } from "react";

export default function SlideContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-screen h-screen
        overflow-y-scroll
        snap-y snap-mandatory
        no-scrollbar
        bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text
      "
    >
      {children}
    </div>
  );
}
