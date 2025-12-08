// components/sections/Hero.tsx

import Image from "next/image";
import * as motion from "motion/react-client";


const Hero = () => {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src="/homepage/HomePageBanner.webp"
        alt="Ethan Proctor - Graphic Designer & Brand Identity Specialist"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority
      />
    </motion.div>
  );
};

export default Hero;
