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
          negro: "#111111",
          noche: "#172536",
          champagne: "#C8B99A",
          marfil: "#F2EFE7",
          oliva: "#3F4632",
          terracota: "#B65A3C",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-outfit)", "Inter", ...defaultTheme.fontFamily.sans],
      display: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
