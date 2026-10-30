"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Sparkles from "./Sparkles";
import { STUDIO_NAME, FOUNDER_NAME, FOUNDER_ROLE } from "@/lib/brand";

const serviceChips = [
  "Brand films",
  "Product ads",
  "UGC videos",
  "VFX & splash films",
  "Any industry",
];

const industries = ["Beauty", "Fashion", "Food", "Jewellery", "Tech", "Lifestyle", "Services"];

// Masked word-by-word reveal
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.18 } },
};
const word = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const line1 = ["AI", "ads", "that", "make"];
const line2 = ["people", "stop", "scrolling", "and"];
const line3 = ["start", "buying."];

function MaskWord({ children, gold = false }: { children: string; gold?: boolean }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
      <motion.span variants={word} className={`inline-block ${gold ? "text-gradient-accent" : "text-gradient-warm"}`}>
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  // Cursor-tracking spotlight
  const mx = useMotionValue(50);
  const my = useMotionValue(28);
  const spotlight = useMotionTemplate`radial-gradient(540px circle at ${mx}% ${my}%, rgba(227,193,106,0.12), rgba(90,155,237,0.06) 35%, transparent 62%)`;

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <section
      onMouseMove={handleMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Animated aurora mesh */}
        <div
          className="absolute left-1/2 top-[-30%] -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-[120px] opacity-60 animate-aurora"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(90,155,237,0.22), rgba(227,193,106,0.14), rgba(44,74,134,0.26), rgba(90,155,237,0.22))",
          }}
        />
        {/* Ocean-blue depth glow */}
        <div className="absolute -top-[20%] left-[0%] w-[720px] h-[720px] rounded-full bg-accent-2/[0.14] blur-[140px] animate-float-a" />
        {/* Champagne-gold glow */}
        <div className="absolute top-[18%] right-[-5%] w-[520px] h-[520px] rounded-full bg-accent/[0.10] blur-[120px] animate-float-b" />
        {/* Deep blue accent */}
        <div className="absolute bottom-[2%] left-[32%] w-[420px] h-[420px] rounded-full bg-accent-mid/[0.22] blur-[100px] animate-float-c" />
        {/* Top sheen like sunlit horizon */}
        <div className="absolute inset-x-0 top-0 h-[40%] bg-[linear-gradient(180deg,rgba(90,155,237,0.10)_0%,transparent_100%)]" />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(227,193,106,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Cursor-tracking spotlight */}
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        <Sparkles />
      </div>

      <div className="relative max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-light border border-accent-mid/50 text-[12px] font-semibold text-accent mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
AI Ad Studio · Available for Projects
          </motion.div>

          {/* Headline — masked word-by-word reveal */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-bold tracking-tightest leading-[1.1] text-text-primary mb-5"
          >
            <span className="block">
              {line1.map((w) => (
                <span key={w} className="inline-block mr-[0.26em]"><MaskWord>{w}</MaskWord></span>
              ))}
            </span>
            <span className="block">
              {line2.map((w) => (
                <span key={w} className="inline-block mr-[0.26em]"><MaskWord>{w}</MaskWord></span>
              ))}
            </span>
            <span className="block">
              {line3.map((w) => (
                <span key={w} className="inline-block mr-[0.26em]"><MaskWord gold>{w}</MaskWord></span>
              ))}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] sm:text-[17.5px] leading-relaxed text-text-secondary mb-7 max-w-xl"
          >
We're a studio-led team making AI ads for brands of every kind — from beauty, fashion and food to tech, lifestyle and services. Story-led brand films, product ads, creator-style UGC and VFX videos, each one scripted, directed, and crafted end to end.
          </motion.p>

          {/* Service chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-2 mb-9"
          >
            {serviceChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-[12.5px] font-medium text-text-secondary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {chip}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <a
              href="#work"
              className="btn-sheen group inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold bg-accent-gradient rounded-xl text-white shadow-button hover:shadow-accent transition-shadow"
            >
              See My Work
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold rounded-xl border border-border-md text-accent hover:bg-accent-light hover:border-accent/50 transition-all"
            >
              Email Us
            </a>
          </motion.div>

          {/* Industries strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-14 pt-8 border-t border-border"
          >
            <p className="text-[11.5px] font-medium text-text-muted uppercase tracking-widest mb-4">
              Ads for brands across
            </p>
            {/* Infinite marquee */}
            <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
              <div className="flex w-max items-center gap-x-8 animate-marquee">
                {[...industries, ...industries].map((item, i) => (
                  <span key={i} className="flex items-center gap-x-8 text-[13.5px] font-semibold text-text-secondary/80 whitespace-nowrap">
                    {item}
                    <span className="w-1 h-1 rounded-full bg-accent/60" />
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Showreel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-col items-center gap-5"
        >
          <div
            className="relative w-[300px] aspect-[9/16] rounded-3xl overflow-hidden bg-surface"
            style={{ boxShadow: "0 0 0 1px rgba(227,193,106,0.3), 0 24px 70px rgba(0,0,0,0.6), 0 0 70px rgba(47,125,224,0.22)" }}
          >
            <video
              src="/media/reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            {/* Gold frame ring */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-accent/25 pointer-events-none" />
            {/* Reel label */}
            <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full glass-warm text-[10.5px] font-semibold text-accent uppercase tracking-wide">
              Showreel
            </div>
            {/* Nameplate */}
            <div className="absolute bottom-5 left-5 right-5 glass-warm rounded-xl px-4 py-3" style={{ boxShadow: "0 2px 12px rgba(28,28,46,0.10)" }}>
              <p className="text-[13px] font-semibold text-text-primary">{STUDIO_NAME}</p>
              <p className="text-[11.5px] text-text-secondary mt-0.5">Led by {FOUNDER_NAME} · {FOUNDER_ROLE}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-accent/30 to-transparent" />
        <span className="text-[10.5px] font-medium text-text-muted tracking-[0.15em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
