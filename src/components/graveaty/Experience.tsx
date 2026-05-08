import { Music, Sparkles, Wine, Heart } from "lucide-react";

const items = [
  { icon: Music, title: "Live Music Nights", desc: "Acoustic sessions every Friday & Saturday under the stars." },
  { icon: Sparkles, title: "Rooftop Dining", desc: "Panoramic views of Kathmandu valley and the Himalayas." },
  { icon: Wine, title: "Cocktail Bar", desc: "Crafted by award-winning mixologists with local botanicals." },
  { icon: Heart, title: "Nepali Hospitality", desc: "Atithi Devo Bhava — every guest welcomed as a god." },
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-card opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal text-center">
          <span className="divider-gold text-xs uppercase tracking-[0.4em]">The Experience</span>
          <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            More than a meal — a <span className="text-gradient-gold">memory</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group glass relative overflow-hidden rounded-2xl p-8 text-center hover-lift"
            >
              <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-gold/30" />
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-background/40 text-gold transition group-hover:bg-gradient-gold group-hover:text-primary-foreground glow-gold">
                <Icon size={26} />
              </div>
              <h3 className="relative mt-6 font-display text-2xl text-cream">{title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-cream/65">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
