"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sectors } from "@/app/content";
import { SECTOR_EVENT } from "./SectorLoom";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const ease = [0.23, 1, 0.32, 1] as const;

export default function EnquiryForm() {
  const [topic, setTopic] = useState("Investment enquiry");
  const [sector, setSector] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const on = (e: Event) => {
      const s = (e as CustomEvent<string | null>).detail;
      setSector(s ?? "");
      if (s) setTopic("Investment enquiry");
    };
    window.addEventListener(SECTOR_EVENT, on);
    return () => window.removeEventListener(SECTOR_EVENT, on);
  }, []);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(f.get("name")).trim()) next.name = "Enter your name.";
    const email = String(f.get("email")).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter an email address like name@example.com.";
    const phone = String(f.get("phone")).replace(/[\s-]/g, "");
    if (phone && !/^(\+91)?[6-9]\d{9}$|^0?\d{10,11}$/.test(phone)) next.phone = "Enter a 10-digit mobile or a landline with STD code.";
    if (String(f.get("message")).trim().length < 10) next.message = "Tell us a little more, at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    setSent(true);
  };

  const err = (k: keyof Errors) => (
    <AnimatePresence initial={false}>
      {errors[k] && (
        <motion.p
          key={k}
          className="field-error"
          id={`${k}-error`}
          initial={{ opacity: 0, transform: "translateY(-4px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16, ease }}
        >
          {errors[k]}
        </motion.p>
      )}
    </AnimatePresence>
  );

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="done"
          className="form-done"
          role="status"
          initial={{ opacity: 0, transform: "translateY(8px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease }}
        >
          <svg className="form-done-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <motion.path
              d="M4 12l5 5L20 6"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.45, ease, delay: 0.1 }}
            />
          </svg>
          <p className="form-done-title">Thank you. Your enquiry is ready to send.</p>
          <p>
            In this concept nothing is sent. On the live site, the department&rsquo;s team would get it and reply by
            email, with a reference number for grievances.
          </p>
          <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>
            Write another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          className="form"
          noValidate
          onSubmit={submit}
          exit={{ opacity: 0, transform: "translateY(-8px)" }}
          transition={{ duration: 0.2, ease }}
        >
          <fieldset className="field topic">
            <legend>What is this about?</legend>
            {["Investment enquiry", "Scheme or licence", "Tender question", "Grievance"].map((t) => (
              <label key={t} className="chip">
                <input type="radio" name="topic" value={t} checked={topic === t} onChange={() => setTopic(t)} />
                <span>{t}</span>
              </label>
            ))}
          </fieldset>

          {topic === "Investment enquiry" && (
            <div className="field">
              <label htmlFor="sector">Sector</label>
              <select id="sector" name="sector" value={sector} onChange={(e) => setSector(e.target.value)}>
                <option value="">Not sure yet</option>
                {sectors.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
              {err("name")}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" inputMode="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
              {err("email")}
            </div>
          </div>

          <div className="field">
            <label htmlFor="phone">
              Phone <span className="optional">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
            {err("phone")}
          </div>

          <div className="field">
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
            {err("message")}
          </div>

          <button type="submit" className="btn btn-primary">
            Send enquiry
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
