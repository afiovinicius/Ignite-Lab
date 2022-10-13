import { styled } from "../../styles/setitches.config";

export const StyledInputText = styled("input", {
  fontSize: "$3",
  lineHeight: "2rem",
  padding: "1.8rem 2.4rem",
  width: "fit-content",
  height: "5.5rem",
  background: "$dark",
  border: "0.1rem solid $gray_400",
  borderRadius: "0.4rem",
  transition: "all 0.3s ease-in",
  "&:hover": {
    borderColor: "$gray_200",
  },
  "&:placeholder": {
    color: "$gray_300",
  },
  "&:focus": {
    color: "$light",
    borderColor: "$green_100",
    outlineColor: "$green_100",
  },
  variants: {
    status: {
      disable: {
        cursor: "not-allowed",
        pointerEvents: "none",
        opacity: 0.5,
      },
      error: {
        color: "$red",
        borderColor: "$red",
        outlineColor: "$red",
      },
    },
    wd: {
      true: {
        width: "100%",
      },
    },
  },
});
