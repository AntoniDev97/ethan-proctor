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
    id: "fragment",
    title: "Fragment",
    src: "/projects/fragment_projects_page.webp",
    placeholder: true, // image only — no project page yet
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
  {
    id: "impact",
    title: "Impact",
    src: "/projects/impact_projects_page.webp",
  },
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
  {
    id: "CapriSun",
    title: "CapriSun",
    src: "/projects/caprisun_project_page.webp",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery, Research\n& Positioning",
    description:
      "Discussing the clear goals and vision for the project & analysing the category to inform our insights. Defining the core brand values, positioning the brand & what sets it apart from the rest.",
  },
  {
    number: "02",
    title: "Creative\nTerritories",
    description:
      "Built from the ground up, sketches, ideation and development. Bringing our most effective solutions to life typically with 2-3 distinct creative directions.",
  },
  {
    number: "03",
    title: "Project\nApplications",
    description:
      "As many collaborative revisions as required in order to align on a direction and the handover of final approved assets.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-brand-dark text-brand-cream min-h-screen py-10 md:py-14">
      <Container>
        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {project.placeholder ? (
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={project.src}
                    alt={`${project.title} Project`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <Link href={`/projects/${project.id}`} className="block group">
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
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Process */}
        <div className="border-t-2 border-brand-cream/20 mt-16 md:mt-20 pt-10 md:pt-14">
          <motion.h3
            className="text-eyebrow font-extrabold mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What does my process look like?
          </motion.h3>
          <motion.p
            className="text-body-fluid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Every designer&apos;s process looks a little different, but
            that&apos;s what makes each idea so unique, birthed from different
            experiences that come from an authentic place. Projects become
            shaped by perspective and tailored to the needs of the brand, but
            typically my process follows this structure from written brief to
            final output.
          </motion.p>

          <div className="mt-10 md:mt-14">
            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 py-10 md:py-14 border-b-2 border-brand-cream/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:col-span-3 font-extralight leading-[0.85] text-[clamp(5rem,15vw,16rem)]">
                  {step.number}
                </div>
                <div className="md:col-span-9">
                  <h4 className="whitespace-pre-line text-[clamp(2.25rem,5.75vw,6.25rem)] font-extrabold tracking-tight leading-[1.05]">
                    {step.title}
                  </h4>
                  <p className="mt-6 text-body-fluid">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
