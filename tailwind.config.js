/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme1: {
          primary: '#4F46E5',
          secondary: '#E5E7EB',
          background: '#F9FAFB',
          text: '#1F2937',
          accent: '#10B981',
        },
        theme2: {
          primary: '#1E3A8A',
          secondary: '#1F2937',
          background: '#111827',
          text: '#F9FAFB',
          accent: '#F59E0B',
        },
        theme3: {
          primary: '#EC4899',
          secondary: '#A855F7',
          background: '#FEF3C7',
          text: '#4B0082',
          accent: '#14B8A6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        playful: ['Pacifico', 'cursive'],
      },
      spacing: {
        'theme1-sm': '1rem',
        'theme1-md': '1.5rem',
        'theme2-sm': '0.75rem',
        'theme2-md': '1.25rem',
        'theme3-sm': '1.25rem',
        'theme3-md': '2rem',
      },
      borderRadius: {
        'theme1': '0.5rem',
        'theme2': '0.25rem',
        'theme3': '1rem',
      },
    },
  },
  plugins: [],
}