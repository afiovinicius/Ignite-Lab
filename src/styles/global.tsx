import { globalCss, styled } from "./setitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    border: "none",
    listStyle: "none",
    textDecoration: "none",
    boxSizing: "border-box",
    fontSize: "$3",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "160%",
    fontWeight: "$rg",
    color: "$gray_300",
  },

  "html, body": {
    fontSize: "$0",
    background: "$dark",
    textRendering: "optimizeLegibility",
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
    scrollbarColor: "$green_300",

    "&::-webkit-scrollbar": {
      width: "0.4rem",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "$green_300 ",
      borderRadius: "2rem",
    },
  },

  "#root": {
    minHeight: "100vh",
  },

  img: {
    display: "block",
    width: "100%",
  },

  "a, button": {
    cursor: "pointer",
    background: "transparent",
  },
});

export const Container = styled("div", {
  flex: 1,
  margin: "0 auto",
  width: "100%",
  maxWidth: "126.4rem",
  padding: "0rem 2.4rem",
  variants: {
    Board: {
      true: {
        maxWidth: "none",
      },
    },
  },
});
