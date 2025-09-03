/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFD700',
          black: '#000000',
          white: '#FFFFFF'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
}
