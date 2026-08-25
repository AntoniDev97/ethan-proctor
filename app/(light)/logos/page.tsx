import Image from "next/image";
import Container from "@/app/components/layout/Container";
import CtaLink from "@/app/components/ui/CtaLink";
import * as motion from "motion/react-client";

export default function LogosPage() {
  // Generate array of logo numbers 1-20
  const logoNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <>
      {/* Logos Grid */}
      <section className="bg-brand-cream text-black py-12 md:py-16">
        <Container>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-16 md:gap-y-20"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {logoNumbers.map((num) => (
              <motion.div
                key={num}
                className="relative w-full aspect-square"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="w-full h-full p-4 md:p-6 flex items-center justify-center">
                  <Image
                    src={`/logos/logo${num}.svg`}
                    alt={`Logo ${num}`}
                    width={350}
                    height={350}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Why logo design? */}
      <section className="on-dark bg-brand-dark text-brand-cream py-16 md:py-24">
        <Container>
          <motion.h3
            className="text-eyebrow font-extrabold mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why logo design?
          </motion.h3>
          <motion.p
            className="text-body-fluid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            I&apos;ve always been drawn towards building identities, the late
            nights of endless sketches and honing in on the finest of details.
            There&apos;s a fascinating journey from understanding the needs of a
            brand and how this translates into a single or collection of
            distinctive assets that best tells the story to the world.
          </motion.p>
          <motion.div
            className="mt-10 md:mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logos/logopages_sketches.webp"
              alt="Sheets of logo sketches and concept explorations"
              width={0}
              height={0}
              sizes="(min-width: 768px) 90vw, 100vw"
              className="w-full h-auto"
            />
          </motion.div>
          <motion.p
            className="mt-10 md:mt-14 text-body-fluid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            If you like what you see and would like to work together then please
            fill out the form or contact me via any of the social links below.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <CtaLink href="/contact">Contact Form</CtaLink>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
