"use client";

import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="footer-bg text-white"
      style={{ paddingTop: "80px", paddingBottom: "40px" }}
    >
      <Container>
        <div className="flex flex-col gap-16 md:gap-24">
          {/* Main Heading */}
          <div className="flex flex-col gap-8">
            <h2
              className="font-extrabold uppercase mb-0 text-[12vw] md:text-[10.94rem] leading-[0.8]"
              style={{ fontFamily: '"din-2014", sans-serif' }}
            >
              Get in Touch
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-t border-white/20 pt-12">
            {/* Column 1: Identity (Span 4) */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h3 className="text-xl font-bold uppercase tracking-wider">
                Ethan Proctor
              </h3>
              <div className="flex flex-col gap-1 text-lg text-white/80">
                <p>Graphic Designer</p>
                <p>London, UK</p>
              </div>
            </div>

            {/* Column 2: Sitemap (Span 4) */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h3 className="text-xl font-bold uppercase tracking-wider">
                Sitemap
              </h3>
              <nav className="flex flex-col gap-2 text-lg text-white/80">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </nav>
            </div>

            {/* Column 3: Socials (Span 4) */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h3 className="text-xl font-bold uppercase tracking-wider">
                Socials
              </h3>
              <nav className="flex flex-col gap-2 text-lg text-white/80">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:ethan@example.com"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/20 text-sm text-white/60 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Ethan Proctor. All Rights Reserved.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white transition-colors flex items-center gap-3 group"
            >
              Back to Top
              <div className="w-6 h-6 flex items-center justify-center">
                <Image
                  src="/Arrow.svg"
                  alt="Arrow pointing up"
                  width={24}
                  height={24}
                  className="w-full h-full invert -rotate-90 group-hover:-translate-y-1 transition-transform"
                />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
