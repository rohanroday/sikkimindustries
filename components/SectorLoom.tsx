"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sectors } from "@/app/content";
import { ArrowRight, Check } from "./Icons";

export const SECTOR_EVENT = "sector-select";

// The marigold weft slides from the old pick to the new one.
const shuttle = { type: "spring", duration: 0.5, bounce: 0.2 } as const;

export default function SectorLoom() {
  const [picked, setPicked] = useState<string | null>(null);

  const pick = (s: string) => {
    const next = picked === s ? null : s;
    setPicked(next);
    window.dispatchEvent(new CustomEvent(SECTOR_EVENT, { detail: next }));
  };

  return (
    <div className="loom">
      <ul className="loom-grid" aria-label="Thrust sectors">
        {sectors.map((s) => {
          const on = picked === s;
          return (
            <li key={s}>
              <motion.button
                type="button"
                className="loom-tile"
                aria-pressed={on}
                onClick={() => pick(s)}
                animate={{ transform: on ? "translateY(-6px)" : "translateY(0px)" }}
                transition={shuttle}
              >
                {on && <motion.span layoutId="loom-pick" className="loom-pick" transition={shuttle} aria-hidden="true" />}
                <span className="loom-name">{s}</span>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.span
                      className="loom-check"
                      aria-hidden="true"
                      initial={{ opacity: 0, transform: "scale(0.9)" }}
                      animate={{ opacity: 1, transform: "scale(1)" }}
                      exit={{ opacity: 0, transform: "scale(0.9)" }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <Check />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </li>
          );
        })}
      </ul>
      <p className="loom-status" aria-live="polite">
        {picked ? (
          <>
            <strong>{picked}</strong> is added to your enquiry.{" "}
            <a href="#contact" className="inline-link">
              Finish your enquiry <ArrowRight className="icon-inline" />
            </a>
          </>
        ) : (
          "Pick a sector to start an investment enquiry."
        )}
      </p>
    </div>
  );
}
