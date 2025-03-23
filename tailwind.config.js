// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Define custom colors for light and dark mode
        background: {
          light: "#f9f9f9", // Light mode background color
          dark: "#1a202c", // Dark mode background color
        },
        text: {
          light: "#1a202c", // Light mode text color
          dark: "#f9f9f9", // Dark mode text color
        },
      },
    },
  },
  plugins: [],
};
