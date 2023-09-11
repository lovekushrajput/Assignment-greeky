// import bg from '../shopping-cart/src/components/assets/newsletter-bg.jpeg'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': { 'min': '320px', 'max': '570px' }
      },
      fontFamily: {
        body: 'Cabin'
      },
      animation: {
        stickyHeader: 'stickyHeader 0.4s ease forwards',
        slideCartWindow: 'slideCartWindow 0.3s ease forwards',
        slideSearchWindow: 'slideSearchWindow 0.5s ease forwards'
      },
      keyframes: {
        stickyHeader: {
          '0%': { transform: 'translateY(-80px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideCartWindow: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideSearchWindow: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      }
    },
  },
  plugins: [],
}

