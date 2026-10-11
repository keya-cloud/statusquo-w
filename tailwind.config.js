/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1E33',
          light: '#15304D',
          dark: '#071221',
        },
        teal: {
          DEFAULT: '#1E9E96',
          light: '#2BB5AC',
          dark: '#157A73',
        },
        cream: {
          DEFAULT: '#FAF8F4',
          light: '#FFFCF7',
          dark: '#F2EEE6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
