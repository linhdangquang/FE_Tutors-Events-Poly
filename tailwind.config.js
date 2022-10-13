// /** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: { 
      colors : {
        'dark-mode-primary': '#202125',
        'dark-table-primary': '#2C394B',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
  prefix: "tw-",
  important: true,
}