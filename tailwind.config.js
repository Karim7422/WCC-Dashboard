/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./index.html",
    "./pages/projects.html",
    "./pages/blogs.html",
    "./pages/users.html",
    "./Authentication/login.html",
    "./src/js/main.js",
    "./src/js/projects.js",
    "./src/js/users.js",
    "./src/js/blogs.js",
    "./Authentication/JS/validation.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      Rubik: ["Rubik"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
