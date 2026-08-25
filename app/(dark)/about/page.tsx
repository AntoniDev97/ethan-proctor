import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Intro — cream */}
      <section className="bg-brand-cream text-black py-12 md:py-16">
        <Container>
          <FadeIn>
            <h1 className="font-extrabold tracking-tight leading-[0.9] text-[clamp(3rem,11vw,10rem)] mb-10 md:mb-14">
              About me
            </h1>
            <div className="space-y-8 text-body-fluid">
              <p>
                Designer, creative, golfer? As you&apos;ve probably guessed,
                I&apos;m a graphic designer. Passionate about all things brand
                identity, from ridiculously far out concepts to teeny tiny
                refinements, it&apos;s all a part of the process and journey
                that brands have to go through.
              </p>
              <p>
                I inherited something creative somewhere along the way and
                it&apos;s always sort of been there, it started out as a small
                passion for sketching and blossomed into a long-lasting
                admiration for creating something out of nothing.
              </p>
            </div>
          </FadeIn>

          <div className="border-t border-black/15 mt-12 md:mt-16 pt-12 md:pt-16">
            <FadeIn className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10 items-start">
              <div className="md:col-span-4 lg:col-span-3">
                <Image
                  src="/about/golfing_me_about.webp"
                  alt="Young Ethan playing golf"
                  width={0}
                  height={0}
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="md:col-span-8 lg:col-span-9 space-y-8 text-body-fluid">
                <p>
                  I&apos;ve spent most of my life in the rurals of North
                  Yorkshire, with a mild golfing addiction that&apos;s never
                  really faded. Undecided on what I wanted to pursue, I took on
                  Accounting at university but always found enjoyment out of a
                  more creative career path.
                </p>
                <p>
                  I eventually began logo designing for close friends and
                  family, with zero experience and learning how to use Adobe
                  Illustrator from YouTube and case studies in my spare time.
                </p>
              </div>
            </FadeIn>

            <FadeIn className="mt-10 md:mt-14 space-y-8 text-body-fluid">
              <p>
                Deciding to turn that passion into profession, I switched up my
                degree at Northumbria University to Graphic Design and chased a
                life of branding.
              </p>
              <p>
                I took advantage of every opportunity that came my way,
                listening to the experts, gaining an understanding of the
                creative world and even stayed on at University for a design
                internship once my course had come to an end.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Trust & London — black */}
      <section className="bg-brand-dark text-brand-cream py-16 md:py-24">
        <Container>
          <FadeIn className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10 items-start">
            <p className="md:col-span-5 text-body-fluid">
              So why am I telling you all of this? Building trust is the key
              element in collaboration. I use my experiences and intuition in
              every project, priding myself in setting myself apart with a
              fresh perspective (and a bit of Northern grit).
            </p>
            <div className="md:col-span-6 md:col-start-7">
              <Image
                src="/about/photography_studio_about.webp"
                alt="Ethan in photography studio"
                width={0}
                height={0}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
          <FadeIn className="mt-12 md:mt-16">
            <p className="text-body-fluid">
              I&apos;m now spending the majority of my time experiencing
              London, continuing to progress and improve in my current role.
              Mastering the craft, learning from those who have already
              mastered it and making it my mission to challenge what&apos;s
              come before.
            </p>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
