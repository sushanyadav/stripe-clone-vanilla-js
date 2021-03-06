module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./dist/*.html", "src/index.html", "src/index.js", "src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2400px",
      },
      colors: {
        "light-gray": "#f6f9fc",
        dark: "#0a2540",
        primary: "#635bff",
        accent: "#00d4ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
