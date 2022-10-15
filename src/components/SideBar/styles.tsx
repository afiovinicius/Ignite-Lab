import { styled } from "../../styles/setitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const StyledSideBar = styled(TabsPrimitive.List, {
  flexGrow: 0,
  padding: "2.4rem",
  width: "100%",
  maxWidth: "34.8rem",
  overflow: "auto",
  background: "$gray_500",
  borderLeft: "0.1rem solid $gray_400",
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
      },
      false: {
        display: "none",
      },
    },
  },
});
