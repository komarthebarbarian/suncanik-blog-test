/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "spring-wood": {
          DEFAULT: "#F8F5F0",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F8F5F0",
          600: "#E6DBCA",
          700: "#D4C2A3",
          800: "#C2A87D",
          900: "#B18E57",
          950: "#A1804B",
        },
        "sticky-color": {
          DEFAULT: "#fdfaf3",
        },
      },
    },
  },
  plugins: [],
};
