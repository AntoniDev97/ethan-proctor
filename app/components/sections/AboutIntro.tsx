// components/sections/AboutIntro.tsx

import Container from "../layout/Container";
import CtaLink from "../ui/CtaLink";

const AboutIntro = () => {
  return (
    <section className="py-24 bg-white">
      <Container className="max-w-4xl mx-auto">
        <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
          Who is this guy?
        </h3>
        <p
          className="text-black mb-10 leading-snug font-semibold"
          style={{ fontFamily: '"din-2014", sans-serif', fontSize: "2.8rem" }}
        >
          I&apos;m Ethan, a designer with a passion for all things branding.
          Specialising in logo design, I&apos;ve spent years developing my craft
          so that my skills can provide brands with meaningful identities and
          disruptive creative energy.
        </p>
        <CtaLink href="/about">Find out more</CtaLink>
      </Container>
    </section>
  );
};

export default AboutIntro;
