import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";

export default function DCReflectionsPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-[#e5e5e5]">
      {/* Hero Image */}
      <FadeIn className="w-full mb-20" priority>
        <Image
          src="/projects/dcreflections/dcreflections1.webp"
          alt="DC Reflections Hero"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-2">DC Reflections</h1>
              <div className="text-base text-gray-400 space-y-1 mt-6">
                <p>Visual Identity</p>
                <p>Identity System</p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                This exciting little project fell on my lap from the friend of a
                friend, a small start-up beauty brand with a passion for all
                things sparkly. Demi, the founder, seemingly wanted to achieve a
                look and feel that felt luxurious and liberating, providing a
                service of long-lasting radiance.
              </p>
            </div>
          </FadeIn>

          {/* Full Width Image */}
          <FadeIn className="w-full">
            <Image
              src="/projects/dcreflections/dcreflections2.webp"
              alt="DC Reflections Business Card"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </FadeIn>

          {/* Grid Section 1 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/dcreflections/dcreflections3.webp"
                alt="DC Reflections Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/dcreflections/dcreflections4.webp"
                alt="DC Reflections Window"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Text Section 1 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              The opportunity laid within this majestic typography, finding beauty
              within the finer details, a pinpoint visual asset that resembled
              that of an injection needle. The logo itself, a contemporary take on
              what is an extremely saturated market, attempting to be distinct and
              standout from the crowd, completed with subtle hints of naturalness
              and a splash of colour on an otherwise sleek visual identity system.
            </p>
          </FadeIn>

          {/* Footer Image */}
          <FadeIn className="w-full">
             <Image
              src="/projects/dcreflections/dcreflections5.webp"
              alt="DC Reflections Overlay"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
