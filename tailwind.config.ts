import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#009DDC",
      },
      container: {
        center: true, // Centers the container by default
        padding: "1rem", // Adds padding inside the container (optional)
        screens: {
          sm: "100%", // Set container width at small breakpoint
          md: "100%", // Set container width at medium breakpoint
          lg: "1024px", // Customize large breakpoint
          xl: "1238px", // Your custom size at the xl breakpoint
          "2xl": "1238px", // Keep the same custom size for 2xl as well
        },
      },
      fontFamily: {
        Gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
