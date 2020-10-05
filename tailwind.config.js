const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.tsx"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/ui")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    translate: ({ after }) => after(["group-hover"], "responsive"),
    opacity: ({ after }) => after(["group-hover"], "responsive"),
    scale: ({ after }) => after(["group-hover"], "responsive"),
  },
};
