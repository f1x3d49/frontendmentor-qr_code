/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      design_white: "hsl(var(--color-white) / <alpha-value>",
      design_lgrey: "hsl(var(--color-light-grey) / <alpha-value>)",
      design_gblue: "hsl(var(--color-grayish-blue) / <alpha-value>)",
      design_dblue: "hsl(var(--color-dark-blue) / <alpha-value>)",
    },
    extend: {
      spacing: {
        128: "30rem",
      },
    },
  },
  plugins: [],
};
