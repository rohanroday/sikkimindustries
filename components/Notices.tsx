"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { noticeArchive, notices } from "@/app/content";
import { ArrowRight, FileDoc } from "./Icons";

const tabs = [
  { id: "tenders", label: "Tenders & RFPs", archive: "All tenders and RFPs" },
  { id: "reports", label: "Reports", archive: "All reports and notifications" },
  { id: "circulars", label: "Circulars", archive: "All circulars" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

const ease = [0.23, 1, 0.32, 1] as const;

export default function Notices() {
  const [active, setActive] = useState<TabId>("tenders");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className="notices">
      <div className="tabs" role="tablist" aria-label="Notice type">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            className="tab"
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
            <span className="tab-count">{notices[t.id].length}</span>
            {active === t.id && (
              <motion.span
                layoutId="tab-ink"
                className="tab-ink"
                aria-hidden="true"
                transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              />
            )}
          </button>
        ))}
      </div>

      {tabs.map((t) => {
        const on = active === t.id;
        return (
          <motion.div
            key={t.id}
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            hidden={!on}
            className="notice-panel"
            initial={false}
            animate={on ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(8px)" }}
            transition={{ duration: 0.25, ease }}
          >
            <ol className="notice-list">
              {notices[t.id].map((n) => (
                <li key={n.href}>
                  <a className="notice" href={n.href} target="_blank" rel="noopener">
                    <FileDoc className="notice-icon" />
                    <span className="notice-body">
                      <span className="notice-title">{n.title}</span>
                      <span className="notice-date">
                        <time dateTime={n.date}>Published {formatDate(n.date)}</time>
                        {t.id === "tenders" && " · Closing date and status: see the PDF"}
                      </span>
                    </span>
                    <span className="notice-meta">
                      PDF<span className="sr-only">, opens in a new tab</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
            <a className="inline-link archive-link" href={noticeArchive[t.id]}>
              {t.archive} <ArrowRight className="icon-inline" />
            </a>
          </motion.div>
        );
      })}
    </div>
  );
}
