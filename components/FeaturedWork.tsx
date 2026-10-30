"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";
import TiltCard from "./TiltCard";

const filters = ["All", "Jewellery", "Fashion", "Food", "Beauty"];

type Ad = {
  id: number;
  title: string;
  niche: string;        // badge shown on card
  filter: string;       // which filter group it belongs to
  kind: string;         // "Concept ad" / "Product film"
  brandLine: string;    // e.g. "Gold jewellery brand · Diwali"
  duration: string;
  description: string;
  video: string;
};

const ads: Ad[] = [
  {
    id: 1,
    title: "Wait. I forgot.",
    niche: "Jewellery",
    filter: "Jewellery",
    kind: "Concept ad",
    brandLine: "Gold jewellery brand · Diwali",
    duration: "0:20",
    description: "A POV story ad: the husband forgets the Diwali gift and races to the store. Built around a hook, UGC-style acting, and a satisfying product reveal.",
    video: "/media/jewellery.mp4",
  },
  {
    id: 2,
    title: "Nothing to wear",
    niche: "Fashion",
    filter: "Fashion",
    kind: "Concept ad",
    brandLine: "Ethnic wear brand · Diwali",
    duration: "0:21",
    description: "A relatable closet problem solved through a sister's phone, then a twirl transition that reveals the festive look.",
    video: "/media/fashion.mp4",
  },
  {
    id: 3,
    title: "Kuch meetha ho jaaye",
    niche: "Sweets",
    filter: "Food",
    kind: "Concept ad",
    brandLine: "Mithai brand · Diwali gifting",
    duration: "0:30",
    description: "A warm family Diwali scene with gift-box close-ups and real-feeling reactions, made for festive gifting.",
    video: "/media/sweets.mp4",
  },
  {
    id: 4,
    title: "Strawberry shine",
    niche: "Beauty",
    filter: "Beauty",
    kind: "Product ad",
    brandLine: "Lip gloss brand · Product ad",
    duration: "0:20",
    description: "A strawberry-milk splash, glossy bubble close-ups, and a beach-side model moment with the product front and center.",
    video: "/media/lipgloss-new.mp4",
  },
  {
    id: 5,
    title: "Liquid gold",
    niche: "Beauty",
    filter: "Beauty",
    kind: "Product film",
    brandLine: "Skincare serum brand · Product film",
    duration: "0:10",
    description: "A luxury product film: macro serum drops, glowing skin texture, and a rich hero shot — built for YouTube, banners, and 16:9 ads.",
    video: "/media/skincare.mp4",
  },
  {
    id: 6,
    title: "Melt into winter",
    niche: "Chocolate",
    filter: "Food",
    kind: "Product ad",
    brandLine: "Chocolate brand · Product ad",
    duration: "0:13",
    description: "Hot cocoa and marshmallow splash, chocolate ribbons wrapping the bar, a cosy fireplace mood, and an Order Now end card.",
    video: "/media/chocolate-new.mp4",
  },
];

function AdCard({ ad, index }: { ad: Ad; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1100 }}
    >
    <TiltCard
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-card card-border shadow-card hover:shadow-card-hover transition-shadow duration-300 will-change-transform"
    >
      {/* Video */}
      <div className="relative aspect-[9/16] overflow-hidden bg-surface" style={{ transform: "translateZ(30px)" }}>
        <video
          src={ad.video}
          controls
          preload="metadata"
          playsInline
          controlsList="nodownload"
          className="w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-[#060d20]/70 backdrop-blur-sm text-[10.5px] font-semibold text-accent border border-accent/30 uppercase tracking-wide shadow-soft">
          {ad.niche}
        </div>
        <div className="pointer-events-none absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md bg-[#060d20]/70 backdrop-blur-sm text-[11px] font-semibold text-text-primary">
          {ad.duration}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5" style={{ transform: "translateZ(18px)" }}>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[11.5px] font-semibold text-accent uppercase tracking-wide">{ad.kind}</span>
        </div>
        <h3 className="text-[16px] font-semibold leading-snug tracking-tight text-text-primary mb-1.5">{ad.title}</h3>
        <p className="text-[12px] font-medium text-text-muted mb-2.5">{ad.brandLine}</p>
        <p className="text-[13px] text-text-secondary leading-relaxed">{ad.description}</p>
      </div>
    </TiltCard>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [active, setActive] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const filtered = active === "All" ? ads : ads.filter((a) => a.filter === active);

  return (
    <section id="work" className="relative py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label mb-4">Work</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[2rem] sm:text-[2.6rem] font-bold tracking-tightest text-gradient-warm leading-tight max-w-xl">
              Recent ads.
            </h2>
            <p className="max-w-sm text-[14.5px] text-text-secondary leading-relaxed">
              A selection of concept ads and product films across different niches. Tap any video to play with sound.
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={clsx(
                "px-4 py-1.5 rounded-full text-[12.5px] font-semibold transition-all duration-200",
                active === f
                  ? "bg-accent text-canvas shadow-gold"
                  : "bg-card text-text-secondary hover:bg-accent-light hover:text-accent border border-border hover:border-accent-mid/40"
              )}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {filtered.map((ad, i) => (
            <AdCard key={ad.id} ad={ad} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
