/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'modNav': { "max": '490px' },
      'notModNav': '490px',
      'md': '960px',
      // 'lg': '1440px',
    },
  },
  plugins: [],
}
