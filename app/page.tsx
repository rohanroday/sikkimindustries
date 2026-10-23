import SiteHeader from "@/components/SiteHeader";
import SectorLoom from "@/components/SectorLoom";
import Notices from "@/components/Notices";
import EnquiryForm from "@/components/EnquiryForm";
import MotionLayer from "@/components/MotionLayer";
import { ArrowRight, ArrowUpRight, Mail, Phone, Pin } from "@/components/Icons";
import {
  LIVE,
  advantages,
  connectivity,
  contact,
  dics,
  doors,
  glance,
  incentives,
  leaders,
  milestones,
  partnerLogos,
  psus,
  schemes,
  steps,
} from "./content";

const Band = ({ tone = "" }: { tone?: string }) => <div className={`band ${tone}`} aria-hidden="true" />;
const LepchaBand = () => <div className="lozenge-band" aria-hidden="true" />;

export default function Home() {
  const [lead, ...moreMilestones] = milestones;

  return (
    <>
      <SiteHeader />
      <MotionLayer />

      <main id="main" tabIndex={-1}>
        {/* First viewport: the madder cloth */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                <span className="hero-figure">₹30,000&nbsp;Cr</span>
                <span className="hero-line">of investment invited into India&rsquo;s first organic state.</span>
              </h1>
              <p className="hero-lede">
                Sikkim&rsquo;s Industrial &amp; Investment Policy 2024 aims for 20,000 jobs and a ₹1.5 lakh Cr economy by
                2047, across 16 green and future-ready sectors. The Commerce &amp; Industries Department works with you
                from the first enquiry to aftercare.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#invest">
                  Invest in Sikkim <ArrowRight />
                </a>
                <a className="btn btn-on-red" href="#schemes">
                  Find a scheme
                </a>
              </div>
            </div>

            <figure className="hero-figure-frame">
              <div className="frame-weave">
                <img
                  src="/img/hero-emporium-1000.webp"
                  srcSet="/img/hero-emporium-640.webp 640w, /img/hero-emporium-1000.webp 1000w"
                  sizes="(max-width: 900px) 92vw, 460px"
                  width={1000}
                  height={668}
                  alt="Handwoven carpets, cushions and crafts on display at the Directorate of Handloom & Handicrafts emporium"
                  fetchPriority="high"
                />
              </div>
              <figcaption>Handloom and handicrafts, Directorate of Handloom &amp; Handicrafts, Gangtok</figcaption>
            </figure>
          </div>

          <div className="weft">
            <dl className="wrap weft-row">
              {glance.map((g) => (
                <div key={g.label} className="weft-item">
                  <dt>{g.label}</dt>
                  <dd>{g.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Doors for each visitor */}
        <section className="section doors" aria-labelledby="doors-title">
          <div className="wrap">
            <h2 id="doors-title" className="h2">Start where you are</h2>
            <ul className="door-list">
              {doors.map((d) => (
                <li key={d.href}>
                  <a className="door" href={d.href}>
                    <span className="door-title">{d.title}</span>
                    <span className="door-text">{d.text}</span>
                    <ArrowRight className="door-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <LepchaBand />

        {/* Why Sikkim */}
        <section className="section why" id="invest" aria-labelledby="why-title">
          <div className="wrap why-grid">
            <div className="why-copy">
              <h2 id="why-title" className="h2">Why build in Sikkim</h2>
              <p className="lead">
                India&rsquo;s first 100% organic state is also one of its most peaceful. Sikkim leads in organic large
                cardamom and turmeric, draws green-energy investors with hydro and solar, and is home to the UNESCO-listed
                Khangchendzonga National Park.
              </p>
              <p>
                The State&rsquo;s vision is a sustainable industrial hub that uses its natural resources and location
                while protecting its ecology and culture. Single-window clearance, a dedicated facilitation team,
                tailored incentive packages and aftercare for existing investors back that up.
              </p>
              <ul className="ticks">
                {advantages.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="routes" aria-labelledby="routes-title">
              <h3 id="routes-title" className="h3">Getting here</h3>
              <dl className="route-list">
                {connectivity.map((c) => (
                  <div key={c.mode} className="route">
                    <dt>{c.mode}</dt>
                    <dd>{c.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="section sectors" aria-labelledby="sectors-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="sectors-title" className="h2">16 thrust sectors</h2>
              <p>
                The sectors the 2024 policy prioritises. Choose one and it is added to your enquiry, so our team knows
                where to start.
              </p>
            </div>
            <SectorLoom />
          </div>
        </section>

        <Band tone="band-forest" />

        {/* Incentives ledger */}
        <section className="section incentives" id="incentives" aria-labelledby="inc-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="inc-title" className="h2">What the State offers</h2>
              <p>
                Headline terms from the Sikkim Industrial &amp; Investment Policy 2024 and the UNNATI scheme. The policy
                document sets the full conditions.
              </p>
            </div>

            <div className="ledger">
              {incentives.map((inc) => (
                <article key={inc.name} className="ledger-row">
                  <h3 className="ledger-head">
                    <span className="ledger-name">{inc.name}</span>
                    <span className="ledger-figure">{inc.headline}</span>
                  </h3>
                  <dl className="ledger-terms">
                    {inc.rows.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="ledger-note">{inc.note}</p>
                </article>
              ))}
            </div>

            <p className="source">
              Source: <a href={`${LIVE}/visitors/investsikkim`}>Invest in Sikkim</a>, Commerce &amp; Industries
              Department. Read the policy before you apply; this summary is not a legal document.
            </p>
          </div>
        </section>

        {/* Four steps */}
        <section className="section steps-section" aria-labelledby="steps-title">
          <div className="wrap">
            <h2 id="steps-title" className="h2">Setting up, in four steps</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title} className="step">
                  <h3 className="step-title">{s.title}</h3>
                  <p>{s.text}</p>
                  {s.link && (
                    <a className="inline-link" href={s.link.href}>
                      {s.link.label} <ArrowUpRight className="icon-inline" />
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Band tone="band-marigold" />

        {/* Notices */}
        <section className="section notices-section" id="notices" aria-labelledby="notices-title">
          <div className="wrap notices-grid">
            <div className="section-head">
              <h2 id="notices-title" className="h2">Notices</h2>
              <p>The latest tenders, reports and circulars. Each one opens the official PDF.</p>
            </div>
            <Notices />
          </div>
        </section>

        {/* Schemes */}
        <section className="section schemes" id="schemes" aria-labelledby="schemes-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="schemes-title" className="h2">Schemes and guidelines</h2>
              <p>
                For new founders, artisans, food processors and growing MSMEs. Your District Industries Centre can help
                you choose and apply.
              </p>
            </div>
            <ul className="scheme-list">
              {schemes.map((s) => (
                <li key={s.name}>
                  <a className="scheme" href={`${LIVE}/visitors/schemes`}>
                    <span className="scheme-name">{s.name}</span>
                    <span className="scheme-for">{s.for}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Band />

        {/* Milestones */}
        <section className="section milestones" aria-labelledby="ms-title">
          <div className="wrap">
            <h2 id="ms-title" className="h2">Recent milestones</h2>
            <div className="ms-grid">
              <figure className="ms-lead">
                <img src={lead.img} width={lead.w} height={lead.h} alt={lead.alt} loading="lazy" decoding="async" />
                <figcaption>
                  <h3 className="ms-title">{lead.title}</h3>
                  <p>{lead.text}</p>
                </figcaption>
              </figure>
              <ul className="ms-list">
                {moreMilestones.map((m) => (
                  <li key={m.title} className="ms-item">
                    <img src={m.img} width={m.w} height={m.h} alt={m.alt} loading="lazy" decoding="async" />
                    <div>
                      <h3 className="ms-title">{m.title}</h3>
                      <p>{m.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a className="inline-link" href={`${LIVE}/visitors/gallery`}>
              Full photo gallery <ArrowUpRight className="icon-inline" />
            </a>
          </div>
        </section>

        {/* Districts and institutions */}
        <section className="section network" id="districts" aria-labelledby="net-title">
          <div className="wrap network-grid">
            <div>
              <h2 id="net-title" className="h2">In all six districts</h2>
              <p className="lead">
                Each District Industries Centre is a single roof for small, village and cottage industries: PMEGP,
                entrepreneurship development programmes, and help to set up.
              </p>
              <ul className="dic-list">
                {dics.map((d) => (
                  <li key={d}>
                    <a href={`${LIVE}/visitors/dics`}>
                      <span className="dic-name">{d}</span>
                      <span className="dic-label">District Industries Centre</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="psu-block">
              <h3 className="h3">Public sector undertakings</h3>
              <ul className="psu-list">
                {psus.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a className="inline-link" href={`${LIVE}/visitors/officerdirectories`}>
                Officer directory <ArrowUpRight className="icon-inline" />
              </a>
            </div>
          </div>
        </section>

        <Band tone="band-forest" />

        {/* Leadership */}
        <section className="section leaders" aria-labelledby="lead-title">
          <div className="wrap">
            <h2 id="lead-title" className="h2">Leadership</h2>
            <ul className="leader-list">
              {leaders.map((l) => (
                <li key={l.name} className="leader">
                  <img src={l.img} width={96} height={104} alt={`Portrait of ${l.name}`} loading="lazy" decoding="async" />
                  <div>
                    <p className="leader-name">{l.name}</p>
                    <p className="leader-role">{l.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <div className="contact-info">
              <h2 id="contact-title" className="h2">Talk to the department</h2>
              <p className="lead">
                Investment enquiries, scheme questions, tender clarifications and grievances all start here.
              </p>
              <ul className="contact-list">
                <li>
                  <Pin />
                  <span>
                    {contact.address}
                    <br />
                    <a className="inline-link" href={contact.maps}>
                      Open in Maps <ArrowUpRight className="icon-inline" />
                    </a>
                  </span>
                </li>
                <li>
                  <Phone />
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </li>
                <li>
                  <Mail />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              </ul>
              <p className="rti">
                Right to Information: <a href={`${LIVE}/visitors/rtis`}>RTI officers and forms</a>
              </p>
            </div>
            <EnquiryForm />
          </div>
        </section>

        <LepchaBand />
      </main>

      <footer className="footer">
        <div className="wrap">
          <ul className="partner-logos" aria-label="Schemes and partners">
            {partnerLogos.map((p) => (
              <li key={p.src}>
                <img src={p.src} alt={p.alt} width={p.w / 2} height={60} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
          <div className="footer-grid">
            <div>
              <div className="footer-logos">
                <img src="/img/emblem-cotton.webp" width={192} height={180} alt="Emblem of the Government of Sikkim" loading="lazy" decoding="async" />
                <img src="/img/dept-seal.webp" width={200} height={160} alt="Seal of the Commerce & Industries Department" loading="lazy" decoding="async" />
              </div>
              <p className="footer-dept">Commerce &amp; Industries Department</p>
              <p>Government of Sikkim</p>
              <p>{contact.address}</p>
            </div>
            <div>
              <p className="footer-dept">Policy pages</p>
              <ul className="footer-links">
                {["Website policy", "Privacy", "Copyright", "Hyperlinking", "Accessibility statement", "Sitemap", "Help"].map(
                  (l) => (
                    <li key={l}>{l}</li>
                  ),
                )}
              </ul>
              <p className="footer-hint">Placeholders. GIGW 3.0 requires these pages; they would be written with the department if the redesign goes ahead.</p>
            </div>
          </div>
          <p className="footer-legal">
            Content owned by the Commerce &amp; Industries Department, Government of Sikkim. Concept redesign, built
            October 2026; not the official website.
          </p>
        </div>
      </footer>
    </>
  );
}
