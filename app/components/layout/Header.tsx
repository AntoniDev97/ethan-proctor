// components/layout/Header.tsx

"use client"; // This component needs client-side interaction (useState)

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Projects pages open with a black section, where the header's
  // black rule reads as a floating artefact — hide it there.
  const hideRule = pathname.startsWith("/projects");

  const navLinks = [
    { name: "logos", href: "/logos" },
    { name: "projects", href: "/projects" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <header className="relative top-0 left-0 w-full z-50 bg-brand-cream text-black">
      {/* The rule under the header spans the content width (logo to contact),
          not the full viewport */}
      <Container>
        <div
          className={`flex justify-between items-center py-8 ${
            hideRule ? "border-b-2 border-transparent" : "border-b-2 border-black"
          }`}
        >
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center gap-4">
          <Image
            src="/ep_logo_250x250.svg"
            alt="EP logo"
            width={64}
            height={64}
            priority
            className="w-[4.375rem] h-[4.375rem] object-contain"
          />
          <span className="sr-only">Ethan Proctor</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-14">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-nav font-semibold tracking-wide transition-opacity hover:opacity-60 outline-none ${
                  isActive
                    ? "underline decoration-2 underline-offset-8"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
              </>
            )}
          </button>
        </div>
        </div>
      </Container>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream shadow-lg z-40 border-t-2 border-black/15">
          <Container>
            <nav className="flex flex-col space-y-6 py-8">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                    className={`text-nav text-center font-semibold tracking-wide transition-opacity hover:opacity-60 outline-none ${
                      isActive
                        ? "underline decoration-2 underline-offset-8"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
