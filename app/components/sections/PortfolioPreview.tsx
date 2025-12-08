// components/sections/PortfolioPreview.tsx

import Link from "next/link";
import Image from "next/image";
import Container from "../layout/Container";
import CtaLink from "../ui/CtaLink";
import * as motion from "motion/react-client";

const projects = [
  {
    id: "fletch-play",
    alt: "Fletch Play project header",
    src: "/homepage/Fletch_Play_Project_Header.webp",
  },
  {
    id: "dcreflections",
    alt: "Reflections project header",
    src: "/homepage/Reflections_Project_Header.webp",
  },
  {
    id: "hts",
    alt: "HTS project header",
    src: "/homepage/HTS_Project_Header.webp",
  },
  {
    id: "impact",
    alt: "Impact project header",
    src: "/homepage/Impact_Project_Header.webp",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <Container>
        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="overflow-hidden group bg-black cursor-pointer hover:opacity-90 transition-opacity">
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "834 / 550" }}
                  >
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 834px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* 'My Portfolio' Button */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CtaLink href="/projects">My Portfolio</CtaLink>
        </motion.div>
      </Container>
    </section>
  );
};

export default PortfolioPreview;
