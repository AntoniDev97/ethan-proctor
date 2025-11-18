// components/layout/Footer.tsx

import Container from "./Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="footer-bg"
      style={{ paddingTop: "40px", paddingBottom: "60px" }}
    >
      <Container>
        <div className="flex flex-col gap-6 md:gap-16 lg:gap-[250px]">
          <h2
            className="font-extrabold uppercase mb-0 text-[2rem] md:text-[4.5rem] lg:text-[10.94rem]"
            style={{ fontFamily: '"din-2014", sans-serif' }}
          >
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-between md:items-center gap-6 md:gap-8">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-white">
              <Image
                src="/Arrow.svg"
                alt="Arrow icon"
                width={64}
                height={64}
                className="w-full h-full invert rotate-90 md:rotate-0"
              />
            </div>
            <nav className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-3 md:gap-6 lg:gap-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold uppercase tracking-wider hover:underline text-[1.125rem] md:text-[1.75rem] lg:text-[2.81rem]"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold uppercase tracking-wider hover:underline text-[1.125rem] md:text-[1.75rem] lg:text-[2.81rem]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:ethan@example.com"
                className="font-extrabold uppercase tracking-wider hover:underline text-[1.125rem] md:text-[1.75rem] lg:text-[2.81rem]"
              >
                Email
              </a>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
