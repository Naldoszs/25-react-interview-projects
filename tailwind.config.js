/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "main-black-100": "#000000",
        "main-black-90": "#000000",
        "main-black-80": "#000000",
        "main-black-70": "#000000",
        "main-black-60": "#000000",
        "main-black-50": "#000000",
        "main-black-40": "#000000",
        "main-black-30": "rgba(0,0,0,0.3)",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
