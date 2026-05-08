import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal text-center">
          <span className="divider-gold text-xs uppercase tracking-[0.4em]">Visit Us</span>
          <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            Find us in the heart of <span className="text-gradient-gold">Thamel</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-gold">
            <iframe
              title="Graveaty location"
              src="https://www.google.com/maps?q=Thamel,Kathmandu,Nepal&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="glass space-y-6 rounded-2xl p-10">
            <Info icon={MapPin} title="Address" text="Thamel Marg, Kathmandu 44600, Nepal" />
            <Info icon={Phone} title="Phone" text="+977 1 4700 123" />
            <Info icon={Mail} title="Email" text="hello@graveaty.com" />
            <Info icon={Clock} title="Open Hours" text="Mon – Sun · 11:00 AM – 12:00 AM" />

            <div className="border-t border-border pt-6">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cream/70">Follow our story</p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-cream/70 transition hover:border-gold hover:bg-gradient-gold hover:text-primary-foreground hover:shadow-gold"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, text }: { icon: typeof MapPin; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold glow-gold">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-cream/60">{title}</p>
        <p className="mt-1 text-cream">{text}</p>
      </div>
    </div>
  );
}
