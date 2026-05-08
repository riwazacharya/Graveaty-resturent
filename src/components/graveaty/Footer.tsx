export function Footer() {
  return (
    <footer className="relative border-t border-border bg-charcoal/60 py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-60" />
      {/* Decorative pattern strip */}
      <div className="absolute inset-x-0 top-2 h-2 nepali-pattern opacity-50" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-4 lg:px-10">
        <div>
          <h3 className="font-display text-3xl text-gradient-gold">Graveaty</h3>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Restaurant &amp; Bar</p>
          <p className="mt-4 text-sm leading-relaxed text-cream/65">
            A cinematic rooftop celebration of Nepali heritage and modern luxury — in the heart of Thamel.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {["About", "Menu", "Gallery", "Events", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="transition hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>Thamel Marg, Kathmandu</li>
            <li>+977 1 4700 123</li>
            <li>hello@graveaty.com</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>Mon – Thu · 11AM – 11PM</li>
            <li>Fri – Sat · 11AM – 1AM</li>
            <li>Sunday · 11AM – 12AM</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-6 pt-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground lg:px-10">
        © {new Date().getFullYear()} Graveaty Restaurant &amp; Bar — Crafted with love in Kathmandu
      </div>
    </footer>
  );
}
