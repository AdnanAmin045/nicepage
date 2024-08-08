/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': '300px',
      // => @media (min-width: 640px) { ... }

      'laptop': '600px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1000px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgb(54, 107, 209, 1) 0%, rgb(171, 62, 141, 1) 100%)',
        'custom-gradient2': 'linear-gradient(90deg, rgb(171, 62, 141, 1) 0%, rgb(54, 107, 209, 1) 100%)',
      },
    },
  },
  plugins: [],
}