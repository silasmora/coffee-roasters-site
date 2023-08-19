/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif']
      },
      fontWeight:{
        normal: '400',
        medium: '500',
        semiBold: '700',
        bold: '900'
      },
      colors: {
        darkCyan: '#0E8784',
        darkCyanHover: '#66D2CF',
        darkGreyBlue: '#333D4B',
        paleOrange: '#FDD6BA',
        lightCream: '#FEFCF7',
        grey: '#83888F',
        '2C343E': '#2C343E',
      },
      backgroundImage: {
        heroMobile: "url(images/home/mobile/image-hero-coffeepress.jpg)"
      },
      animation: {
        bounce: 'bounce 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            opacity: 1,
          },
          '50%': {
            transform: 'translateY(-10px) scale(1.1)',
            opacity: 0.8
          }
        },
        
      },
    },
  },
  plugins: [],
}

