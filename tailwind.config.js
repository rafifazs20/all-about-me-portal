/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-black': '#0B0C10',
        'storm-blue':     '#0E4D92',
        'electric-cyan':  '#00BFFF',
        'steel-gray':     '#1F2833',
        'graphite-silver':'#C5C6C7',
        'warning-red':    '#C21807',
      },
      
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'], 
      },
      
      animation: {
        'track-flow': 'track-flow 8s linear infinite',
      },
      keyframes: {
        'track-flow': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}