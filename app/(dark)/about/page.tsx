import Image from "next/image";
import Container from "@/app/components/layout/Container";
import FadeIn from "@/app/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <div className="bg-brand-dark text-white min-h-screen pb-20 font-heading">
      {/* Hero Section */}
      <FadeIn className="w-full">
        <div className="relative w-full aspect-[1712/803]">
          <Image
            src="/about/sketches_montage_about.webp"
            alt="Montage of sketches and design work"
            fill
            className="object-cover"
            priority
          />
        </div>
      </FadeIn>



      <div>
        {/* Intro Text */}
        <div className="py-16 md:py-[80px]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
              <div className="md:col-start-2 md:col-span-10">
                <FadeIn>
                  <span className="block text-sm md:text-base mb-4 text-gray-400 font-normal">
                    About Me
                  </span>
                  <p className="text-3xl md:text-[3.1rem] font-semibold leading-tight mb-8">
                    Hey. As you&apos;ve probably guessed, I&apos;m a graphic designer. Passionate
                    about all things brand identity, from ridiculously far out concepts to
                    teeny tiny refinements, it&apos;s all a part of the craft and journey that
                    brands have to go through.
                  </p>
                  <p className="text-3xl md:text-[3.1rem] font-semibold leading-tight">
                    I inherited something creative somewhere along the way and it&apos;s
                    always sort of been there, it started out as a small passion for
                    sketching and blossomed into a long-lasting admiration for creating
                    something out of nothing.
                  </p>
                </FadeIn>
              </div>
            </div>
          </Container>
        </div>

        {/* White Section: In The Making & Transition */}
        <div className="bg-white text-brand-dark py-[80px]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
              <div className="md:col-span-12 2xl:col-start-2 2xl:col-span-10">
                {/* In The Making */}
                <FadeIn className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start mb-[80px]">
                  <div className="relative w-full lg:w-[350px] aspect-[522/791] flex-shrink-0">
                    <Image
                      src="/about/golfing_me_about.webp"
                      alt="Young Ethan playing golf"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8 uppercase tracking-wide text-black leading-none">
                      In the Making
                    </h2>
                    <div className="space-y-6 text-black text-xl md:text-xl lg:text-xl xl:text-[2.2rem] 2xl:text-2xl min-[1650px]:text-[2.2rem] min-[1850px]:text-2xl min-[2100px]:text-[2.2rem] leading-snug font-semibold">
                      <p>I’ve spent most of my life in the rurals of North Yorkshire,
                        with a mild golfing addiction that I can’t seem to shake. Undecided on
                        what I wanted to pursue, I took on Accounting at university but a small
                        part of me craved creativity.
                      </p>
                      <p>
                        I eventually took up logo designing for close friends and family,
                        with zero experience and learning how to use Adobe Illustrator from
                        videos and case studies in my spare time.
                      </p>
                      <p>That curiosity quickly turned into dedication that outpaced my other hobbies.
                        My handicap remained a work in progress whilst my command of the pen tool improved
                        significantly, it was then I knew I found the right course for me.</p>
                    </div>
                  </div>
                </FadeIn>

                {/* Transition Section */}
                <FadeIn className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start">
                  <div className="flex-1 order-2 md:order-1">
                    <div className="space-y-6 text-black text-xl md:text-xl lg:text-xl xl:text-[2.2rem] 2xl:text-2xl min-[1650px]:text-[2.2rem] min-[1850px]:text-2xl min-[2100px]:text-[2.2rem] leading-snug font-semibold">
                      <p>
                        Deciding to turn that passion into profession, I decided to change my degree at
                        Northumbria University from Accounting to Graphic Design and chase a life of
                        branding and never looked back.
                      </p>
                      <p>
                        I took advantage of every opportunity that popped up, listening to the experts,
                        gaining an understanding of the creative world and even stayed on at Northumbria
                        University for a design internship once my course had come to an end.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full lg:w-[450px] aspect-[704/532] flex-shrink-0 order-1 md:order-2">
                    <Image
                      src="/about/photography_studio_about.webp"
                      alt="Ethan in photography studio"
                      fill
                      className="object-cover"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </div>

        {/* Trust & Philosophy Section (Back to Dark) */}
        <div className="py-[80px]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
              <div className="md:col-start-2 md:col-span-10">
                <FadeIn>
                  <p className="text-3xl md:text-[3.2rem] font-semibold leading-tight mb-8">
                    So why am I telling you all of this? I believe that trust is the key
                    element in collaboration. I use my experiences and intuition in every
                    piece of design where I pride myself in setting myself apart from the
                    crowd.
                  </p>
                  <p className="text-3xl md:text-[3.2rem] font-semibold leading-tight">
                    These days I spend my time in the mini apple that is London, where I
                    continue to progress and improve in my current role. Mastering the
                    craft, learning from those who have already mastered it and making it
                    my mission to challenge what&apos;s come before.
                  </p>
                </FadeIn>
              </div>
            </div>
          </Container>
        </div>

        {/* London Image Section */}
        <div className="mb-20">
          <Container>
            <FadeIn className="relative w-full aspect-[1712/803]">
              <Image
                src="/about/shoreditch-highs-street.webp"
                alt="Shoreditch High Street"
                fill
                className="object-cover"
              />
            </FadeIn>
          </Container>
        </div>
      </div>
    </div>
  );
}
