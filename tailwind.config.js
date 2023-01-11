/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loop: {
          '20%' : { transform: 'translateX(200px) translateY(-300px) scale(0.75)' },
          '40%' : { transform: 'translateX(-200px) translateY(300px) scale(1.25)'},
          '60%' : { transform: 'translateX(-400px) translateY(-400px) scale(1)' },
          '80%' : { transform: 'translateX(400px) translateY(400px) scale(1.25)'},
        },
        hover: {
          '20%' : { transform: 'translateX(8px) translateY(-9px)' },
          '40%' : { transform: 'translateX(-8px) translateY(9px)' },
          '60%' : { transform: 'translateX(-10px) translateY(-7px)' },
          '80%' : { transform: 'translateX(10px) translateY(7px)' },
        },
        hoverInv: {
          '20%' : { transform: 'translateX(6px) translateY(5px)' },
          '40%' : { transform: 'translateX(-6px) translateY(-5px)' },
          '60%' : { transform: 'translateX(-4px) translateY(5px)' },
          '80%' : { transform: 'translateX(4px) translateY(-5px)' },
        }
      },
      animation: {
        loop: 'loop 50s infinite',
        hover: 'hover 15s ease-in-out infinite',
        hoverInv: 'hover 10s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}