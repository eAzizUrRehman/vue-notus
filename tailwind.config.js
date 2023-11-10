/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MyFont: ["MyFont", "sans"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-gray": "#334155",
        "background-gray": "#475569",
        "dim-gray": "#94A3B8",
        "secondary-green": "#10B981",
        "background-green": "#F1F5F9",
        "footer-green": "#E2E8F0",
        "tertiary-white": "#ffffff",

        // docs
        "navbar-gray": "#212529",
        "navbar-text": "#AFB0B2",
        "sidebar-green": "#F5F7F9",
        "sidebar-text": "#4c555a",
        "background-white": "#ffffff",
        "center-text": "",
      },
      aspectRatio: {
        "13/10": "13 / 10",
      },
    },
  },
  plugins: [],
};
