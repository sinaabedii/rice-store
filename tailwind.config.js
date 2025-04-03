module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#F5F5DC",
        accent: "#8B4513",
        "light-cream": "#FFFDF5",
      },
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
        serif: ["IranNastaliq", "serif"],
      },
    },
  },
  plugins: [],
};
