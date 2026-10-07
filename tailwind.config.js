/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#F2F6ED',
          100: '#E5EED9',
          200: '#D2E3BC',
          300: '#B5D294',
          400: '#98BF6C',
          500: '#7BA12B',
          600: '#6F9324',
          700: '#557518',
          800: '#415B10',
          900: '#2E420A',
          950: '#1A2605',
        },
        green: {
          50: '#F2F6ED',
          100: '#E5EED9',
          200: '#D2E3BC',
          300: '#B5D294',
          400: '#98BF6C',
          500: '#7BA12B',
          600: '#6F9324',
          700: '#557518',
          800: '#415B10',
          900: '#2E420A',
          950: '#1A2605',
        },
        brand: {
          dark: '#0B0F19',
          green: '#BBBE22',
          leaf: '#7BA12B',
          yellow: '#F6E21C',
        },
        surface: {
          50: '#fbf9f5',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
        },
        navy: {
          900: '#0B0F19',
          950: '#05080E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'premium': '0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'elevated': '0 20px 40px -10px rgba(15, 23, 42, 0.08), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}
