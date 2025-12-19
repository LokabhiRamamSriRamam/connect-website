/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        "background-light": "#F8FAFC",
        "background-dark": "#0B1120",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Sora", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      // --- Animation Configuration Added Below ---
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

