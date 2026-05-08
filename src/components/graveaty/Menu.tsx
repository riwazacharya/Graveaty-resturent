import { useState } from "react";
import momo from "@/assets/dish-momo.jpg";
import sekuwa from "@/assets/dish-sekuwa.jpg";
import cocktail from "@/assets/dish-cocktail.jpg";
import thali from "@/assets/dish-thali.jpg";
import dessert from "@/assets/dish-dessert.jpg";

const categories = ["All", "Nepali", "Momo", "Cocktails", "BBQ", "Desserts"] as const;
type Cat = (typeof categories)[number];

const dishes: { name: string; desc: string; price: string; cat: Cat; img: string }[] = [
  { name: "Royal Newari Thali", desc: "Heritage platter of dal, bhat, gundruk & tamarind achar.", price: "Rs. 1,250", cat: "Nepali", img: thali },
  { name: "Steamed Buff Momo", desc: "Hand-folded dumplings, smoked tomato golden achar.", price: "Rs. 480", cat: "Momo", img: momo },
  { name: "Open-Fire Sekuwa", desc: "Charcoal-grilled marinated lamb with timur glaze.", price: "Rs. 880", cat: "BBQ", img: sekuwa },
  { name: "Himalayan Gold", desc: "Smoked whisky, honey, citrus & a whisper of cardamom.", price: "Rs. 690", cat: "Cocktails", img: cocktail },
  { name: "Pan-Seared Chilli Momo", desc: "Crispy momos tossed in Sichuan-Nepali chilli oil.", price: "Rs. 540", cat: "Momo", img: momo },
  { name: "Gold Leaf Lava Cake", desc: "Molten dark chocolate, juniper berry coulis, 24k leaf.", price: "Rs. 620", cat: "Desserts", img: dessert },
];

export function Menu() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? dishes : dishes.filter((d) => d.cat === active);

  return (
    <section id="menu" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal text-center">
          <span className="divider-gold text-xs uppercase tracking-[0.4em]">Signature Menu</span>
          <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            A symphony of <span className="text-gradient-gold">flavor</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Curated by our master chefs — fusing heritage Newari recipes with refined modern technique.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.25em] transition ${
                active === c
                  ? "border-gold bg-gradient-gold text-primary-foreground shadow-gold"
                  : "border-border text-cream/70 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card hover-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur">
                  {d.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-cream">{d.name}</h3>
                  <span className="whitespace-nowrap font-display text-lg text-gradient-gold">{d.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
