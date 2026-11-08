// components/sections/Hero.tsx

import Image from "next/image";
import Container from "../layout/Container";

// Entrance animations here run in CSS (see globals.css) so the image and heading can
// appear on first paint instead of waiting for JavaScript to load.
const Hero = () => {
  return (
    <section className="bg-brand-cream text-black py-10 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-10">
          <div className="md:col-span-5 motion-safe:animate-fade-scale">
            <div className="relative w-full aspect-600/632">
              <Image
                src="/homepage/Ethan_Proctor_Home.webp"
                alt="Ethan Proctor - Graphic Designer & Brand Identity Specialist"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col items-start justify-center">
            <p className="hero-text text-body-fluid font-extrabold">
              Ethan Proctor
            </p>
            <h1
              className="hero-text font-extrabold leading-[0.95] tracking-tight text-[clamp(2.75rem,13.5vw,5rem)] md:text-[clamp(3rem,11.5vw,12.5rem)]"
              style={{ animationDelay: "150ms" }}
            >
              Digital
              <br />
              Designer
            </h1>
            <span
              className="hero-text mt-6 md:mt-8 rounded-full border-2 border-black px-5 py-2 text-eyebrow font-extrabold uppercase tracking-[0.08em]"
              style={{ animationDelay: "300ms" }}
            >
              Based in London
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
