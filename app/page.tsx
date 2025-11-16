// app/page.tsx

import Hero from "./components/sections/Hero";
import AboutIntro from "./components/sections/AboutIntro";
import PortfolioPreview from "./components/sections/PortfolioPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <PortfolioPreview />
    </>
  );
}
