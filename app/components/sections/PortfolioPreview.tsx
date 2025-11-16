// components/sections/PortfolioPreview.tsx

import Link from "next/link";
import Container from "../layout/Container";
import CtaLink from "../ui/CtaLink";

// TODO: Create these images in your '/public' folder
const projects = [
  {
    id: 1,
    alt: "The More, The Furries billboard",
  },
  { id: 2, alt: "Brighten your day card" },
  { id: 3, alt: "Foxwhelp logo" },
  { id: 4, alt: "Imp Ast stickers" },
];

const PortfolioPreview = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <Container>
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="rounded-lg overflow-hidden group bg-gray-700 aspect-square flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <span className="text-gray-500 text-center px-4">
                  {project.alt}
                </span>
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
