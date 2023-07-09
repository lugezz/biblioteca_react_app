/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      "light_black": "#1c1c1e",
      "white": "#f3f3f3",
      "black": "#19191b",
      "blue": "#5179ff",
      "blue_black": "#1e40af",
      "turquesa":"#0d9488",
      "para_text": "#565657",
      "red": "#ef4444",
      "red_black": "#b91c1c",
      "grey":"#a3a3a3",
      "grey_black":"#94a3b8",

    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

