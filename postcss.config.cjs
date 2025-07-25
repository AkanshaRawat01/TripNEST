// module.exports = {
//   plugins: {
//     '@tailwindcss/postcss': {},
//     autoprefixer: {},
//   },
// }
// postcss.config.js
// postcss.config.js (Correct for newer Tailwind versions)
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new package name here
    autoprefixer: {},
  },
};