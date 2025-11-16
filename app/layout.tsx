// app/layout.tsx

import type { Metadata } from "next";
// We'll import the fonts we defined in the tailwind config
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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
  title: "Ethan Proctor - Designer Portfolio",
  description:
    "Portfolio for Ethan Proctor, a designer with a passion for all things branding.",
  other: {
    "typekit-optimize": false,
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
