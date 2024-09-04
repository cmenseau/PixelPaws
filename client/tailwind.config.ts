import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // https://colorhunt.co/palette/ffe9d0fffed3bbe9ffb1afff
        "pastel-orange":"#FFE9D0",
        "pastel-yellow":"#FFFED3",
        "pastel-blue":"#BBE9FF",
        "pastel-purple":"#B1AFFF",
      },
    },
  },
  plugins: [],
};
export default config;
