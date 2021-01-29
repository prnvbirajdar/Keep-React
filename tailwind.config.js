module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        background: "#202124",
      }),
      textColor: (theme) => theme("colors"),
      textColor: {
        offwhite: "#e1e1e2",
      },
      colors: {
        "accent-1": "#333",
      },
      minHeight: {
        10: "10rem",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        list: "repeat(auto-fit, minmax(270px, 1fr))",
      },
      fontFamily: {
        roboto: '"Roboto",Helvetica, Arial, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
