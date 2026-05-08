import { useEffect, useState } from "react";
import { X } from "lucide-react";
import hero from "@/assets/hero-rooftop.jpg";
import interior from "@/assets/about-interior.jpg";
import music from "@/assets/gallery-music.jpg";
import bar from "@/assets/gallery-bar.jpg";
import thamel from "@/assets/gallery-thamel.jpg";
import momo from "@/assets/dish-momo.jpg";
import cocktail from "@/assets/dish-cocktail.jpg";
import sekuwa from "@/assets/dish-sekuwa.jpg";

const images = [
  { src: hero, alt: "Rooftop dining at night", span: "row-span-2" },
  { src: momo, alt: "Steaming momos" },
  { src: music, alt: "Live acoustic night", span: "row-span-2" },
  { src: bar, alt: "Bartender flame show" },
  { src: cocktail, alt: "Signature gold cocktail" },
  { src: interior, alt: "Newari interior" },
  { src: sekuwa, alt: "Charcoal sekuwa" },
  { src: thamel, alt: "Thamel street at night", span: "col-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal text-center">
          <span className="divider-gold text-xs uppercase tracking-[0.4em]">Gallery</span>
          <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            Moments at <span className="text-gradient-gold">Graveaty</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {images.map((img) => (
            <button
              key={img.alt}
              onClick={() => setOpen(img.src)}
              className={`group relative overflow-hidden rounded-xl border border-border ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.2em] text-cream opacity-0 transition group-hover:opacity-100">
                {img.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md animate-fade-in"
        >
          <button
            className="absolute right-6 top-6 rounded-full border border-border p-3 text-cream hover:text-gold"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <img
            src={open}
            alt="Preview"
            className="max-h-[88vh] max-w-[95vw] rounded-xl shadow-gold"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
