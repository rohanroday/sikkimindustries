"use client";

import { useEffect, useState } from "react";
import { Close, Menu } from "./Icons";

const links = [
  { href: "#invest", label: "Invest" },
  { href: "#incentives", label: "Incentives" },
  { href: "#schemes", label: "Schemes" },
  { href: "#notices", label: "Notices" },
  { href: "#districts", label: "Districts" },
  { href: "#contact", label: "Contact" },
];

const SIZES = [93.75, 100, 112.5];
const SIZE_LABELS = ["Smaller text", "Default text size", "Larger text"];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(1);
  const [contrast, setContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${SIZES[size]}%`;
  }, [size]);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-contrast", contrast);
  }, [contrast]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Rendered twice: in the utility bar on wide screens, inside the menu on phones.
  const tools = (
    <>
      <span className="tool-label">Text</span>
      {["A−", "A", "A+"].map((l, i) => (
        <button
          key={l}
          type="button"
          className="tool"
          aria-pressed={size === i}
          aria-label={SIZE_LABELS[i]}
          onClick={() => setSize(i)}
        >
          {l}
        </button>
      ))}
      <button type="button" className="tool tool-wide" aria-pressed={contrast} onClick={() => setContrast((c) => !c)}>
        High contrast
      </button>
    </>
  );

  return (
    <>
      <div className="utility">
        <div className="wrap utility-row">
          <a className="skip" href="#main">
            Skip to main content
          </a>
          <p className="concept-note">
            Redesign concept, not the official website.{" "}
            <a href="https://industries.sikkim.gov.in/visitors">Visit the live site</a>
          </p>
          <div className="utility-tools" role="group" aria-label="Display settings">
            {tools}
            <span className="tool-lang" title="Hindi and Nepali versions are planned">
              English · <span lang="hi">हिन्दी</span> · <span lang="ne">नेपाली</span>
            </span>
          </div>
        </div>
      </div>

      <header className="masthead">
        <div className="wrap masthead-row">
          <a className="brand" href="#top" aria-label="Commerce & Industries Department, Government of Sikkim, home">
            <img src="/img/emblem.webp" width={52} height={48} alt="" />
            <span className="brand-text" aria-hidden="true">
              <span className="brand-dept">
                Commerce &amp; Industries<span className="brand-long"> Department</span>
              </span>
              <span className="brand-gov">
                <span className="brand-short">Department · </span>Government of Sikkim
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="nav">
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="nav-list"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <Close /> : <Menu />}
              <span>Menu</span>
            </button>
            <ul id="nav-list" className="nav-list" data-open={open}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="nav-tools" role="group" aria-label="Display settings">
                {tools}
              </li>
            </ul>
          </nav>

          <img className="dept-seal" src="/img/dept-logo.webp" width={70} height={56} alt="Seal of the Commerce & Industries Department" />
        </div>
      </header>
    </>
  );
}
