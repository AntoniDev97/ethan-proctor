import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ethan Proctor Portfolio",
    short_name: "Ethan Proctor",
    description: "Portfolio for Ethan Proctor, a designer with a passion for all things branding.",
    start_url: "/",
    display: "standalone",
    // Splash screen colour: matches the grey behind the signature in the icons,
    // so the icon blends into the splash instead of sitting in a visible circle.
    background_color: "#e0dfdd",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        // The signature sits within the central 40% safe zone, so platforms
        // can crop this icon to a circle or squircle without clipping it.
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
