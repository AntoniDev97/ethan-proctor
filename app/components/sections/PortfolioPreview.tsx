// components/sections/PortfolioPreview.tsx

import Link from "next/link";
import Image from "next/image";
import Container from "../layout/Container";
import CtaLink from "../ui/CtaLink";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="rounded-xl overflow-hidden group bg-black cursor-pointer hover:opacity-90 transition-opacity">
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
          ))}
        </div>

        {/* 'My Portfolio' Button */}
        <div className="mt-12">
          <CtaLink href="/projects">My Portfolio</CtaLink>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioPreview;
