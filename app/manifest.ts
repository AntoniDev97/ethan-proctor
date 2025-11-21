import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ethan Proctor Portfolio",
    short_name: "Ethan Proctor",
    description: "Portfolio for Ethan Proctor, a designer with a passion for all things branding.",
    start_url: "/",
    display: "standalone",
    background_color: "#161616",
    theme_color: "#161616",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
