/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        navbarDesktop: "url('/images/desktop-image-hero-1.jpg')",
        navbarMobile: "url('/images/mobile-image-hero-1.jpg')",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
