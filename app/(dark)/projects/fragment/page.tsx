import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Fragment Digital",
  description:
    "Brand identity for Fragment, a start-up web development agency — a hand-drawn logotype and human-first visual identity by Ethan Proctor.",
};

export default function FragmentPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-brand-cream">
      {/* Hero Image */}
      <FadeIn className="w-full mb-20" priority>
        <Image
          src="/projects/fragment/fragment1.webp"
          alt="Fragment Digital website homepage in a browser window"
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
                Fragment Digital
              </h1>
              <div className="text-base text-gray-400 space-y-1">
                <p>Visual Identity</p>
                <p>Identity System</p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                Working together with Fragment&apos;s passionate team, we
                focused on the strategic positioning of the start-up, framing
                web development as a warm, human-first partnership. Bringing
                empathy, balance, and adaptable support to help every
                client&apos;s vision feel whole.
              </p>
            </div>
          </FadeIn>

          {/* Full Width Image: app icon */}
          <FadeIn className="w-full">
            <Image
              src="/projects/fragment/fragment2.webp"
              alt="Fragment app icon on an iPhone home screen"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </FadeIn>

          {/* Text Section 1 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              In an industry often dominated by rigid corporate templates and
              transactional client interactions, startup web development agency
              Fragment underwent a comprehensive rebranding initiative to
              center its operations around human warmth, craft, and
              interpersonal connection. Recognizing that clients seek more than
              just code, Fragment pivoted its brand identity toward an
              empathetic, partner-first model.
            </p>
          </FadeIn>

          {/* Grid Section 1 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/fragment/fragment3.webp"
                alt="Fragment brand icons on Electric Cyan"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/fragment/fragment4.webp"
                alt="Fragment logotype construction on Tech Purple"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Text Section 2 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              Designed as a hand-drawn script, this upward-facing custom
              logotype reflects the human warmth, hands-on craft, and momentum
              behind Fragment&apos;s detailed process. It bridges tactile
              artistry with precise digital execution, featuring smooth line
              connections that symbolize seamless client collaboration. Hidden
              within the tail of the &lsquo;F&rsquo; is a mouse cursor, a
              subtle nod to digital navigation that doubles as a standalone
              iconic mark for the brand.
            </p>
          </FadeIn>

          {/* Grid Section 2 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/fragment/fragment5.webp"
                alt="Fragment logotype printed on textured paper"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/fragment/fragment6.webp"
                alt="Fragment colour palette — Deep Teal, Off White, Tech Purple, Electric Cyan"
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
