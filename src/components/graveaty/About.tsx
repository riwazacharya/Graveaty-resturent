import { useEffect, useRef, useState } from "react";
import interior from "@/assets/about-interior.jpg";

function Counter({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setVal(Math.floor(p * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl text-gradient-gold sm:text-6xl">
        {val.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 nepali-pattern opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Image */}
        <div className="reveal relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-gold opacity-20 blur-2xl" />
          <img
            src={interior}
            alt="Graveaty rooftop interior with Newari carvings"
            loading="lazy"
            className="relative w-full rounded-2xl border border-border shadow-gold"
          />
          <div className="glass absolute -bottom-8 -right-4 hidden rounded-xl px-6 py-4 sm:block">
            <p className="font-script text-2xl text-gold">Est. 2014</p>
            <p className="text-xs uppercase tracking-[0.25em] text-cream/70">A decade of flavor</p>
          </div>
        </div>

        {/* Text */}
        <div className="reveal">
          <span className="divider-gold text-xs uppercase tracking-[0.4em]">Our Story</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">
            Where the Himalayas meet <span className="text-gradient-gold">modern luxury</span>
          </h2>
          <p className="mt-6 leading-relaxed text-cream/75">
            Perched above the vibrant streets of Thamel, Graveaty is a tribute to Nepal's
            timeless hospitality. We weave together centuries-old Newari recipes, the warmth
            of mountain villages, and the cinematic glow of a modern rooftop bar.
          </p>
          <p className="mt-4 leading-relaxed text-cream/75">
            Every plate tells a story — slow-cooked, hand-folded, fire-kissed. Every sip
            is a celebration. Welcome to a dining experience the locals call home, and the
            world calls unforgettable.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-10">
            <Counter end={25000} label="Happy Guests" />
            <Counter end={48} label="Signature Dishes" />
            <Counter end={11} label="Years of Craft" />
          </div>
        </div>
      </div>
    </section>
  );
}
