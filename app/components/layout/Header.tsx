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
    <header className="relative top-0 left-0 w-full z-10 py-6 bg-white">
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
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link relative group text-sm font-bold uppercase tracking-widest text-black pb-1"
            >
              {link.name}
              <span className="nav-underline"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark shadow-lg">
          <Container>
            <nav className="flex flex-col space-y-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                  className="text-lg uppercase tracking-widest text-white text-center hover:text-brand-light transition-colors"
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
