import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";

export default function FletchPlayPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-[#e5e5e5]">
      {/* Hero Image */}
      <FadeIn className="w-full mb-20" priority>
        <Image
          src="/projects/fetchPlay/fletchPlay1.webp"
          alt="Fletch & Play Hero"
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
          {/* Intro Text */}
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 items-start px-4 md:px-12 lg:px-24">
            <div className="lg:col-span-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Fletch & Play</h1>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Doggy Daycare</h1>
              <div className="text-base text-gray-400 space-y-1">
                <p>Visual Identity</p>
                <p>Identity System</p>
              </div>
            </div>
            <div className="lg:col-span-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                I was fortunate enough to have the opportunity to craft into some
                quirky illustrations for a doggy daycare start-up brand,
                bringing a fluff-tonne of vibrancy and excitement that could
                resonate with playtime!
              </p>
            </div>
          </FadeIn>

          {/* Billboard Image */}
          <FadeIn className="w-full">
            <Image
              src="/projects/fetchPlay/fletchPlay2.webp"
              alt="Fletch & Play Billboard"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </FadeIn>

          {/* Grid Section */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden bg-[#EAE8E4]">
              <Image
                src="/projects/fetchPlay/fletchPlay3.webp"
                alt="Fletch & Play Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/fetchPlay/fletchPlay4.webp"
                alt="Fletch & Play Bag"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Text Section */}
          {/* Text Section */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              Bringing to life the personalities of the distinct characters, the
              aim was to design a suite of illustrations that felt accessible
              and easy to connect with. A place that is trusted, building
              meaningful relationships with both the dogs and their owners that
              never fade. I built up a suite of fun assets that felt coherent
              and consistent with the brand, with supporting copywriting that
              was seemingly understanding of the language of your furry little
              friends.
            </p>
          </FadeIn>

          {/* Mobile Screens */}
          <FadeIn className="w-full bg-[#EAE8E4]">
             <Image
              src="/projects/fetchPlay/fletchPlay5.webp"
              alt="Fletch & Play Mobile Screens"
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
