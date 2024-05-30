/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
const svgToDataUri = require("mini-svg-data-uri");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#bed0ff",
        tertiary: "#151030",
        "black-100": "#262a33",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/polygon-scatter-haikei.svg')",
      },
    },
  },
  safelist: [
    "bg-red-500",
    "text-violet-400",
    "text-3xl",
    "lg:text-4xl",
    "blue-text-gradient",
    "green-text-gradient",
    "pink-text-gradient",
    "text-red-800",
    "text-cyan-400",
    "text-green-600",
    "text-pink-200",
    "text-violet-200",
    "text-red-600",
    "green-pink-gradient",
    "active:scale-95",
    "transition-all",
    "shadow-card",
    "p-[2px]",
    "rounded-3xl",
    "animate-pulse",
    "text-4xl",
    "text-gray",
    "h-[60px]",
    "w-[60px]",
    "bg-cover",
    "rounded-full",
    "black-gradient",
    "animate-spin",
    "duration-1000",
    "h-10",
    "w-10",
    "h-12",
    "px-6",
    "bg-slate-700",
    "focus:ring-2",
    "focus:ring-slate-400",
    "text-base",
    "text-white",
    "font-semibold",
    "pointer-events-auto",
    "from-[#070637]",
    "inset-x-0",
    "max-lg:w-[100dvw]",
    "top-0",
    "-translate-y-2/3",
    "bg-gradient-to-t",
    "to-[#0303037a]",
    "pointer-events-none",
    "absolute",
    "bg-[url(/blob1.svg)]",
    "bg-[url(/blob2.svg)]",
    "bg-[url(/blob3.svg)]",
    "bg-[url(/blob4.svg)]",
    "bg-[url(/blob5.svg)]",
    "bg-[url(/blob6.svg)]",
  ],

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
