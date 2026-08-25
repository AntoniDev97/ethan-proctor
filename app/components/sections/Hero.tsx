// components/sections/Hero.tsx

import Image from "next/image";
import * as motion from "motion/react-client";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="bg-brand-cream text-black py-10 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/homepage/Ethan_Proctor_Home.webp"
              alt="Ethan Proctor - Graphic Designer & Brand Identity Specialist"
              width={0}
              height={0}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="w-full h-auto"
              priority
            />
          </motion.div>

          <div className="md:col-span-7 flex flex-col items-start justify-center">
            <motion.p
              className="text-body-fluid font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ethan Proctor
            </motion.p>
            <motion.h1
              className="font-extrabold leading-[0.95] tracking-tight text-[clamp(2.75rem,13.5vw,5rem)] md:text-[clamp(3.25rem,12.86vw,13.8125rem)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Digital
              <br />
              Designer
            </motion.h1>
            <motion.span
              className="mt-6 md:mt-8 rounded-full border border-black px-5 py-2 text-eyebrow font-extrabold uppercase tracking-[0.08em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Based in London
            </motion.span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
