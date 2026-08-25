// components/sections/AboutIntro.tsx

import Container from "../layout/Container";
import CtaLink from "../ui/CtaLink";
import * as motion from "motion/react-client";

const AboutIntro = () => {
  return (
    <section className="bg-brand-cream text-black pb-16 md:pb-24">
      <Container>
        <div className="border-t border-black/15 pt-10 md:pt-14">
          <motion.h3
            className="text-eyebrow font-extrabold mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A little bit about me
          </motion.h3>
          <motion.p
            className="text-body-fluid mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m Ethan, a designer with a passion for all things branding.
            Specialising in logo design, I&apos;ve spent years developing my craft
            so that my skills can provide brands with meaningful identities and
            disruptive creative energy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CtaLink href="/about">Find out more</CtaLink>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutIntro;
