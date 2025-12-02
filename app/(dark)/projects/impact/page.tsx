import Image from "next/image";
import Container from "@/app/components/layout/Container";

export default function ImpactPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-[#e5e5e5]">
      {/* Hero Image */}
      <div className="w-full mb-20">
        <Image
          src="/projects/impact/impact1.webp"
          alt="Impact Mini-Golf Hero"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Impact Mini-Golf</h1>
              <div className="text-base text-gray-400 space-y-1 mt-6">
                <p>Visual Identity</p>
                <p>Identity System</p>
                <p>Brand World</p>
                <p>Exhibition Design</p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                Over 50% of parents are knowingly spending too little time with
                their children. With golf being such an impactful contribution to
                my life, I saw an opportunity here to help others fill the gap and
                spend more quality time with their families.
              </p>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="w-full">
            <Image
              src="/projects/impact/impact2.webp"
              alt="Impact App UI"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          {/* Text Section 1 */}
          <div className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              My solution was to create the Impact pop-up mini golf event that
              acts as a bridge for families to break down the barriers to golf and
              introduce those into a fun and welcoming environment. Stereotyping
              exists in the golf world, with its seemingly niche target market
              and expensive nature, yet kids are still 60 times more likely to get
              into it if a parent takes it up too.
            </p>
          </div>

          {/* Grid Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/impact/impact3.webp"
                alt="Impact Social Media"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/impact/impact4.webp"
                alt="Impact Merchandise"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Section 2 */}
          <div className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              Impact serves as an interactive and accessible event, informing on
              the benefits, inspiring younger generations and sparking
              conversation on the experience. There was an opportunity here to
              explore activations using the disruptive brand assets and system,
              free merchandise for participants, an exciting social media presence
              and overall challenging the dated opinons on what golf used to be.
            </p>
          </div>

          {/* Footer Image */}
          <div className="w-full">
             <Image
              src="/projects/impact/impact5.webp"
              alt="Impact Booklet"
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
