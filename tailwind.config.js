/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "apercu-regular": ["Apercu Regular", "sans-serif"],
        "apercu-medium": ["Apercu Medium", "sans-serif"],
        "apercu-bold": ["Apercu Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
