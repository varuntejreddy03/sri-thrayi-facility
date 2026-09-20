/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0D11',
          950: '#07080A',
          900: '#0B0D11',
          850: '#101319',
          800: '#151921',
          700: '#1E232E',
        },
        charcoal: {
          DEFAULT: '#13161D',
          900: '#13161D',
          850: '#171B24',
          800: '#1D222E',
          700: '#262D3C',
          600: '#323A4D',
        },
        ivory: {
          DEFAULT: '#F6F2E9',
          50: '#FDFCF9',
          100: '#F8F5EE',
          200: '#F1EBE0',
          300: '#E5DDCF',
          400: '#D2C6B3',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#DFC68E',
          champagne: '#F4E8D0',
          muted: '#C5A059',
          deep: '#9B7836',
          bronze: '#7A5B22',
          glow: 'rgba(197, 160, 89, 0.25)',
        },
        softgrey: {
          DEFAULT: '#9EA3AC',
          light: '#CFD3DC',
          dark: '#585E6B',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'gold-subtle': '0 0 25px -4px rgba(197, 160, 89, 0.22)',
        'gold-hover': '0 0 35px -2px rgba(197, 160, 89, 0.4)',
        'elevated': '0 20px 45px -15px rgba(11, 13, 17, 0.08)',
        'elevated-dark': '0 25px 55px -15px rgba(0, 0, 0, 0.65)',
        'warm-card': '0 15px 35px -10px rgba(122, 91, 34, 0.08)',
      }
    },
  },
  plugins: [],
};
