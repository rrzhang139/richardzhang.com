module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorstainedblack: "#0a0a0a",
      },
      fontFamily: {
        text: ["'M PLUS 1p', sans-serif"],
        title: ["Crimson Text", "serif"],
        mavenp: ["Maven Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
