// app/page.tsx

import Hero from "@/app/components/sections/Hero";
import AboutIntro from "@/app/components/sections/AboutIntro";
import PortfolioPreview from "@/app/components/sections/PortfolioPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <PortfolioPreview />
    </>
  );
}
