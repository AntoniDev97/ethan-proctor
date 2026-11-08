import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";
import LoopingVideo from "@/app/components/ui/LoopingVideo";

export const metadata: Metadata = {
  title: "Northumbria Design Degree Show 2024",
  description:
    "Visual identity for Northumbria University's Graphic Design Degree Show 2024 — a hand-drawn world of 400+ illustrations by Ethan Proctor, Shane McClean and Josh Robson.",
};

export default function DegreeShowPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-brand-cream">
      {/* Hero Image */}
      <FadeIn className="w-full mb-20" priority>
        <Image
          src="/projects/TwentyFourSeven/twentyfourseven1.webp"
          alt="Three degree show posters of students daydreaming among hand-drawn doodles"
          width={2700}
          height={1275}
          sizes="100vw"
          className="w-full h-auto"
          loading="eager"
          fetchPriority="high"
        />
      </FadeIn>

      <Container>
        <div className="space-y-20">

          {/* Intro Text */}
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 items-start px-4 md:px-12 lg:px-24">
            <div className="lg:col-span-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Northumbria Design
                <br />
                Degree Show 2024
              </h1>
              <div className="text-base text-gray-400 space-y-1">
                <p>Visual Identity</p>
                <p>Identity System</p>
                <p>Brand World</p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                The best ideas strike when you least expect them - whether
                you&apos;re out and about, singing in the shower, lifting weights,
                or saving the world. As Northumbria Graphic Designers,
                there&apos;s always a part of our brain thinking about design.
              </p>
            </div>
          </FadeIn>

          {/* Image Run 1 */}
          <div className="space-y-5">
            <FadeIn className="w-full">
              <Image
                src="/projects/TwentyFourSeven/twentyfourseven2.webp"
                alt="The three designers behind Twenty Four Seven in front of the hand-drawn doodle wall"
                width={2700}
                height={1275}
                sizes="100vw"
                className="w-full h-auto"
              />
            </FadeIn>

            <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative w-full aspect-square overflow-hidden">
                <LoopingVideo
                  src="/projects/TwentyFourSeven/twentyfourseven3.mp4"
                  poster="/projects/TwentyFourSeven/twentyfourseven3-poster.webp"
                  label="The Twenty Four Seven logo being hand-lettered on grid paper"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden">
                <LoopingVideo
                  src="/projects/TwentyFourSeven/twentyfourseven4.mp4"
                  poster="/projects/TwentyFourSeven/twentyfourseven4-poster.webp"
                  label="The degree show's Instagram grid scrolling on a phone"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </FadeIn>
          </div>

          {/* Text Section 1 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              Myself, Shane McClean & Josh Robson, volunteered to collaborate and
              intern with Northumbria University, on this once in a lifetime
              opportunity to design for the Graphic Design Degree Show 2024. The
              core challenge of the project was to represent the 90+ students and
              what they have to offer to the design industry into one distinct
              exhibition, attempting to show-off the skills and talent that
              Northumbria helped nurture.
            </p>
          </FadeIn>

          {/* Full Width Image */}
          <FadeIn className="w-full">
            <Image
              src="/projects/TwentyFourSeven/twentyfourseven5.webp"
              alt="Hundreds of hand-drawn doodles on grid paper"
              width={2700}
              height={1275}
              sizes="100vw"
              className="w-full h-auto"
            />
          </FadeIn>

          {/* Text Section 2 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              Our insight showed that the brain&apos;s most creative moments
              happen during downtime. We found that when creatives are relaxed,
              distracted or doing day-to-day tasks that release dopamine,
              that&apos;s when they come up with the most interesting ideas. The
              hand-drawn visual language that we built encapsulates that
              authentic, late night, breakthrough moment of a quick scamp on a
              paper napkin.
            </p>
          </FadeIn>

          {/* Image Run 2 */}
          <div className="space-y-5">
            <FadeIn className="w-full">
              <div className="relative w-full aspect-[1800/850] overflow-hidden">
                <LoopingVideo
                  src="/projects/TwentyFourSeven/twentyfourseven6.mp4"
                  poster="/projects/TwentyFourSeven/twentyfourseven6-poster.webp"
                  label="Student projects paired with the hand-drawn doodles they inspired"
                />
              </div>
            </FadeIn>

            <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/projects/TwentyFourSeven/twentyfourseven7.webp"
                  alt="Students posing with doodle props inside the degree show photo booth frame"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/projects/TwentyFourSeven/twentyfourseven8.webp"
                  alt="Twenty Four Seven business cards, one co-branded with D&AD New Blood 2024"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Text Section 3 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              Each unique and true to the task at hand, we dedicated the
              individuality of the many projects throughout the showcase with
              over 400 uniquely designed illustrations which each represented an
              idea that one of the students had worked on during their time at
              Northumbria. Our storytelling was built up over months prior to the
              show, developing social media, invitations, merchandise,
              wayfinding, props and more into one coherent ecosystem.
            </p>
          </FadeIn>

          {/* Image Run 3 */}
          <div className="space-y-5">
            <FadeIn className="w-full">
              <Image
                src="/projects/TwentyFourSeven/twentyfourseven9.webp"
                alt="Visitors exploring the Northumbria Graphic Design Degree Show 2024"
                width={2700}
                height={1275}
                sizes="100vw"
                className="w-full h-auto"
              />
            </FadeIn>

            <FadeIn className="w-full">
              <Image
                src="/projects/TwentyFourSeven/twentyfourseven10.webp"
                alt="Spiral-bound degree show booklet listing the graduating graphic designers"
                width={1800}
                height={850}
                sizes="100vw"
                className="w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
}
