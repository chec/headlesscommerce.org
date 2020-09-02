const { fontFamily } = require("tailwindcss/defaultTheme");

const colors = require("./src/utils/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.js"],
  },
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    visibility: ["responsive", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
};
