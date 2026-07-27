// components/sections/Hero.tsx

import Image from "next/image";
import * as motion from "motion/react-client";
import Container from "../layout/Container";

const badges = ["My Portfolio", "Shoreditch, London", "Digital & Brand Experience"];

const Hero = () => {
  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col justify-between h-full">
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-brand-light px-5 py-1.5 text-sm md:text-base text-brand-light"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
            <motion.h1
              className="text-white font-bold leading-[1.05] text-[4.5rem] md:text-[6.5rem] lg:text-[9rem] xl:text-[11rem] mt-12 md:mt-0"
              style={{ fontFamily: '"din-2014", sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Brand
              <br />
              Designer
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/homepage/Ethan_Proctor_Home.webp"
              alt="Ethan Proctor - Graphic Designer & Brand Identity Specialist"
              width={0}
              height={0}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
