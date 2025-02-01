// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // remove references to 'app/**/*' if you had them
  ],
  theme: {
    extend: {
      fontFamily: {
        "unna": ["Unna", "serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
