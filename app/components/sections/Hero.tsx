// components/sections/Hero.tsx

import Image from "next/image";


const Hero = () => {
  return (
    <div className="w-full">
      <Image
        src="/homepage/HomePageBanner.webp"
        alt="Ethan Proctor - Graphic Designer & Brand Identity Specialist"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

export default Hero;
