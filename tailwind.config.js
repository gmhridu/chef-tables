/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
      colors: {
        primary: "#0BE58A",
        primaryDark: "#150B2B",
        secondaryDark: "#150B2BB2",
      },
      fontFamily: {
        fira: {
          fontFamily: "Fira Sans",
        },
        lexend: {
          fontFamily: "Lexend",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "2rem",
          xl: "3rem",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

