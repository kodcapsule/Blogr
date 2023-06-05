/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        light_red: "hsl(356, 100%, 66%)",
        very_light_red: "hsl(355, 100%, 74%)",
        very_dark_blue: "hsl(208, 49%, 24%)",
        White: "hsl(0, 0%, 100%)",
        grayish_blue: " hsl(240, 2%, 79%)",
        very_dark_grayish_blue: "hsl(207, 13%, 34%)",
        very_dark_black_blue: " hsl(240, 10%, 16%)",
        Very_light_red: " hsl(13, 100%, 72%)",
        Light_red: "hsl(353, 100%, 62%)",
        Very_dark_gray_blue: " hsl(237, 17%, 21%)",
        Very_dark_desaturated_blue: "hsl(237, 23%, 32%)",
      },
      backgroundImage: {
        // "pattern-intro-desktop":
        //   "url('./src/assets/images/bg-pattern-intro-desktop.svg')",
        // "pattern-intro-mobile":
        //   "url('./src/assets/images/bg-pattern-intro-mobile.svg')",
        // "pattern-circles": "url('./src/assets/images/bg-pattern-circles.svg')",
      },
    },
  },
  plugins: [],
};
