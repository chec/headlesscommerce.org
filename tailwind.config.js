const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#17253a",
        secondary: "#2c7ea1",
        "pale-sky": "#6b7280",
        "athens-gray": "#f9fafb",
        "athens-gray-dark": "#f4f5f7",
        mirage: "#161e2e",
      },
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
  experimental: {
    experimental: "all",
  },
};
