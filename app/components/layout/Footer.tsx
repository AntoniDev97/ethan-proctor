"use client";

import Container from "./Container";
import Link from "next/link";
import ArrowIcon from "../ui/ArrowIcon";

const itemText = "text-[clamp(1.125rem,1.7vw,1.8125rem)]";
const linkClasses = `${itemText} w-fit hover:opacity-60 transition-opacity`;
const headingClasses =
  "text-[clamp(1.125rem,1.7vw,1.8125rem)] font-extrabold uppercase tracking-wide";

const Footer = () => {
  return (
    <footer className="bg-brand-cream text-black">
      <div className="pt-16 md:pt-24 pb-10">
        <Container>
          <div className="flex flex-col">
            {/* Main Heading */}
            <h2 className="font-extrabold tracking-tight leading-[0.9] text-[clamp(3rem,11.5vw,12.5rem)]">
              Get in touch
            </h2>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 border-t-2 border-black mt-12 md:mt-16 pt-10 md:pt-14">
              {/* Column 1: Identity (Span 4) */}
              <div className="md:col-span-4 flex flex-col gap-3">
                <h3 className={headingClasses}>Ethan Proctor</h3>
                <p className={itemText}>Graphic Designer</p>
                <p className={itemText}>London, United Kingdom</p>
              </div>

              {/* Column 2: Sitemap (Span 4) */}
              <div className="md:col-span-4 flex flex-col gap-3">
                <h3 className={headingClasses}>Sitemap</h3>
                <Link href="/" className={linkClasses}>
                  Home
                </Link>
                <Link href="/about" className={linkClasses}>
                  About
                </Link>
                <Link href="/projects" className={linkClasses}>
                  Projects
                </Link>
              </div>

              {/* Column 3: Socials (Span 4) */}
              <div className="md:col-span-4 flex flex-col gap-3">
                <h3 className={headingClasses}>Socials</h3>
                <a
                  href="https://www.instagram.com/proccygfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/ethan-proctor-gd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  LinkedIn
                </a>
                <a href="mailto:proccygfx@gmail.com" className={linkClasses}>
                  proccygfx@gmail.com
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div
              className={`flex flex-col md:flex-row justify-between items-center gap-6 border-t-2 border-black mt-12 md:mt-16 pt-8 ${itemText}`}
            >
              <p>© {new Date().getFullYear()} Ethan Proctor. All rights reserved.</p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:opacity-60 transition-opacity flex items-center gap-4 group"
              >
                Back to Top
                <ArrowIcon className="w-6 md:w-8 h-auto -rotate-90 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Closing black band */}
      <div className="h-7 md:h-12 bg-brand-dark" />
    </footer>
  );
};

export default Footer;
