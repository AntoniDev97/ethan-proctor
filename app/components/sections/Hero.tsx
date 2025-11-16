// components/sections/Hero.tsx

import Image from "next/image";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="pt-10 pb-10 md:pt-20 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          {/* Left: The_Craft.webp replacing headline text */}
          <div className="text-white flex justify-center">
            <div
              className="relative w-full max-w-[735px]"
              style={{ aspectRatio: "735 / 506" }}
            >
              <Image
                src="/homepage/The_Craft.webp"
                alt="For the Love of The Craft typography"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 735px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Ethan.webp replacing placeholder */}
          <div className="relative flex justify-center">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl transform rotate-3 w-full max-w-[730px]"
              style={{ aspectRatio: "730 / 630" }}
            >
              <Image
                src="/homepage/Ethan_Proctor.webp"
                alt="Portrait of Ethan Proctor"
                fill
                sizes="(max-width: 768px) 90vw, 730px"
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
