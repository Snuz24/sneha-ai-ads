"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CreatorImage from "./CreatorImage";
import { FOUNDER_NAME, FOUNDER_ROLE } from "@/lib/brand";

const credentials = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "6 years editing video & content",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
        <path d="M8 1.5L2 5v6l6 3.5L14 11V5L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M8 1.5v13M2 5l6 3.5L14 5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
    label: "Computer Science & Business Systems, B.Tech",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
        <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 7h6M5 9.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: "Business development · digital advertising",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 px-6 bg-surface overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[550px] h-[550px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: Photo + credentials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Portrait */}
            <div
              className="relative w-full max-w-[420px] mx-auto lg:mx-0 rounded-3xl overflow-hidden aspect-[4/5]"
              style={{ boxShadow: "0 2px 8px rgba(28,28,46,0.06), 0 20px 60px rgba(124,111,224,0.12), 0 0 0 1px rgba(28,28,46,0.07)" }}
            >
              <CreatorImage className="rounded-3xl" sizes="(max-width: 1024px) 90vw, 420px" />

              {/* Name plate */}
              <div
                className="absolute bottom-5 left-5 right-5 glass-warm rounded-xl px-5 py-4"
                style={{ boxShadow: "0 2px 12px rgba(28,28,46,0.10)" }}
              >
                <p className="text-[16px] font-bold text-text-primary tracking-tight">{FOUNDER_NAME}</p>
                <p className="text-[13px] text-text-secondary mt-0.5">{FOUNDER_ROLE}</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[11.5px] font-medium text-text-secondary">Available for projects</span>
                </div>
              </div>
            </div>

            {/* Credential pills */}
            <div className="flex flex-col gap-2.5 max-w-[420px] mx-auto lg:mx-0 w-full">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card card-border"
                  style={{ boxShadow: "0 1px 3px rgba(28,28,46,0.04)" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center flex-shrink-0">
                    {c.icon}
                  </div>
                  <span className="text-[13.5px] font-medium text-text-primary">{c.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2"
          >
            <p className="section-label mb-5">About the Studio</p>

            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-bold tracking-tightest text-gradient-warm leading-[1.15] mb-8">
              &ldquo;AI is my camera. The story is still mine.&rdquo;
            </h2>

            <div className="space-y-5 text-[15.5px] leading-[1.8] text-text-secondary">
              <p>
                Hi, I'm Sneha — I lead a small, studio-led team that makes AI-powered ads for brands. I've been editing videos and making content for <strong className="text-text-primary font-semibold">six years</strong>, and these days we use AI to make the kind of ads that used to need a full shoot — models, sets, festive lighting and all — and bring them within reach of brands that could never book that kind of production.
              </p>
              <p>
                But the tools are just the camera. The part that actually matters — the hook, the emotion, the little human moment that makes someone stop scrolling — that's still the craft I've spent years on. AI lets me move faster and go bigger; it doesn't write the story for me.
              </p>
              <p>
                I studied <strong className="text-text-primary font-semibold">Computer Science &amp; Business Systems</strong> and worked in <strong className="text-text-primary font-semibold">business development at a digital advertising company</strong>, so I think about what actually sells, not only what looks beautiful. Every ad I make has to do both: look like a high-end campaign, and move the people watching it toward buying.
              </p>
              <p>
                That mix — real editing craft, an understanding of AI, and a commercial instinct for what converts — is what I bring to every brand I work with, whatever the industry.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold bg-accent-gradient rounded-xl text-white shadow-button hover:shadow-accent transition-shadow"
              >
                Let's Work Together
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold rounded-xl border border-border-md text-text-primary hover:bg-text-primary/[0.03] transition-colors"
              >
                View the Work First
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
