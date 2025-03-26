module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colorstainedblack: "#0a0a0a",
        midnight: "#121f30", // Deep blueish midnight for dark mode
        eggshell: "#f5f5f0", // Soft eggshell beige for light mode
        darkNavy: "#0a1525", // Darker navy blue for secondary elements in dark mode
      },
      fontFamily: {
        text: ["Helvetica", "sans-serif"],
        title: ["Crimson Text", "serif"],
        mavenp: ["Maven Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
