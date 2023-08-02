/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      garamond: ["EBGaramond"],
    },
    extend: {
      colors: {
        primary: "#71C9CE",
        second: "#A6E3E9",
        navbar: "#3a5f76",
        darkk: "#121063",
        bgcolor: "#3a5f73",
        icon: "#e3fdfd",
        blog: "#cbf1f5",
        footer: "#294041",
      },
      screens: {
        "2xl": "1340px",
      },
    },
  },
  plugins: [],
};
