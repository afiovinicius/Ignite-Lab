import { styled } from "../../styles/setitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const StyledCardTab = styled(TabsPrimitive.Trigger, {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.8rem",
  width: "100%",
  transition: "all 0.3s ease-in",
  ".infor_card": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "1.6rem",
    gap: "1.6rem",
    width: "100%",
    background: "$gray_500 ",
    border: "0.1rem solid $gray_400",
    borderRadius: "0.4rem",
    ".text_infor": {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "2.4rem",
      ".name_stats": {
        strong: {
          fontSize: "$1",
          fontWeight: "$sb",
          marginLeft: "0.8rem",
        },
      },
      ".card_stats": {
        fontSize: "$1",
        fontWeight: "$bd",
        textTransform: "uppercase",
        padding: "0.2rem 0.8rem",
        borderRadius: "0.4rem",
      },
    },
    h4: {
      color: "$gray_200",
      fontWeight: "$bd",
      textAlign: "left",
    },
  },
  '&[data-state="active"]': {
    ".infor_card": {
      background: "$green_100",
      position: "relative",
      ".text_infor": {
        ".name_stats": {
          strong: {
            color: "$light",
          },
        },
        ".card_stats": {
          color: "$light",
          border: "0.1rem solid $light",
        },
      },
      h4: {
        color: "$light",
      },
      "&::after": {
        content: "",
        position: "absolute",
        width: "1.6rem",
        height: "1.6rem",
        left: "-1rem",
        top: "50%",
        background: "$green_100",
        borderRadius: "0.2rem",
        transform: "rotate(45deg) translateY(-50%)",
      },
    },
  },
  '&[data-state="inactive"]': {
    ".infor_card": {
      ".text_infor": {
        ".name_stats": {
          strong: {
            color: "$blue",
          },
        },
        ".card_stats": {
          color: "$light",
          border: "0.1rem solid $green_100",
        },
      },
      "&:hover": {
        border: "0.1rem solid $green_300",
      },
    },
  },
  variants: {
    isblocked: {
      true: {
        pointerEvents: "none",
        '&[data-state="inactive"]': {
          ".infor_card": {
            ".text_infor": {
              ".name_stats": {
                strong: {
                  color: "$warning",
                },
              },
              ".card_stats": {
                color: "$warning",
                border: "0.1rem solid $warning",
              },
            },
          },
        },
      },
    },
  },
});
