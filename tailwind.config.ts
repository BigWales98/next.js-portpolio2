import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(red|green|blue|yellow|pink|gray|orange|sky|indigo|purple|teal|cyan|amber|lime|emerald|fuchsia|rose|violet|stone)-200/,
      variants: ['hover', 'focus'], // 필요 시
    },
  ],
};
export default config;
