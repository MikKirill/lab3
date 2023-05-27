/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  // important: true,
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

