import Image from "next/image";
import Container from "@/app/components/layout/Container";

export default function FoxwhelpPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-[#e5e5e5]">
      {/* Hero Image */}
      <div className="w-full mb-20">
        <Image
          src="/projects/foxwhelp/foxwhelp1.webp"
          alt="Foxwhelp Hero"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Foxwhelp Premium</h1>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cider</h1>
              <div className="text-base text-gray-400 space-y-1">
                <p>Visual Identity</p>
                <p>Identity System</p>
                <p>Package Design</p>
                <p>Brand World</p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                Research shows that cider is losing its authenticity, which once ran
                deep into British culture. Foxwhelp challenges the norms,
                rediscovering its premium origin and its target market of 35-60
                year olds. With the brand's driving force at the center, the
                Foxwhelp apple.
              </p>
            </div>
          </div>

          {/* Grid Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/projects/foxwhelp/foxwhelp2.webp"
                alt="Foxwhelp Poster"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/projects/foxwhelp/foxwhelp3.webp"
                alt="Foxwhelp Sign"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Section 1 */}
          <div className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              This competition brief, as part of BrandOpus' Hatch program, was to
              help cider feel less predictable, to break conventions and appeal to
              new people. Foxwhelp taps into a gap in the market by bringing back
              the luxurious age in apple fermenting to remind the nation of the
              delicate techniques passed down through generations. Creating an
              authentic, bittership cider that can compete with drinks of the same
              quality as fine wines, prosecco and champagnes.
            </p>
          </div>

          {/* Grid Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/foxwhelp/foxwhelp4.webp"
                alt="Foxwhelp Bottle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/foxwhelp/foxwhelp5.webp"
                alt="Foxwhelp Cans"
                fill
                className="object-cover"
              />
            </div>
          </div>

           {/* Full Width Image */}
          <div className="w-full">
            <Image
              src="/projects/foxwhelp/foxwhelp6.webp"
              alt="Foxwhelp Box"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          {/* Text Section 2 */}
          <div className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              The identity created combines the fox wrapped around the Foxwhelp
              apple, the leaf contributes to the visual cues of natural
              ingredients which flexed on pack into this contemporary texture
              that feels sophisticated and refreshing. Pushing the design across 5
              flavours, building a narrative for each that all have unique visual
              indications and links to the fox that consumers can relate to for
              every occasion.
            </p>
          </div>

          {/* Grid Section 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/foxwhelp/foxwhelp7.webp"
                alt="Foxwhelp Label Detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/projects/foxwhelp/foxwhelp8.webp"
                alt="Foxwhelp Pattern"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Footer Image */}
          <div className="w-full">
             <Image
              src="/projects/foxwhelp/foxwhelp9.webp"
              alt="Foxwhelp Bottles Lineup"
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
