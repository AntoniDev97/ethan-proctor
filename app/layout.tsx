// app/layout.tsx

import type { Metadata } from "next";
// We'll import the fonts we defined in the tailwind config
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";


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
  title: "Ethan Proctor - Designer Portfolio",
  description:
    "Portfolio for Ethan Proctor, a designer with a passion for all things branding. Specializing in brand identity, logo design, and creative direction based in London.",
  keywords: [
    "Graphic Designer",
    "Branding",
    "Brand Identity",
    "Logo Design",
    "Creative Direction",
    "Portfolio",
    "Ethan Proctor",
    "London Designer",
    "North Yorkshire Designer",
  ],
  authors: [{ name: "Ethan Proctor" }],
  creator: "Ethan Proctor",
  publisher: "Ethan Proctor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ethan Proctor - Designer Portfolio",
    description:
      "Portfolio for Ethan Proctor, a designer with a passion for all things branding. Specializing in brand identity, logo design, and creative direction.",
    url: "https://ethanproctor.co.uk",
    siteName: "Ethan Proctor Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/homepage/Homepage_Typography_Craft.webp",
        width: 1200,
        height: 630,
        alt: "Ethan Proctor - Passion For The Craft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Proctor - Designer Portfolio",
    description:
      "Portfolio for Ethan Proctor, a designer with a passion for all things branding.",
    images: ["/homepage/Homepage_Typography_Craft.webp"],
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
  other: {
    "typekit-optimize": "false",
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
        <link rel="stylesheet" href="https://use.typekit.net/gqw7iuh.css" />
      </head>
      {/* This applies all font variables to the body.
        'inter.variable' is the default sans-serif (from tailwind.config.ts)
        'dancingScript.variable' is now available to use.
        Din 2014 is loaded from Typekit
      */}
      <body
        className={`${inter.variable} ${dancingScript.variable} font-sans`}
        style={{ fontFamily: "din-2014, var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
