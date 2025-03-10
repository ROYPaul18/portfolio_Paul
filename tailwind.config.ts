import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Couleurs de base
        deepblue: "#000",
        lightblue: "#ECEEFF",
        greytext: "#9A9A9A",
        blanc: "#F7F3E9",
        grisbleu: "#141414",
        gris: "#A4A4A4",
      },
      animation: {
        glitch: "glitch 0.8s infinite linear alternate-reverse",
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-2px, 2px)" },
          "50%": { transform: "translate(2px, -2px)" },
          "75%": { transform: "translate(-1px, 1px)" },
          "100%": { transform: "translate(1px, -1px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
