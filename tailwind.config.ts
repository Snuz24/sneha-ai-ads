import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Deep ocean sapphire base
        canvas:      "#060d20",
        surface:     "#0a1630",
        card:        "#0e1c3c",
        "card-warm": "#122247",
        // Gold hairlines
        border:      "rgba(227,193,106,0.16)",
        "border-md": "rgba(227,193,106,0.32)",
        // Champagne gold = primary accent
        accent:      "#e3c16a",
        "accent-2":  "#5a9bed",  // ocean blue
        "accent-light": "#14264b", // deep blue tint (icon/chip bg on dark)
        "accent-mid":   "#2c4a86",
        // Text
        "text-primary":   "#f4efdf",
        "text-secondary": "#a9b7d6",
        "text-muted":     "#64769e",
      },
      backgroundImage: {
        // Ocean-blue button gradient (white text stays readable)
        "accent-gradient":  "linear-gradient(135deg, #2f7de0 0%, #1e5bb8 100%)",
        // Champagne gold gradient for headings/highlights
        "gold-gradient":    "linear-gradient(135deg, #f7e6ac 0%, #e3c16a 45%, #c79a3c 100%)",
        "accent-gradient-soft": "linear-gradient(135deg, rgba(227,193,106,0.14) 0%, rgba(90,155,237,0.06) 100%)",
        "hero-glow":        "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(90,155,237,0.18) 0%, transparent 65%)",
      },
      animation: {
        "float-a":   "floatA 16s ease-in-out infinite",
        "float-b":   "floatB 13s ease-in-out infinite",
        "float-c":   "floatC 10s ease-in-out infinite",
        "shimmer":   "shimmer 4.5s linear infinite",
        "twinkle":   "twinkle 3.2s ease-in-out infinite",
        "sheen":     "sheen 6s ease-in-out infinite",
      },
      keyframes: {
        floatA: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "40%":     { transform: "translate(34px,-24px) scale(1.06)" },
          "70%":     { transform: "translate(-20px,18px) scale(0.96)" },
        },
        floatB: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%":     { transform: "translate(-30px,-16px) scale(1.04)" },
          "66%":     { transform: "translate(18px,26px) scale(0.97)" },
        },
        floatC: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%":     { transform: "translate(16px,-20px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.15", transform: "scale(0.7)" },
          "50%":     { opacity: "1", transform: "scale(1)" },
        },
        sheen: {
          "0%":       { transform: "translateX(-120%) skewX(-18deg)" },
          "18%,100%": { transform: "translateX(320%) skewX(-18deg)" },
        },
      },
      boxShadow: {
        card:       "0 1px 3px rgba(0,0,0,0.5), 0 10px 34px rgba(0,0,0,0.42)",
        "card-lg":  "0 2px 10px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.55)",
        "card-hover": "0 0 0 1px rgba(227,193,106,0.3), 0 16px 48px rgba(0,0,0,0.55), 0 0 60px rgba(90,155,237,0.14)",
        accent:     "0 6px 28px rgba(47,125,224,0.45), 0 0 0 1px rgba(227,193,106,0.18)",
        "accent-sm":"0 3px 16px rgba(47,125,224,0.4)",
        gold:       "0 4px 24px rgba(227,193,106,0.35)",
        soft:       "0 1px 2px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.35)",
        button:     "0 4px 18px rgba(31,91,184,0.45), inset 0 1px 0 rgba(255,255,255,0.18)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.03em",
        tight:    "-0.02em",
        snug:     "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
