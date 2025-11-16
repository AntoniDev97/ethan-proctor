// components/sections/Hero.tsx

import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="pt-48 pb-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="text-white">
            <h1
              className="text-8xl lg:text-9xl font-black uppercase leading-none tracking-tight -mb-6 lg:-mb-8"
              style={{ fontFamily: '"din-2014", sans-serif' }}
            >
              FOR THE
              <br />
              LOVE OF
            </h1>
            <p
              className="text-8xl lg:text-9xl font-bold mt-2 leading-none"
              style={{
                fontFamily: "var(--font-dancing-script), cursive",
                fontStyle: "italic",
              }}
            >
              The <span className="craft-underline">Craft</span>
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="bg-gray-700 rounded-lg w-full aspect-square flex items-center justify-center relative">
              <span className="text-gray-500 text-lg">Image Placeholder</span>
              {/* Small slash graphics in top-right */}
              <div className="absolute top-6 right-6 text-white text-3xl font-light opacity-40">
                {`//`}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
