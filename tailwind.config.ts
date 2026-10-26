import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        perez: {
          negro: "#161616",
          noche: "#172536",
          champagne: "#C9BBA0",
          arena: "#F2EFE7",
          marfil: "#F2EFE7",
          oliva: "#5C574C",
          terracota: "#B65A3C",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-poppins)", "Inter", ...defaultTheme.fontFamily.sans],
      display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
