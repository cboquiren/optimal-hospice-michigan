import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#6B4EFF",
          secondary: "#8B5CF6",
          accent: "#A78BFA",
          neutral: "#2E1065",
          "base-100": "#FFFFFF",
          "base-200": "#F5F3FF",
          "base-300": "#EDE9FE",
        },
      },
    ],
  },
};
