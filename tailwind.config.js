/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#facc15',
        'primary-dark': '#eab308',
        'primary-light': '#fde047',
        'dark': '#0f172a',
        'light': '#f8fafc',
        'surface': '#ffffff',
        'surface-dark': '#1e293b',
        'text-main': '#0f172a',
        'text-muted': '#64748b',
        'border': '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(250, 204, 21, 0.3)',
        'glow-lg': '0 0 60px rgba(250, 204, 21, 0.4)',
        'card': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 60px -20px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}