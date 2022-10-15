import { styled } from "../../styles/setitches.config";

export const StyledButtons = styled("a", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1.6rem 2.4rem",
  width: "fit-content",
  gap: "0.8rem",
  borderRadius: "0.4rem",
  fontSize: "$2",
  fontWeight: "$bd",
  textTransform: "uppercase",
  overflow: "hidden",
  variants: {
    styles: {
      solid: {
        color: "$light",
        background: "$green_200",
        transition: "all 0.3s ease-in",
        svg: {
          fill: "$light",
          path: {
            stroke: "$light",
          },
          polygon: {
            stroke: "$light",
          },
        },
        "&:hover": {
          transition: "all 0.3s ease-in",
          background: "$green_300",
        },
      },
      outline: {
        color: "$blue",
        border: "0.1rem solid $blue",
        transition: "all 0.3s ease-in",
        svg: {
          fill: "$blue",
          path: {
            stroke: "$blue",
          },
          polygon: {
            stroke: "$blue",
          },
        },
        "&:hover": {
          color: "$dark",
          transition: "all 0.3s ease-in",
          background: "$blue",
          svg: {
            fill: "$dark",
            path: {
              stroke: "$dark",
            },
            polygon: {
              stroke: "$dark",
              transition: "all 0.3s ease-in",
            },
          },
        },
      },
      card: {
        textTransform: "none",
        width: "100%",
        maxWidth: "50.2rem",
        padding: "0",
        gap: "0",
        ".icon_card": {
          background: "$green_200",
          padding: "4.8rem 2.4rem",
          alignSelf: "stretch",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".content_button": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "2.4rem",
          gap: "6.4rem",
          background: "$gray_500",
          transition: "all 0.3s ease-in",
          alignSelf: "stretch",
          ".text_button": {
            width: "fit-content",
            textAlign: "left",
            strong: {
              fontSize: "$5",
              fontWeight: "$bd",
              color: "$gray_100",
            },
            p: {
              color: "$gray_100",
              fontSize: "$2",
              marginTop: "0.8rem",
            },
          },
          svg: {
            transition: "all 0.3s ease-in",
          },
        },
        "&:hover": {
          ".content_button": {
            background: "$gray_400",
            transition: "all 0.3s ease-in",
            svg: {
              transform: "translateX(-0.8rem)",
              transition: "all 0.3s ease-in",
            },
          },
        },
        "@sm": {
          ".content_button": {
            padding: "1.6rem",
            gap: "0.8rem",
          },
        },
      },
    },
    wd: {
      true: {
        width: "100%",
      },
    },
  },
});
