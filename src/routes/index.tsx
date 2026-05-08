import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/graveaty/Navbar";
import { Hero } from "@/components/graveaty/Hero";
import { About } from "@/components/graveaty/About";
import { Menu } from "@/components/graveaty/Menu";
import { Gallery } from "@/components/graveaty/Gallery";
import { Experience } from "@/components/graveaty/Experience";
import { Testimonials } from "@/components/graveaty/Testimonials";
import { Reservation } from "@/components/graveaty/Reservation";
import { Contact } from "@/components/graveaty/Contact";
import { Footer } from "@/components/graveaty/Footer";
import { Effects } from "@/components/graveaty/Effects";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Graveaty Restaurant & Bar — Rooftop Dining in Thamel, Kathmandu" },
      {
        name: "description",
        content:
          "Experience the taste of Kathmandu at Graveaty — a premium rooftop restaurant & bar in Thamel serving Newari cuisine, momos, sekuwa, and signature cocktails.",
      },
      { property: "og:title", content: "Graveaty Restaurant & Bar — Thamel, Kathmandu" },
      { property: "og:description", content: "Traditional flavors. Modern ambience. Premium dining." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Great+Vibes&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Effects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Experience />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
