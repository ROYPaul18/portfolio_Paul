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
        deepblue: "#0F0F0F",
        lightblue: "#ECEEFF",
        greytext: "#9A9A9A",
        grismobile:"#232323",
        blanc: "#F7F3E9",
        grisbleu: "#141414",
        gris: "#A4A4A4",
      },
      animation: {
        glitch: "glitch 0.8s infinite linear alternate-reverse",
        'border-grow': 'border-grow 0.5s ease-out forwards', // Correction du tiret
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-2px, 2px)" },
          "50%": { transform: "translate(2px, -2px)" },
          "75%": { transform: "translate(-1px, 1px)" },
          "100%": { transform: "translate(1px, -1px)" },
        },
        pulseSvg: {
          '0%, 100%': { color: 'white' },
          '50%': { color: 'rgba(255, 255, 255, 0.6)' }, 
        },
        // Ajout des keyframes pour border-grow
        'border-grow': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;