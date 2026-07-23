/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2ef',
          200: '#b4c6df',
          300: '#8ba6cd',
          400: '#5e81b6',
          500: '#3e629b',
          600: '#2c4b7d',
          700: '#1d375f',
          800: '#102542', // Primary Deep Navy
          900: '#0a172a',
          950: '#050c18',
        },
        emerald: {
          50: '#f0fdf9',
          100: '#ccfbf0',
          200: '#99f6e0',
          300: '#5eead0',
          400: '#2dd4bf',
          500: '#1B9C85', // Secondary Emerald Green
          600: '#137a69',
          700: '#126154',
          800: '#124d44',
          900: '#134039',
        },
        gold: {
          50: '#fdfbe8',
          100: '#fcf6c5',
          200: '#faea8f',
          300: '#f7d84f',
          400: '#f3c220',
          500: '#C9A227', // Royal Gold Accent
          600: '#a87f1b',
          700: '#865f19',
          800: '#704c1b',
          900: '#603f1b',
        },
        academic: {
          bg: '#FAFAFA',
          card: '#FFFFFF',
          border: '#E5E7EB',
          text: '#1F2937',
          muted: '#6B7280',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'academic': '0 10px 30px -10px rgba(16, 37, 66, 0.07)',
        'academic-hover': '0 20px 40px -15px rgba(16, 37, 66, 0.12)',
        'gold-glow': '0 0 20px rgba(201, 162, 39, 0.25)',
        'emerald-glow': '0 0 20px rgba(27, 156, 133, 0.25)',
      }
    },
  },
  plugins: [],
}
