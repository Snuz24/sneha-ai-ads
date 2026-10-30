"use client";

import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      className="btn-sheen group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-5 pr-5 py-3.5 rounded-full bg-accent-gradient text-white text-[14px] font-semibold shadow-accent"
      aria-label="Contact us"
    >
      <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 20 20">
        <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 6l6.5 4.5L16.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Contact Us
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full ring-2 ring-accent/40 animate-ping opacity-0 group-hover:opacity-60 pointer-events-none" />
    </motion.a>
  );
}
