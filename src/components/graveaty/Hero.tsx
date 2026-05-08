import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-rooftop.jpg";

const phrases = ["Taste of Kathmandu", "Spirit of the Himalayas", "Soul of Newari Cuisine"];

export function Hero() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 50 : 110;
    const t = setTimeout(() => {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1800);
      else if (deleting && next === "") {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx]);

  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image with Ken-burns */}
      <div
        className="absolute inset-0 scale-110 animate-[floaty_20s_ease-in-out_infinite]"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 nepali-pattern opacity-40" />

      {/* Floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="float-particle"
          style={{
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
            left: `${Math.random() * 100}%`,
            top: `${20 + Math.random() * 70}%`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="font-script text-3xl text-gold animate-fade-in">Welcome to</p>
        <h1 className="mt-2 font-display text-6xl font-semibold leading-none text-cream sm:text-7xl md:text-8xl">
          Grave<span className="text-gradient-gold">aty</span>
        </h1>
        <div className="mt-4 divider-gold text-xs uppercase tracking-[0.4em]">Thamel · Kathmandu</div>

        <h2 className="mt-10 font-display text-3xl text-cream sm:text-4xl md:text-5xl">
          Experience the <span className="cursor-blink text-gradient-gold">{text}</span>
        </h2>
        <p className="mt-5 max-w-xl text-sm uppercase tracking-[0.3em] text-cream/70 sm:text-base">
          Traditional flavors · Modern ambience · Premium dining
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#reserve" className="btn-gold">Book a table</a>
          <a href="#menu" className="btn-outline-gold">Explore Menu</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/60">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gold" />
        </div>
      </div>
    </section>
  );
}
