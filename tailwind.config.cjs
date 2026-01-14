/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        curandera: {
          bg: '#FFFEFC',
          dark: '#030303',
          accent: '#FBBC4E',
          alt: '#F9F2E8',
          green: '#4A5D44',
          primary: '#BE5705',
          secondary: '#A30000',
          body: '#363636',
        },
      },
      fontFamily: {
        serif: ['"Forum"', 'serif'],
        sans: ['"Forum"', 'serif'],
      },
      fontSize: {
        'h-xl': 'clamp(40px, 3rem + 2vw, 68px)',
        'h-l': 'clamp(32px, 2rem + 1.5vw, 48px)',
        'h-m': 'clamp(18px, 1.2rem + 0.5vw, 24px)',
        'body-l': 'clamp(16px, 1rem + 0.5vw, 20px)',
        'body-m': 'clamp(14px, 0.8rem + 0.2vw, 16px)',
      },
      animation: {
        'slide-in-right': 'slideInRight 1s ease-in-out forwards',
        'slide-out-left': 'slideOutLeft 1s ease-in-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-in-out forwards',
        'slide-out-right': 'slideOutRight 1s ease-in-out forwards',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
