"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EMAIL = "sneha.jay@sunentrix.cfd";
const LINKEDIN = "https://www.linkedin.com/in/sneha-jayabhaye-253b27280/";

const steps = [
  {
    number: "01",
    title: "Tell me about your product",
    description: "Email me or connect on LinkedIn with your product, your audience, and your next launch or sale. You don't need a polished brief — a link and a few honest lines about what you're trying to achieve is the perfect place to start.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 6l6.5 4.5L16.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "I suggest the right film",
    description: "I'll come back with the kind of film that will work best for you — whether that's a story-led brand ad, a polished product film, UGC, or a full festive campaign — along with the concept, format, and where it should run.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M10 2.5l1.8 4 4.2.5-3.1 2.9.8 4.1L10 12l-3.7 2L7.1 9.9 4 7l4.2-.5L10 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "I script, direct & edit it",
    description: "Once we're aligned on the concept, timeline, and pricing, I write, direct, and hand-edit the ad myself — delivered polished and ready for Instagram, Meta ads, YouTube, and your website, in the sizes you need.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M3 10.5l3.5 3.5L17 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-canvas overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(124,111,224,0.05)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">Contact</p>
          <h2 className="text-[2rem] sm:text-[2.8rem] font-bold tracking-tightest text-gradient-warm leading-tight mb-5">
            Let's make your brand<br />unforgettable.
          </h2>
          <p className="text-[15.5px] text-text-secondary max-w-lg mx-auto leading-relaxed">
            Tell me about your product, your audience, and your next launch or sale. I'll suggest the kind of film that will work best — whether it's a story ad, a product film, or a full festive campaign.
          </p>
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card rounded-3xl p-8 sm:p-10 card-border mb-8"
          style={{ boxShadow: "0 2px 8px rgba(28,28,46,0.06), 0 16px 48px rgba(28,28,46,0.08)" }}
        >
          {/* Primary + secondary */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href={`mailto:${EMAIL}?subject=AI%20ad%20enquiry`}
              className="btn-sheen group flex-1 flex items-center justify-center gap-2.5 px-6 py-4 text-[15px] font-semibold bg-accent-gradient rounded-xl text-white shadow-button hover:shadow-accent transition-shadow"
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 20 20">
                <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3.5 6l6.5 4.5L16.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email Me
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 text-[15px] font-semibold rounded-xl border border-border-md text-text-primary hover:bg-accent-light hover:border-accent-mid/50 hover:text-accent transition-all"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.98 3.5a1.75 1.75 0 11-.02 3.5 1.75 1.75 0 01.02-3.5zM3.5 8.25h3v8.25h-3V8.25zM9 8.25h2.86v1.13h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.57v4.34h-3v-3.85c0-.92-.02-2.1-1.28-2.1-1.28 0-1.48 1-1.48 2.03v3.92H9V8.25z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Email shown with copy button */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            <span className="text-[12.5px] text-text-muted">or reach me directly at</span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface pl-3 pr-1 py-1">
              <a href={`mailto:${EMAIL}`} className="text-[12.5px] font-medium text-accent hover:underline">{EMAIL}</a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] font-semibold text-text-secondary hover:text-accent hover:bg-accent-light transition-colors"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 14 14">
                      <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                      <rect x="4.5" y="4.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M9.5 4.5V3a1.5 1.5 0 00-1.5-1.5H3A1.5 1.5 0 001.5 3v5A1.5 1.5 0 003 9.5h1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </span>
          </div>

          {/* Tertiary */}
          <div className="pt-5 border-t border-border text-center">
            <p className="text-[12.5px] text-text-muted">
              Working with brands across every industry
            </p>
          </div>
        </motion.div>

        {/* How We'll Work Together */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-8">
            <h3 className="text-[1.4rem] sm:text-[1.7rem] font-bold tracking-tighter text-gradient-warm">How We'll Work Together</h3>
            <p className="mt-2 text-[14px] text-text-secondary max-w-md mx-auto leading-relaxed">
              No lengthy onboarding, no friction. Three simple steps from first message to finished content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.36 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-6 rounded-2xl bg-card card-border"
                style={{ boxShadow: "0 1px 3px rgba(28,28,46,0.05), 0 4px 18px rgba(28,28,46,0.05)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-bold text-text-muted/60 tracking-widest">{step.number}</span>
                </div>
                <h4 className="text-[15px] font-semibold text-text-primary tracking-snug mb-2">{step.title}</h4>
                <p className="text-[13px] text-text-secondary leading-relaxed">{step.description}</p>

                {/* Connector arrow (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-canvas border border-border items-center justify-center">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-[12.5px] text-text-muted">
            I typically respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
