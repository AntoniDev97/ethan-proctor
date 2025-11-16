import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#161616",
        "brand-light": "#8e8879",
        "brand-gray": "#3A3A3A",
      },
      fontFamily: {
        heading: ["var(--font-din)", "sans-serif"],
        script: ["var(--font-dancing-script)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
