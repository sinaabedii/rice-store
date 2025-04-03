/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',     // سبز روشن
        secondary: '#F5F5DC',   // کرم
        accent: '#8B4513',      // قهوه‌ای روشن
        'light-cream': '#FFFDF5',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
        serif: ['IranNastaliq', 'serif'],
      },
    },
  },
  plugins: [],
}