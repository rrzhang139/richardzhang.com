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
        handwriting: ["Tillana, cursive"],
        name: ["Source Sans Pro", "sans-serif"],
        text: ["'M PLUS 1p', sans-serif"],
        // hind: ["Hind", "sans-serif"],
        // op: ["Overpass", "sans-serif"],
        // dosis: ["Dosis", "sans-serif"],
        title: ["Crimson Text", "serif"],
        mavenp: ["Maven Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
