import Image from "next/image";
import Container from "@/app/components/layout/Container";

export default function DegreeShowPage() {
  return (
    <div className="bg-brand-dark min-h-screen py-20 text-[#e5e5e5]">
      <Container>
        <div className="space-y-20">
          {/* Hero Image */}
          <div className="w-full">
            <Image
              src="/projects/TwentyFourSeven/degreeshow1.webp"
              alt="Degree Show Posters"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>

          {/* Intro Text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 items-start px-4 md:px-12 lg:px-24">
            <div className="md:col-span-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Northumbria Design</h1>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Degree Show 2024</h1>
              <div className="text-base text-gray-400 space-y-1 mt-6">
                <p>Visual Identity</p>
                <p>Identity System</p>
                <p>Brand World</p>
                <p>Exhibition Design</p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-6 text-xl md:text-3xl leading-relaxed text-gray-300">
              <p>
                The best ideas strike when you least expect them - whether you're
                in the tub, dancing your heart, lifting weights, or saving the
                world. As Northumbria Graphic Designers, there's always a part of
                our brain thinking about design.
              </p>
            </div>
          </div>

          {/* Full Width Image 1 */}
          <div className="w-full">
            <Image
              src="/projects/TwentyFourSeven/degreeshow2.webp"
              alt="Degree Show Team"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Text Section 1 */}
          <div className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              Myself and the team, Shane McClean & Josh Robson, volunteered to
              collaborate and intern with Northumbria University, on this once in
              a lifetime opportunity to design for the Graphic Design Degree Show
              2024. The core challenge of the project was to encapsulate the 90+
              students and what they have to offer to the design industry into one
              distinct exhibition, attempting to show-off the skills and talent
              that Northumbria helped nurture.
            </p>
          </div>

          {/* Full Width Image 2 */}
          <div className="w-full">
            <Image
              src="/projects/TwentyFourSeven/degreeshow3.webp"
              alt="Degree Show App"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Grid Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src="/projects/TwentyFourSeven/degreeshow4.webp"
                alt="Degree Show Photo Booth"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src="/projects/TwentyFourSeven/degreeshow5.webp"
                alt="Degree Show Stickers"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Section 2 */}
          <div className="px-4 md:px-12 lg:px-24">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-300">
              The direction we took fell out of the million ways we'd considered
              to express our designers, an inevitability that the opportunities to
              create are infinite. Each unique and true to the task at hand, we
              dedicated the individuality of the many projects throughout the
              showcase. The identity system reflected this idea through getting
              those ideas down on paper regardless of time or place, and in doing
              so, became a testament to the course, rich in ideas that are truly
              authentic.
            </p>
          </div>

          {/* Grid Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src="/projects/TwentyFourSeven/degreeshow6.webp"
                alt="Degree Show Flyers"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src="/projects/TwentyFourSeven/degreeshow7.webp"
                alt="Degree Show Pattern"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Footer Image */}
          <div className="w-full">
             <Image
              src="/projects/TwentyFourSeven/degreeshow8.webp"
              alt="Degree Show Booklet"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
