/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out forwards',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { 
            opacity: 0,
            transform: 'translateX(-50px)'
          },
          '100%': { 
            opacity: 1,
            transform: 'translateX(0)'
          },
        },
      },
    },
  },
    
  
}

