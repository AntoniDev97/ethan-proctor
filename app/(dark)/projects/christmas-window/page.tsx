import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";

export default function ChristmasWindowPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-[#e5e5e5]">
      {/* Hero Image */}
      <FadeIn className="w-full mb-20" priority>
        <Image
          src="/projects/christmasWindow/window1.webp"
          alt="Christmas Window Hero"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Newcastle Christmas</h1>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Competition 2022</h1>
              <div className="text-base text-gray-400 space-y-1 mt-6">
                <p>Editorial Design</p>
                <p>Illustration</p>
                <p>Copywriting</p>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                One of the first pieces of work I had out in the world was this
                illustrative competition winner for Newcastle City Council. The
                challenge was mostly for artists around the city to contribute to
                the festivities and spread some christmas joy that related to the
                culture of the toon!
              </p>
            </div>
          </FadeIn>

          {/* Grid Section 1 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/christmasWindow/window2.webp"
                alt="Christmas Window Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/christmasWindow/window3.webp"
                alt="Christmas Window Tree"
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
