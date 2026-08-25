// components/sections/PortfolioPreview.tsx

import Image from "next/image";
import Container from "../layout/Container";
import CtaLink from "../ui/CtaLink";
import * as motion from "motion/react-client";

const PortfolioPreview = () => {
  return (
    <section className="on-dark bg-brand-dark text-brand-cream py-16 md:py-24">
      <Container>
        {/* Featured project: Fletch & Play */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/projects/fetchPlay/fletchPlay2.webp"
            alt="Fletch & Play billboard - The More, The Furrier"
            width={0}
            height={0}
            sizes="(min-width: 768px) 90vw, 100vw"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 mt-10 md:mt-14 items-start">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Fletch &amp; Play
            </h2>
            <div className="mt-6">
              <CtaLink href="/projects/fletch-play">See Full Project</CtaLink>
            </div>
          </motion.div>
          <motion.p
            className="md:col-span-7 text-body-fluid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            I was fortunate enough to have the opportunity to craft into some
            quirky illustrations for a doggy daycare start-up brand, bringing a
            fluff-tonne of vibrancy and excitement that resonates with playtime!
          </motion.p>
        </div>

        {/* Client feedback */}
        <div className="border-t-2 border-brand-cream/20 mt-16 md:mt-24 pt-14 md:pt-20">
          <motion.h3
            className="text-eyebrow font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client Feedback
          </motion.h3>
          <motion.h2
            className="mt-4 text-[clamp(2rem,4.8vw,5.25rem)] font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            &ldquo;A Fantastic Experience&rdquo;
          </motion.h2>
          <motion.div
            className="mt-8 md:mt-10 space-y-6 text-body-fluid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              &ldquo;I had a fantastic experience working with Ethan. From start
              to finish, the service was professional, creative, and responsive.
              The design process was smooth, with clear communication at every
              step, and the final logo exceeded my expectations.
            </p>
            <p>
              The attention to detail and ability to capture exactly what I was
              looking for was outstanding. I&apos;d highly recommend their
              services to anyone looking for high quality graphic design and a
              reliable, professional experience.&rdquo;
            </p>
          </motion.div>
          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <svg
              viewBox="0 0 40 40"
              fill="currentColor"
              className="w-10 h-10 md:w-14 md:h-14 shrink-0"
              aria-hidden
            >
              <circle cx="20" cy="13" r="7" />
              <path d="M6 36c0-7.7 6.3-13 14-13s14 5.3 14 13v1H6v-1Z" />
            </svg>
            <div className="leading-snug text-[clamp(1.125rem,1.7vw,1.8125rem)]">
              <p className="font-extrabold">Alistair Newman,</p>
              <p>Harthorn Technology Solutions, Owner</p>
            </div>
          </motion.div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CtaLink href="/projects/hts">See Full Project</CtaLink>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioPreview;
