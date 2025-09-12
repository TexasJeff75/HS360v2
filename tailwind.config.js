/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // HealthSpan360 Brand Colors
        magenta: {
          500: '#D600A4',
          600: '#B5008A',
          700: '#940070'
        },
        orange: {
          500: '#FF6A00',
          600: '#E55A00',
          700: '#CC4B00'
        },
        purple: {
          500: '#8E2EFF',
          600: '#7A28E0',
          700: '#6622C2'
        },
        gold: {
          500: '#FFC300',
          600: '#E6AF00',
          700: '#CC9B00'
        },
        charcoal: {
          500: '#1E1E2F',
          600: '#181828',
          700: '#121221'
        },
        'off-white': '#F4F4F4',
        'cool-gray': '#AAAAAA'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #D600A4 0%, #FF6A00 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8E2EFF 0%, #FFC300 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E1E2F 0%, #2A1F3D 100%)',
      }
    },
  },
  plugins: [],
};