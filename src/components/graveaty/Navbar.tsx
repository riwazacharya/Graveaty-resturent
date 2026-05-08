import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experience", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold text-gradient-gold">Graveaty</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Restaurant &amp; Bar
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm uppercase tracking-[0.2em] text-cream/80 transition hover:text-gold
                  after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all
                  hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#reserve" className="btn-gold hidden lg:inline-block">Reserve</a>

        <button
          className="lg:hidden text-cream"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        } bg-background/95 backdrop-blur-xl border-t border-border`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block text-sm uppercase tracking-[0.2em] text-cream/90 hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <a href="#reserve" onClick={() => setOpen(false)} className="btn-gold mt-2 text-center">
            Reserve a table
          </a>
        </ul>
      </div>
    </header>
  );
}
