"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-[linear-gradient(90deg,#5a9bed,#e3c16a,#fff3cf,#e3c16a,#5a9bed)]"
    >
      <div className="absolute right-0 top-0 h-full w-16 bg-[#fff3cf] blur-[6px] opacity-70" />
    </motion.div>
  );
}
