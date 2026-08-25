// app/layout.tsx

import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/ui/CustomCursor";


// Setup the font variables
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ethanproctor.co.uk"),
  title: {
    default: "Ethan Proctor — Digital & Brand Designer in London",
    template: "%s — Ethan Proctor",
  },
  description:
    "Portfolio of Ethan Proctor, a digital and brand designer specialising in brand identity and logo design. Based in Shoreditch, London — originally from North Yorkshire — and open to design opportunities across London, Leeds, York and Newcastle.",
  keywords: [
    "Graphic Designer",
    "Digital Designer",
    "Brand Designer",
    "Branding",
    "Brand Identity",
    "Logo Design",
    "Creative Direction",
    "Portfolio",
    "Ethan Proctor",
    "Designer London",
    "Designer Leeds",
    "Designer York",
    "Designer Newcastle",
    "North Yorkshire Designer",
    "Shoreditch Designer",
  ],
  alternates: {
    canonical: "./",
  },
  authors: [{ name: "Ethan Proctor" }],
  creator: "Ethan Proctor",
  publisher: "Ethan Proctor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ethan Proctor — Digital & Brand Designer in London",
    description:
      "Digital and brand designer specialising in brand identity and logo design. Based in London, open to opportunities across London, Leeds, York and Newcastle.",
    url: "https://ethanproctor.co.uk",
    siteName: "Ethan Proctor Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/EP_Share_Image.webp",
        width: 2500,
        height: 1312,
        alt: "Ethan Proctor — Digital Designer, based in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Proctor — Digital & Brand Designer in London",
    description:
      "Digital and brand designer specialising in brand identity and logo design, based in London.",
    images: ["/EP_Share_Image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured data: tells search engines who Ethan is, what he does,
// and the regions he works in — surfaced for recruiter/employer searches.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ethan Proctor",
  jobTitle: "Digital & Brand Designer",
  url: "https://ethanproctor.co.uk",
  image: "https://ethanproctor.co.uk/homepage/Ethan_Proctor_Home.webp",
  email: "mailto:proccygfx@gmail.com",
  sameAs: [
    "https://www.instagram.com/proccygfx",
    "https://www.linkedin.com/in/ethan-proctor-gd",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  workLocation: [
    { "@type": "City", name: "London" },
    { "@type": "City", name: "Leeds" },
    { "@type": "City", name: "York" },
    { "@type": "City", name: "Newcastle upon Tyne" },
  ],
  knowsAbout: [
    "Brand Identity",
    "Logo Design",
    "Graphic Design",
    "Packaging Design",
    "Digital Design",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Northumbria University",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Bricolage Grotesque 36pt (Adobe Fonts static cuts, weights 200-800) */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/lsz3jfc.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      {/* Bricolage Grotesque 36 (Typekit) is the site typeface; Inter is the
          fallback, Dancing Script is available for script accents. */}
      <body
        className={`${inter.variable} ${dancingScript.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
