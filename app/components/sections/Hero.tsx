// components/sections/Hero.tsx

import Image from "next/image";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="pt-10 pb-10 md:pt-20 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          {/* Left: The_Craft.webp replacing headline text */}
          <div className="text-white flex justify-center flex-col items-center">
            {/* Hidden H1 for SEO */}
            <h1 className="sr-only">Ethan Proctor - Graphic Designer & Brand Identity Specialist</h1>
            <div
              className="relative w-full max-w-[900px] overflow-hidden"
              style={{ aspectRatio: "725 / 613" }}
            >
              <Image
                src="/homepage/Homepage_Typography_Craft.webp"
                alt="Passion For The Craft typography"
                fill
                priority
                sizes="(max-width: 768px) 95vw, 900px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Ethan.webp replacing placeholder */}
          <div className="relative flex justify-center">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl transform w-full max-w-[725px]"
              style={{ aspectRatio: "725 / 613" }}
            >
              <Image
                src="/homepage/Ethan_Proctor_Home.webp"
                alt="Portrait of Ethan Proctor"
                fill
                sizes="(max-width: 768px) 90vw, 725px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
