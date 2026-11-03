import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Harthorn Technology Solutions",
  description:
    "Brand identity for Harthorn Technology Solutions, a North Yorkshire CCTV and home security company — a shield monogram and adaptable visual identity by Ethan Proctor.",
};

export default function HTSPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-brand-cream">
      {/* Hero Image */}
      <FadeIn className="w-full mb-20" priority>
        <Image
          src="/projects/hts/harthorn1.webp"
          alt="Harthorn Technology Solutions billboard with the shield monogram, Alistair and a CCTV camera"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </FadeIn>

      <Container>
        <div className="space-y-20">

          {/* Intro Text */}
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 items-start px-4 md:px-12 lg:px-24">
            <div className="lg:col-span-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Harthorn Technology
                <br />
                Solutions
              </h1>
              <div className="text-base text-gray-400 space-y-1">
                <p>Visual Identity</p>
                <p>Identity System</p>
                <p>Brand World</p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                Alistair&apos;s CCTV and security support company, Harthorn
                Technology Solutions, focuses on providing services to the local
                community. 20+ years of experience in the mud of the tech world
                has allowed him to ensure the safety of locals and their homes
                for generations.
              </p>
            </div>
          </FadeIn>

          {/* Image Run 1 */}
          <div className="space-y-5">
            <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Background matches the video's first frame so the slot doesn't flash while loading */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#0179ed]">
                <video
                  src="/projects/hts/harthorn2.mp4"
                  aria-label="Animation of the Harthorn monogram and shield being drawn on blue"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/projects/hts/harthorn3.webp"
                  alt="Construction drawing of the Harthorn monogram and shield"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn className="w-full">
              <Image
                src="/projects/hts/harthorn4.webp"
                alt="Black T-shirt with the Harthorn shield monogram and Alistair Newman's name"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </FadeIn>
          </div>

          {/* Text Section 1 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              The brief was to create a clear, modern and refined identity that
              would refresh the brand while honouring the heritage and expertise
              Alistair has built over many years. The contemporary monogram
              brings together the brand&apos;s technical precision and
              craftsmanship, using intertwining and overlapping letterforms to
              subtly reference the tactility of home installations.
            </p>
          </FadeIn>

          {/* Image Run 2 */}
          <div className="space-y-5">
            <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/projects/hts/harthorn5.webp"
                  alt="Harthorn poster reading Providing Trusted Security Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/projects/hts/harthorn6.webp"
                  alt="Harthorn Technology Solutions Instagram profile"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn className="w-full">
              <Image
                src="/projects/hts/harthorn7.webp"
                alt="Harthorn website homepage: Protecting North Yorkshire homes for over 20 years"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </FadeIn>

            <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/projects/hts/harthorn8.webp"
                  alt="Tote bag printed with the Harthorn Technology Solutions roundel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/projects/hts/harthorn9.webp"
                  alt="Cap with the embroidered Harthorn shield monogram"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Text Section 2 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              The monogram sits within a shield, symbolising the brand&apos;s
              trusted security services and its commitment to safeguarding homes
              across North Yorkshire. Beyond the logo, the shield becomes a
              versatile graphic element, forming the foundation of a dynamic and
              adaptable visual identity. Bold, uppercase typography complements
              the shield&apos;s strong, vertical structure, creating a cohesive
              design system that communicates confidence, reliability and
              authority.
            </p>
          </FadeIn>

          {/* Grid Section 3 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/hts/harthorn10.webp"
                alt="Harthorn Instagram story advertising Starlink professional installations"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/hts/harthorn11.webp"
                alt="Harthorn Technology Solutions wordmark in blue"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
