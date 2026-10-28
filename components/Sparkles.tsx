"use client";

// Decorative twinkling gold sparkles — pure CSS motion, no deps.
const sparkles = [
  { top: "12%", left: "8%",  size: 3,   delay: "0s",   dur: "3.2s" },
  { top: "22%", left: "88%", size: 2,   delay: "0.6s", dur: "2.8s" },
  { top: "34%", left: "18%", size: 2.5, delay: "1.2s", dur: "3.6s" },
  { top: "48%", left: "72%", size: 3.5, delay: "0.3s", dur: "4s"   },
  { top: "62%", left: "12%", size: 2,   delay: "1.8s", dur: "3s"   },
  { top: "70%", left: "90%", size: 3,   delay: "0.9s", dur: "3.4s" },
  { top: "18%", left: "52%", size: 2,   delay: "2.1s", dur: "2.6s" },
  { top: "82%", left: "40%", size: 2.5, delay: "1.5s", dur: "3.8s" },
  { top: "40%", left: "44%", size: 2,   delay: "2.6s", dur: "3.1s" },
  { top: "56%", left: "30%", size: 3,   delay: "0.2s", dur: "4.2s" },
];

export default function Sparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: "radial-gradient(circle, #fff3cf 0%, #e3c16a 55%, transparent 75%)",
            boxShadow: "0 0 6px 1px rgba(227,193,106,0.6)",
            animationDelay: s.delay,
            animationDuration: s.dur,
          }}
        />
      ))}
    </div>
  );
}
