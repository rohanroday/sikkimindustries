"use client";

import { MotionConfig } from "framer-motion";

// "user" honours prefers-reduced-motion: transforms and layout moves are skipped, fades stay.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
