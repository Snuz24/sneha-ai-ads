"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    title: "Story-led brand films",
    description: "Short films with a real story: a hook, an emotion, and your product as the hero. Like the husband who forgets the Diwali gift, or a family sharing mithai.",
    bestFor: "Launches, festive campaigns, brand awareness",
    worksOn: "Reels, YouTube, Meta ads",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 8l4 2-4 2V8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "AI product ads",
    description: "Your product placed in a luxury, festive, or lifestyle world — lit and styled like a high-end campaign shoot, without the studio.",
    bestFor: "New products, catalogue refresh, sale campaigns",
    worksOn: "Reels, Meta ads, website banners",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M4 7l6-3 6 3-6 3-6-3zM4 7v6l6 3 6-3V7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI UGC videos",
    description: "Creator-style videos with AI people: reviews, reactions, unboxings, and POV stories that feel like they were filmed on a phone.",
    bestFor: "Building trust, performance ads, testing hooks",
    worksOn: "Reels, Stories, Meta ads",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <rect x="5" y="2.5" width="10" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 14.5h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "VFX & splash films",
    description: "Slow-motion splashes, swirls, melts, and transformations. Strawberry milk, molten chocolate, serum drops — all made to make people watch twice.",
    bestFor: "Food, drinks, beauty, and anything that pours, melts or sparkles",
    worksOn: "Reels, Shorts, YouTube pre-roll",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M10 3c2.5 3 4 5 4 7a4 4 0 11-8 0c0-2 1.5-4 4-7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Model & lifestyle showcase",
    description: "AI models using, wearing, or presenting your product in real-life moments: outfits, jewellery, gadgets, home and personal care.",
    bestFor: "Fashion, accessories, lifestyle and consumer brands",
    worksOn: "Reels, lookbooks, Meta ads",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4.5 17a5.5 5.5 0 0111 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Festive & seasonal campaigns",
    description: "A set of matching ads planned around a season: Diwali, wedding season, Valentine's, New Year, or your own sale.",
    bestFor: "Brands that want a full campaign, not a single ad",
    worksOn: "Every platform, in every size",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M10 2.5l1.9 3.9 4.3.6-3.1 3 .7 4.2L10 16.2l-3.8 2 .7-4.2-3.1-3 4.3-.6L10 2.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhatWeCreate() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-4">What I Make</p>
          <h2 className="text-[2rem] sm:text-[2.6rem] font-bold tracking-tightest text-gradient-warm leading-tight mb-5">
            Six kinds of films for any brand, in any industry.
          </h2>
          <p className="text-[15.5px] text-text-secondary leading-relaxed">
            One approach behind all of them: find the feeling first, then build the world around your product.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col p-7 rounded-2xl bg-card card-border hover:shadow-card-hover transition-shadow duration-300"
              style={{ boxShadow: "0 1px 3px rgba(28,28,46,0.05), 0 4px 20px rgba(28,28,46,0.06)" }}
              whileHover={{ y: -3 }}
            >
              <div className="w-11 h-11 rounded-xl bg-accent-light text-accent flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-text-primary tracking-snug mb-2">{item.title}</h3>
              <p className="text-[13.5px] text-text-secondary leading-relaxed mb-5 flex-1">{item.description}</p>

              <div className="space-y-2.5 pt-4 border-t border-border">
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-widest text-accent mb-0.5">Best for</p>
                  <p className="text-[12.5px] text-text-secondary leading-snug">{item.bestFor}</p>
                </div>
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-widest text-accent mb-0.5">Works on</p>
                  <p className="text-[12.5px] text-text-secondary leading-snug">{item.worksOn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold bg-accent-gradient rounded-xl text-white shadow-button hover:shadow-accent transition-shadow"
          >
            See the Work
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold rounded-xl border border-border-md text-text-primary hover:bg-text-primary/[0.03] transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
