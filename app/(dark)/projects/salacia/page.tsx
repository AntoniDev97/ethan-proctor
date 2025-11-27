import Image from "next/image";
import Container from "@/app/components/layout/Container";

export default function SalaciaPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-[#e5e5e5]">
      {/* Hero Image */}
      <div className="w-full mb-20">
        <Image
          src="/projects/salacia/salacia1.webp"
          alt="Salacia 1872 Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </div>

      <Container>
        <div className="space-y-20">

          {/* Intro Text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 items-start px-4 md:px-12 lg:px-24">
            <div className="md:col-span-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Salacia 1872</h1>
              <div className="text-base text-gray-400 space-y-1 mt-6">
                <p>Visual Identity</p>
                <p>Package Design</p>
                <p>Brand World</p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                The brief was to create a seaweed-infused beverage, with freedom
                to create a rounded backstory which would drive the aesthetic and
                identity of the brand. Intrigued by mystery, I leaned into the
                dark tales of the Mary Celeste, informing the thinking behind this
                prestigious rum.
              </p>
            </div>
          </div>

          {/* Grid Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden bg-[#EAE8E4]">
              <Image
                src="/projects/salacia/salacia2.webp"
                alt="Salacia Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/salacia/salacia3.webp"
                alt="Salacia Display"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Full Width Image */}
          <div className="w-full">
            <Image
              src="/projects/salacia/salacia4.webp"
              alt="Salacia Bottles"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          {/* Text Section 1 */}
          <div className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              The logo encapsulates the unsettling story of the Mary Celeste,
              hinting at the presence of someone lurking, with the idea that there
              is something more to be discovered. Ensuring a meticulous balance
              between the face and sailing ship, through hundreds of pages of
              exploration. The story, however, flexes beyond that with pack assets
              that drive the storytelling and unique point of sale that nods to
              the missing lifeboat.
            </p>
          </div>

          {/* Full Width Image (Sketches) */}
          <div className="w-full">
            <Image
              src="/projects/salacia/salacia5.webp"
              alt="Salacia Sketches"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          {/* Footer Image */}
          <div className="w-full">
             <Image
              src="/projects/salacia/salacia6.webp"
              alt="Salacia Lineup"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
