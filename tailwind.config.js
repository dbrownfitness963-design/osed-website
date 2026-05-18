/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '6px',
      },
      colors: {
        'brand-red': '#C41E3A',
      },
      spacing: {
        'section': '4rem',
      },
    },
  },
  plugins: [],
}