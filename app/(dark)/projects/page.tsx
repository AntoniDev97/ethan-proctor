import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/layout/Container";
import * as motion from "motion/react-client";

const projects = [
  {
    id: "hts",
    title: "HTS",
    src: "/projects/HTS_projects_page.webp",
  },
  {
    id: "impact",
    title: "Impact",
    src: "/projects/impact_projects_page.webp",
  },
  {
    id: "foxwhelp",
    title: "Foxwhelp",
    src: "/projects/foxwhelp_projects_page.webp",
  },
  {
    id: "fletch-play",
    title: "Fletch Play",
    src: "/projects/fletch_play_projects_page.webp",
  },
  {
    id: "salacia",
    title: "Salacia",
    src: "/projects/salacia_project_page.webp",
  },
  /*
  {
    id: "CapriSun",
    title: "CapriSun",
    src: "/projects/caprisun_project_page.webp",
  },
  */
  {
    id: "TwentyFourSeven",
    title: "TwentyFourSeven",
    src: "/projects/247_projects_page.webp",
  },
  {
    id: "dcreflections",
    title: "DCReflections",
    src: "/projects/reflections_projects_page.webp",
  },
  /*
  {
    id: "christmas-window",
    title: "Christmas Window",
    src: "/projects/xmas_window_projects_page.webp",
  },
  */

];

export default function ProjectsPage() {
  return (
    <div className="bg-brand-dark min-h-screen py-20">
      <Container>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          animate="visible"
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
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="block group"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={project.src}
                    alt={`${project.title} Project`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
