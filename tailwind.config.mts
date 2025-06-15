import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      // Color palette
      colors: {
        blue: "#1fb6ff",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        black: "#111",
        white: "#fff",
        accent: "#ffc82c",
        "card-bg": "#1a1a1a",
        "card-bg-hover": "#232323",
        "red-dark": "darkred",
      },
      // Font sizes
      fontSize: {
        base: "18px", // Main body text
        md: "18px", // Medium text
        lg: "40px", // Large text
      },
      // Breakpoints
      screens: {
        md: "768px",
        lg: "1024px",
      },
      // Spacing utilities
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      // Border radius utilities
      borderRadius: {
        "4xl": "2rem",
      },
      // Font family
      fontFamily: {
        mono: ['"Courier New"', "Courier", "FreeMono", "monospace"],
      },
    },
  },
  darkMode: "class",
};

export default config;
