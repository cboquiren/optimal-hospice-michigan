import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#FBECFA",
        "bg-med": "#F7EEF7",
        "bg-dark": "#F3DAF2",
        "text-primary": "#451E43",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        // myTheme: {
        //   primary: "#6B4EFF",
        //   secondary: "#8B5CF6",
        //   accent: "#A78BFA",
        //   neutral: "#2E1065",
        //   "base-100": "#FFFFFF",
        //   "base-200": "#F5F3FF",
        //   "base-300": "#EDE9FE",
        // },
        myTheme: {
          primary: "#933A8E",
          secondary: "#C9A3C7",
          accent: "#8B5CF6",
          neutral: "#A24FA0",
          "base-100": "#FBF9FB",
          "base-200": "#F4E6F1",
          "base-300": "#DDD4DA",
        },
      },
    ],
  },
};
