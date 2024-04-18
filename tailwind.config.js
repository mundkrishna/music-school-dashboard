/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js, jsx}",
    "./src/components/**/*.{html,js, jsx}"

  ],
  theme: {
    extend: {
      colors: {
        "dark-black": "#4F46E5",
        "light-white": "rgba(255, 255, 255, 0.18)"
      }
    },
  },
  plugins: [],
}

