import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        border: "var(--border)"
      },
      fontFamily: {
        sans: ["var(--font-choppy-loose)", "cursive"],
        serif: ["var(--font-choppy-loose)", "cursive"]
      },
      backgroundImage: {
        "radial-texture":
          "radial-gradient(circle at 20% 20%, rgba(173, 153, 123, 0.16), transparent 36%), radial-gradient(circle at 80% 0%, rgba(109, 122, 91, 0.12), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
