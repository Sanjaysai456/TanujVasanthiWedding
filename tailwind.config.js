/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        goldglow: '#FFDF00',
        cream: '#FFFDD0',
        maroon: '#800000',
        saffron: '#FF9933',
        dark: '#120800',
        "dark-card": '#241000'
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cinzel"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'petal': 'petalFall 10s linear infinite',
        'fade-in': 'fadeIn 2s ease-in-out',
        'glow': 'glowPulse 3s ease-in-out infinite',
        'float': 'floatDiya 4s ease-in-out infinite',
      },
      keyframes: {
        petalFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(255, 223, 0, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(255, 223, 0, 0.8))' },
        },
        floatDiya: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
