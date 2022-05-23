const path = require("path");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/forms")],
};
