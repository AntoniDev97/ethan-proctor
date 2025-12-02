// components/sections/AboutIntro.tsx

import Container from "../layout/Container";
import CtaLink from "../ui/CtaLink";

const AboutIntro = () => {
  return (
    <section className="py-8 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <div className="md:col-start-2 md:col-span-10">
            <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
              Who is this guy?
            </h3>
            <p
              className="text-black mb-10 leading-snug font-semibold text-[1.75rem] md:text-[2.8rem]"
              style={{ fontFamily: '"din-2014", sans-serif' }}
            >
              I&apos;m Ethan, a designer with a passion for all things branding.
              Specialising in logo design, I&apos;ve spent years developing my craft
              so that my skills can provide brands with meaningful identities and
              disruptive creative energy.
            </p>
            <CtaLink href="/about">Find out more</CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutIntro;
