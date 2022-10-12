import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      //Brand
      green_100: "hsla(162, 100%, 35%, 1)",
      green_200: "hsla(162, 100%, 26%, 1)",
      green_300: "hsla(162, 98%, 19%, 1)",
      //Support
      blue: "hsla(196, 88%, 74%, 1)",
      warning: "hsla(32, 96%, 64%, 1)",
      red: "hsla(355, 91%, 66%, 1)",
      //Pattern
      light: "hsla(0, 0%, 100%, 1)",
      dark: "hsla(240, 5%, 4%, 1)",
      //Gray
      gray_100: "hsla(240, 9%, 89%, 1)",
      gray_200: "hsla(240, 7%, 78%, 1)",
      gray_300: "hsla(240, 6%, 58%, 1)",
      gray_400: "hsla(240, 6%, 21%, 1)",
      gray_500: "hsla(240, 5%, 7%, 1)",
    },
    fontSizes: {
      0: "62.5%",
      1: "1.2rem",
      2: "1.4rem",
      3: "1.6rem",
      4: "1.8rem",
      5: "2.4rem",
      6: "4rem",
    },
    fontWeights: {
      rg: 400,
      sb: 600,
      bd: 700,
    },
  },
  media: {
    sm: "(max-width: 60rem)",
    lg: "(max-width: 120rem)",
  },
});
