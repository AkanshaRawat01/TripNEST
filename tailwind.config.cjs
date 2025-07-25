// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial! It tells Tailwind to scan all JS, TS, JSX, TSX files in your src folder.
  ],
  theme: {
    extend: {
        fontFamily: { // Ensure this is here if you want to use the 'Inter' font
            inter: ['Inter', 'sans-serif'],
        },
    },
  },
  plugins: [],
}