import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F58E8A",
        secondary: "#FEE2CE",
        accent: "#2A3E91",
        highlight: "#90D3EF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["TAN Mon Cheri", "cursive"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;