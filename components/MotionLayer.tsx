"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASE = "expo.out";
const HEADER_OFFSET = -96;

// Counts a figure like "₹30,000 Cr" or "8,000 MW" up from zero, keeping its prefix and suffix.
// Screen readers always get the real figure from a visually hidden copy; only an aria-hidden twin counts.
function countUp(el: HTMLElement, duration = 1.4) {
  // Remember the true value once, so a re-run (Strict Mode, hot reload) never counts to a half-finished number.
  el.dataset.final ??= el.textContent ?? "";
  const final = el.dataset.final;
  const match = final.match(/\d[\d,]*/);
  if (!match) return null;
  let counter = el.querySelector<HTMLElement>("[data-counter]");
  if (!counter) {
    el.textContent = "";
    const real = document.createElement("span");
    real.className = "sr-only";
    real.textContent = final;
    counter = document.createElement("span");
    counter.dataset.counter = "";
    counter.setAttribute("aria-hidden", "true");
    el.append(real, counter);
  }
  const target = Number(match[0].replace(/,/g, ""));
  const state = { v: 0 };
  const show = (n: number) => {
    counter!.textContent = final.replace(match[0], Math.round(n).toLocaleString("en-IN"));
  };
  show(0);
  return gsap.to(state, {
    v: target,
    duration,
    ease: EASE,
    onUpdate: () => show(state.v),
    onComplete: () => {
      counter!.textContent = final;
    },
  });
}

export default function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    ScrollTrigger.config({ ignoreMobileResize: true });

    // Smooth scroll for mouse and trackpad only; touch keeps native momentum scrolling.
    let lenis: Lenis | undefined;
    const raf = (t: number) => lenis?.raf(t * 1000);
    // Wheel and trackpad are smoothed everywhere (including narrow windows); finger scrolling stays native.
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.075, wheelMultiplier: finePointer ? 0.8 : 0.7, smoothWheel: true, syncTouch: false });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    // In-page links: glide with Lenis, clear the sticky header, and move focus for the skip link.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a || !lenis) return;
      const target = document.querySelector<HTMLElement>(a.getAttribute("href")!);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, {
        offset: a.classList.contains("skip") ? 0 : HEADER_OFFSET,
        duration: 1.6,
        easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
      });
      if (target.tabIndex >= 0 || target.id === "main") target.focus({ preventScroll: true });
      history.replaceState(null, "", a.getAttribute("href"));
    };
    document.addEventListener("click", onClick);

    const mm = gsap.matchMedia();
    mm.add(
      { motion: "(prefers-reduced-motion: no-preference)", wide: "(min-width: 900px)" },
      (ctx) => {
        const { motion, wide } = ctx.conditions as { motion: boolean; wide: boolean };
        if (!motion) {
          root.removeAttribute("data-intro");
          return;
        }

        // ── First viewport: the cloth is woven in ──
        gsap.set([".hero-copy", ".hero-figure-frame", ".weft"], { visibility: "visible" });
        root.removeAttribute("data-intro");

        const intro = gsap.timeline({ defaults: { ease: EASE } });
        intro
          .from(".hero-figure", { clipPath: "inset(0 0 100% 0)", y: 48, duration: 1.1 }, 0)
          .from(".hero-line", { y: 28, opacity: 0, duration: 0.9 }, 0.18)
          .from([".hero-lede", ".hero-actions"], { y: 20, opacity: 0, duration: 0.8, stagger: 0.07 }, 0.3)
          .from(".frame-weave", { clipPath: "inset(0 0 100% 0)", duration: 1.3, ease: "expo.inOut" }, 0.1)
          .from(".frame-weave img", { scale: 1.18, duration: 1.8 }, 0.1)
          .from(".hero-figure-frame figcaption", { opacity: 0, y: 8, duration: 0.6 }, 1)
          .from(".weft-item", { y: 18, opacity: 0, duration: 0.7, stagger: 0.07 }, 0.5);

        const heroCount = countUp(document.querySelector<HTMLElement>(".hero-figure")!, 1.6);
        if (heroCount) intro.add(heroCount, 0.05);
        document.querySelectorAll<HTMLElement>(".weft-item dd").forEach((dd, i) => {
          const t = countUp(dd, 1.3);
          if (t) intro.add(t, 0.55 + i * 0.07);
        });

        if (wide) {
          gsap.to(".hero-figure-frame", {
            yPercent: -14,
            ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
          });
        }

        // ── Stripe bands weave across as they scroll in ──
        gsap.utils.toArray<HTMLElement>(".band").forEach((band) => {
          gsap.fromTo(
            band,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              ease: "none",
              scrollTrigger: { trigger: band, start: "top 98%", end: "top 62%", scrub: 0.6 },
            },
          );
        });

        // ── The Lepcha band drifts like cloth through a loom ──
        gsap.utils.toArray<HTMLElement>(".lozenge-band").forEach((band) => {
          gsap.fromTo(
            band,
            { backgroundPositionX: "0px" },
            {
              backgroundPositionX: wide ? "-240px" : "-144px",
              ease: "none",
              scrollTrigger: { trigger: band, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        // ── Shuttle sweeps: rows are woven in left to right, the way weft crosses the warp ──
        // Only list rows sweep; headings, copy and forms stay visible and still.
        const sweep = (selector: string, trigger: string, stagger: number) =>
          gsap.from(selector, {
            clipPath: "inset(0 100% 0 0)",
            duration: 0.9,
            ease: "expo.inOut",
            stagger,
            scrollTrigger: { trigger, start: "top 85%", once: true },
          });
        sweep(".door-list > li", ".door-list", 0.08);
        sweep(".ledger-row", ".ledger", 0.1);
        sweep(".scheme-list > li", ".scheme-list", 0.04);

        // ── Each kind of content gets its own entrance (phones included), never one blanket effect ──
        const onEnter = (trigger: Element, vars: gsap.TweenVars) =>
          gsap.from(trigger, { ...vars, scrollTrigger: { trigger, start: "top 88%", once: true } });

        // Section headings rise out of a mask, like a line of type being set.
        gsap.utils.toArray<HTMLElement>(".h2").forEach((h) =>
          onEnter(h, { clipPath: "inset(0 0 100% 0)", yPercent: 40, duration: 1, ease: EASE }),
        );
        // Intro paragraphs settle in softly behind their heading.
        gsap.utils.toArray<HTMLElement>(".section-head p, .why-copy > p, .network .lead, .contact-info .lead").forEach((p) =>
          onEnter(p, { opacity: 0, y: 14, duration: 0.8, ease: EASE, delay: 0.12 }),
        );
        // Advantage ticks step in from the left, one stitch at a time.
        gsap.from(".ticks li", {
          opacity: 0,
          x: -14,
          duration: 0.6,
          ease: EASE,
          stagger: 0.05,
          scrollTrigger: { trigger: ".ticks", start: "top 88%", once: true },
        });
        // Coloured panels unroll downward like cloth off a loom.
        gsap.utils.toArray<HTMLElement>(".routes, .form").forEach((panel) =>
          onEnter(panel, { clipPath: "inset(0 0 100% 0)", duration: 1.2, ease: "expo.inOut" }),
        );
        // Notices lift into place as one board.
        onEnter(document.querySelector(".notices")!, { opacity: 0, y: 24, duration: 0.9, ease: EASE });
        // Milestone rows slide in from the right, opposite to the lead photo's unveil.
        gsap.from(".ms-item", {
          opacity: 0,
          x: 28,
          duration: 0.8,
          ease: EASE,
          stagger: 0.09,
          scrollTrigger: { trigger: ".ms-list", start: "top 88%", once: true },
        });
        // Portraits come forward in their woven frames.
        gsap.from(".leader", {
          opacity: 0,
          scale: 0.94,
          duration: 0.7,
          ease: EASE,
          stagger: 0.1,
          scrollTrigger: { trigger: ".leader-list", start: "top 88%", once: true },
        });
        // Step text follows its thread rule.
        gsap.from(".step > *", {
          opacity: 0,
          y: 12,
          duration: 0.7,
          ease: EASE,
          stagger: 0.04,
          scrollTrigger: { trigger: ".steps", start: "top 85%", once: true },
        });
        // Contact lines and PSU names tick in.
        [".psu-list", ".contact-list"].forEach((list) =>
          gsap.from(`${list} li`, {
            opacity: 0,
            x: -10,
            duration: 0.6,
            ease: EASE,
            stagger: 0.05,
            scrollTrigger: { trigger: list, start: "top 88%", once: true },
          }),
        );

        // ── Sector tiles arrive on the diagonal, like a twill ──
        const grid = document.querySelector<HTMLElement>(".loom-grid");
        if (grid) {
          const cols = getComputedStyle(grid).gridTemplateColumns.split(" ").length;
          gsap.from(".loom-grid > li", {
            opacity: 0,
            y: 22,
            duration: 0.7,
            ease: EASE,
            stagger: (i: number) => ((i % cols) + Math.floor(i / cols)) * 0.055,
            scrollTrigger: { trigger: grid, start: "top 86%", once: true },
          });
        }

        // ── District grid, same weave ──
        gsap.from(".dic-list > li", {
          opacity: 0,
          y: 18,
          duration: 0.6,
          ease: EASE,
          stagger: 0.06,
          scrollTrigger: { trigger: ".dic-list", start: "top 88%", once: true },
        });

        // ── Step rules draw like a thread pulled taut ──
        gsap.fromTo(
          ".step",
          { backgroundSize: "0% 4px" },
          {
            backgroundSize: "100% 4px",
            duration: 1.1,
            ease: "expo.inOut",
            stagger: 0.12,
            scrollTrigger: { trigger: ".steps", start: "top 85%", once: true },
          },
        );

        // ── Lead milestone photo is unveiled ──
        gsap.from(".ms-lead img", {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.3,
          ease: "expo.inOut",
          scrollTrigger: { trigger: ".ms-lead", start: "top 85%", once: true },
        });

        // ── Incentive figures count up as each row lands ──
        gsap.utils.toArray<HTMLElement>(".ledger-figure").forEach((fig) => {
          ScrollTrigger.create({
            trigger: fig,
            start: "top 88%",
            once: true,
            onEnter: () => countUp(fig, 1.2),
          });
        });
      },
    );

    return () => {
      mm.revert();
      document.querySelectorAll<HTMLElement>("[data-final]").forEach((el) => {
        el.textContent = el.dataset.final!;
      });
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
