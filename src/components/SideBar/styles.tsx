import { styled } from "../../styles/setitches.config";
import { keyframes } from "@stitches/react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const enablebar = keyframes({
  "0%": {
    transform: "translateY(-2rem)",
    opacity: 0.5,
  },
  "100%": {
    transform: "translateY(0rem)",
    opacity: 1,
  },
});

const disablebar = keyframes({
  "0%": {
    transform: "translateY(0rem)",
    opacity: 1,
  },
  "50%": {
    transform: "translateY(-2rem)",
    opacity: 0.5,
  },
  "100%": {
    transform: "translateY(-2rem)",
    display: "none",
    opacity: 0,
    zIndex: "-999",
  },
});

export const StyledSideBar = styled(TabsPrimitive.List, {
  flexGrow: 0,
  padding: "2.4rem",
  width: "100%",
  maxWidth: "34.8rem",
  overflow: "auto",
  background: "$gray_500",
  borderLeft: "0.1rem solid $gray_400",
  transition: "all 0.3s ease-in",
  ".title": {
    padding: "0rem 0rem 1.6rem",
    width: "100%",
    borderBottom: "0.1rem solid $gray_400",
    h2: {
      color: "$light",
      fontSize: "$5",
      fontWeight: "$bd",
      textAlign: "center",
    },
  },
  variants: {
    showbar: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3.2rem",
        "@md": {
          position: "absolute",
          top: 0,
          maxWidth: "none",
          height: "100vh",
          animation: `${enablebar} 0.3s ease-in forwards`,
        },
      },
      false: {
        animation: `${disablebar} 0.3s ease-in forwards`,
      },
    },
  },
});
