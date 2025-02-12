import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Couleurs de base
        'deepblue': '#00010F',
        'lightblue':"#ECEEFF",
        'greytext':"#9A9A9A",
        'blanc':"#F7F3E9",
        'grisbleu':"#0C0D1F",
        background: {
          DEFAULT: '#F6F7FF', // Light mode
          dark: '#000217', // Dark mode
        },
        foreground: {
          DEFAULT: '#000217', // Light mode
          dark: '#F6F7FF', // Dark mode
        },
        primary: {
          DEFAULT: '#000217', // Votre deepblue en light mode
          dark: '#F6F7FF', // Version claire pour le dark mode
        },
        secondary: {
          DEFAULT: '#F6F7FF',
          dark: '#1E293B',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;