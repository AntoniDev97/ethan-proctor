import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";

export default function HTSPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-[#e5e5e5]">
      {/* Hero Image */}
      <FadeIn className="w-full mb-20" priority>
        <Image
          src="/projects/hts/hts1.webp"
          alt="HTS Hero"
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
          <FadeIn className="grid grid-cols-1 md:grid-cols-12 gap-y-10 items-start px-4 md:px-12 lg:px-24">
            <div className="md:col-span-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Harthorn Technology</h1>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h1>
              <div className="text-base text-gray-400 space-y-1">
                <p>Visual Identity</p>
                <p>Identity System</p>
                <p>Brand World</p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                Alistair's CCTV and security support company, Harthorn Technology
                Solutions, focuses on providing services to the local community,
                Using his 20+ years of experience in the mud of the tech world,
                helping people to feel safe and comfortable in their homes for
                generations.
              </p>
            </div>
          </FadeIn>

          {/* Grid Section 1 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden bg-[#0070f3]">
              <Image
                src="/projects/hts/hts2.webp"
                alt="HTS Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/hts/hts3.webp"
                alt="HTS Website"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Text Section 1 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              The brief was to design something clear, modern, simple. Refreshing
              the brand in a way that could represent the heritage and expertise
              that Alistair has spent many years building up. The contemporary
              monogram I created is fitting as a combination of the brand's
              prowess, craftsmanship and sits within the shield to encapsulated
              the credible security services provided.
            </p>
          </FadeIn>

          {/* Full Width Image */}
          <FadeIn className="w-full">
            <Image
              src="/projects/hts/hts4.webp"
              alt="HTS T-Shirt"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </FadeIn>

          {/* Footer Image */}
          <FadeIn className="w-full">
             <Image
              src="/projects/hts/hts5.webp"
              alt="HTS Truck"
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
