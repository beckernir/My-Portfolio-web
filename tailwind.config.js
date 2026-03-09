/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#0a0a0a',
        },
        secondary: {
          DEFAULT: '#111111',
          light: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#2a2a2a',
          light: '#333333',
        },
        surface: {
          DEFAULT: '#f5f5f5',
          dark: '#e5e5e5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}