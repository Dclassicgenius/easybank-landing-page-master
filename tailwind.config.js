/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        ff: ['"Public Sans"', "sans-serif"],
      },

      colors: {
        primary: {
          900: "hsl(233, 26%, 24%)",
          600: "hsl(136, 65%, 51%)",
          500: "hsl(192, 70%, 51%)",
        },

        neutral: {
          50: "hsl(0, 0%, 100%)",
          100: "hsl(0, 0%, 98%)",
          300: "hsl(220, 16%, 96%)",
          500: "hsl(233, 8%, 62%)",
        },
      },

      backgroundImage: (theme) => ({
        "hero-pattern-mb": "url('/build/images/bg-intro-mobile.svg')",
        "hero-pattern": "url('/build/images/bg-intro-desktop.svg')",
      }),

      backgroundPosition: {
        "top-4": "top -3.65em left 1em",
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },

      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
