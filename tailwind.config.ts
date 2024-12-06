
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
        'text': '#f1eaf4',
        'background': '#080509',
        'primary': '#c6a7d0',
        'secondary': '#6e3b3b',
        'accent': '#ad8767',
        'cards': '#130e14'
       },
       fontFamily: {
        bungee: ['Bungee', 'cursive'],
        workSans: ['Work Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
