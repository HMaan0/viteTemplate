/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme_bg_light: "#ffffff",
        theme_bg_dark: "black",
        primary_dark: "#212121",
        primary_light: "white",
        theme_secondary: "#9e2e3b",
        theme_gradient: "#606060",
      },
    },
  },
  plugins: [],
};
