export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-canvas border-t border-border px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Wordmark + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-accent-gradient flex items-center justify-center shadow-accent-sm">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1.5L11 4.25v5.5L6.5 12.5 2 9.75v-5.5L6.5 1.5z" fill="white" fillOpacity="0.95" />
                </svg>
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-text-primary">Sneha J</span>
            </div>
            <p className="text-[12.5px] text-text-muted max-w-xs text-center md:text-left leading-relaxed">
              Freelance AI ad creator · Story-led brand films, product ads, UGC, and VFX videos for brands of every kind.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {[
              { label: "Work",        href: "#work" },
              { label: "What I Make", href: "#services" },
              { label: "About",       href: "#about" },
              { label: "Contact",     href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-text-muted hover:text-text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="px-5 py-2.5 text-[13px] font-semibold rounded-xl border border-border-md text-text-primary hover:bg-accent-light hover:border-accent-mid/50 hover:text-accent transition-all"
          >
            Email Me
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-text-muted">© {year} Sneha J · Freelance AI ad creator</p>
          <p className="text-[12px] text-text-muted">AI is my camera. The story is still mine.</p>
        </div>
      </div>
    </footer>
  );
}
