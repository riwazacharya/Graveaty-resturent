import { useEffect, useState } from "react";

/** Loader, scroll progress, cursor glow & scroll-reveal observer */
export function Effects() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: -500, y: -500 });

  useEffect(() => {
    // hide loader after first paint
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className={`loader-overlay ${loading ? "" : "hidden"}`}>
        <div className="flex flex-col items-center gap-5">
          <div className="loader-ring" />
          <p className="font-display text-2xl text-gradient-gold">Graveaty</p>
        </div>
      </div>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} />
    </>
  );
}
