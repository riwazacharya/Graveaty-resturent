import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Aarav Shrestha", role: "Local Guide · Kathmandu", text: "The best momos in Thamel, served in the most magical rooftop. The Newari thali is a love letter to our heritage." },
  { name: "Sophie Laurent", role: "Traveler · Paris", text: "We came for dinner and stayed for the music. Gold cocktails, candlelight, and the Himalayas glowing — pure cinema." },
  { name: "Rohan Mehta", role: "Food Critic · Mumbai", text: "Graveaty fuses tradition with refinement effortlessly. The sekuwa is smoky perfection. A must-visit in Nepal." },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="divider-gold text-xs uppercase tracking-[0.4em]">Guest Stories</span>
        <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
          Words from our <span className="text-gradient-gold">guests</span>
        </h2>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {reviews.map((r) => (
              <div key={r.name} className="w-full flex-shrink-0 px-2">
                <div className="glass mx-auto max-w-2xl rounded-2xl p-10">
                  <Quote className="mx-auto text-gold" size={36} />
                  <p className="mt-6 font-display text-2xl italic leading-relaxed text-cream">
                    "{r.text}"
                  </p>
                  <div className="mt-6 flex justify-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="font-display text-lg text-gradient-gold">{r.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-10 bg-gradient-gold" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
