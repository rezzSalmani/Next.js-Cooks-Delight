import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0,625rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-dark": "#262522",
        "primary-green": "#9FDC26",
        "primary-orange": "#F29C33",
        "primary-red": "#EE6352",
        "primary-lightBlue": "#C4E5FC",
        "primary-light": "#FFFBF2",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        lato: ["var(--font-lato)"],
        roboto: ["var(--font-roboto)"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {
        "xs": "480px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
      },
    },
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
export default config;
