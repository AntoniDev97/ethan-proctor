// components/layout/Header.tsx

"use client"; // This component needs client-side interaction (useState)

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "logos", href: "/logos" },
    { name: "projects", href: "/projects" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <header className="relative top-0 left-0 w-full z-50 py-6 bg-white">
      <Container className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center gap-4">
          <Image
            src="/ep_logo_250x250.svg"
            alt="EP logo"
            width={64}
            height={64}
            priority
            className="w-16 h-16 object-contain"
          />
          <span className="sr-only">Ethan Proctor</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-pill px-6 py-2 font-semibold tracking-widest text-black rounded-full transition-all duration-300 hover:bg-[#8e8879] hover:text-white"
              style={{
                fontFamily: '"din-2014", sans-serif',
                fontSize: "1.2rem",
              }}
            >
              {link.name}
            </Link>
          ))}
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
      </Container>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 border-t border-gray-200">
          <Container>
            <nav className="flex flex-col space-y-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                  className="tracking-widest text-black text-center hover:text-[#8e8879] transition-colors font-semibold"
                  style={{
                    fontFamily: '"din-2014", sans-serif',
                    fontSize: "1.2rem",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
