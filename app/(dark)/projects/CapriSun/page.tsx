import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";

export default function CapriSunPage() {
  return (
    <div className="bg-brand-dark min-h-screen pb-20 text-[#e5e5e5]">
      {/* Hero Image */}
      <FadeIn className="w-full mb-20" priority>
        <Image
          src="/projects/CapriSun/caprisun1.webp"
          alt="Capri-Sun Hero"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-2">CapriSun Fall 2025</h1>
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-400">(Limited Time Offer)</h1>
              <div className="text-base text-gray-400 space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold text-white mb-1">Credits</p>
                        <p>BrandOpus</p>
                        <p>Jeffrey Hsueh</p>
                        <p>John Ramskill</p>
                    </div>
                    <div className="space-y-1">
                        <p>Package Design</p>
                        <p>Illustration</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                Having the opportunity to work on a huge new product for CapriSun
                in the US has been a highlight of the start of my career. The ask
                was simple, create a seasonal look and feel that captivated the
                eyes of kids during the NFL season, ergo, make it fun, accessible
                and relatable.
              </p>
            </div>
          </FadeIn>

          {/* Full Width Image 1 */}
          <FadeIn className="w-full">
            <Image
              src="/projects/CapriSun/caprisun2.webp"
              alt="Capri-Sun Pouch"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </FadeIn>

           {/* Full Width Image 2 */}
           <FadeIn className="w-full">
            <Image
              src="/projects/CapriSun/caprisun3.webp"
              alt="Capri-Sun Box and Pouches"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </FadeIn>

          {/* Text Section 1 */}
          <FadeIn className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              The illustrations were designed to encapsulate the game day
              experience, what you&apos;d expect to see and how that resonates with the
              target market of energetic teens. The style was playful and modern,
              whilst attempting to still be distinctively CapriSun. The coherent
              design seemlessly flexed across multiple formats and an opportunity
              arose to lean into some customisation in the pouch where kids can
              write their name and express their individuality.
            </p>
          </FadeIn>

          {/* Footer Image */}
          <FadeIn className="w-full">
             <Image
              src="/projects/CapriSun/caprisun4.webp"
              alt="Capri-Sun Banner"
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
