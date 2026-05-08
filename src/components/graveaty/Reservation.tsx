import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

export function Reservation() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!data.name || data.name.length < 2) errs.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(data.email || "")) errs.email = "Enter a valid email";
    if (!/^[\d+\-\s()]{7,}$/.test(data.phone || "")) errs.phone = "Enter a valid phone";
    if (!data.date) errs.date = "Pick a date";
    if (!data.guests || +data.guests < 1) errs.guests = "Add guest count";

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const field = "w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-cream placeholder:text-cream/40 outline-none transition focus:border-gold focus:shadow-gold";

  return (
    <section id="reserve" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 nepali-pattern opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="divider-gold text-xs uppercase tracking-[0.4em]">Reservations</span>
          <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            Reserve your <span className="text-gradient-gold">evening</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/70">
            A table awaits. Share your details and our team will confirm shortly.
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="glass mt-12 grid gap-5 rounded-2xl p-8 sm:grid-cols-2 sm:p-10">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-cream/70">Name</label>
            <input name="name" className={field} placeholder="Your name" />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-cream/70">Email</label>
            <input name="email" type="email" className={field} placeholder="you@email.com" />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-cream/70">Phone</label>
            <input name="phone" className={field} placeholder="+977 ..." />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-cream/70">Date</label>
            <input name="date" type="date" className={field} />
            {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-cream/70">Guests</label>
            <input name="guests" type="number" min={1} max={20} className={field} placeholder="2" />
            {errors.guests && <p className="mt-1 text-xs text-destructive">{errors.guests}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-cream/70">Special requests</label>
            <textarea name="message" rows={4} className={field} placeholder="Anniversary, allergies, seating preference..." />
          </div>
          <div className="sm:col-span-2 flex flex-col items-center gap-3 pt-2">
            <button type="submit" className="btn-gold w-full sm:w-auto">Confirm Reservation</button>
            {success && (
              <p className="flex items-center gap-2 text-sm text-gold animate-fade-in">
                <Check size={16} /> Reservation received — we'll be in touch shortly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
