const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      width: {
        wB: "100%",
        hr: "1.5px",
      },
      colors: {
        "light-red": "#FCF9F6",
        "footer-color": "#87A2A3",
        "road-map-color": "#034647",
        "red-bgColor": "#DE1F29",
        "aqua-color": "#034647",
        "TCard-color": "#F7F0EA",
        "hrBanner-color": "#034647",
        "employee-bgImg": "#F2EAE1",
        "employee-Color": "#FCF9F6",
        "form-color": "#034647",
        "light-blue-color": "#E4EEEF",
        "accordion-color": "#F4F4F4",
      },
      backgroundPosition: {
        "footer-img-position": "left -12% bottom -150%",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
