/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'clip-top': 'polygon(35% 0, 100% 2%, 100% 100%, 63% 100%, 0 100%, 0 3%)',
        'clip-bottom': 'polygon(35% 0, 100% 0, 100% 99%, 63% 100%, 0 99%, 0 0)',
      },
    },
  },
  plugins: [],
}