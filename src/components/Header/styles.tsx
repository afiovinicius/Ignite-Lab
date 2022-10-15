import * as TogglePrimitive from "@radix-ui/react-toggle";
import { styled } from "../../styles/setitches.config";
import { Link } from "react-router-dom";
import { Container } from "../../styles/global";

export const StyledHeader = styled("header", {
  padding: "2.4rem 0rem",
  width: "100%",
  background: "$gray_500",
  borderBottom: "0.1rem solid $gray_400",
  [`& ${Container}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "3.2rem",
    "@sm": {
      justifyContent: "space-between",
    },
  },
});

export const Logo = styled(Link, {
  width: "100%",
  transition: "all 0.3s ease-in",
  "&:hover": {
    opacity: 0.8,
  },
  variants: {
    sizes: {
      large: {
        maxWidth: "24rem",
        height: "3.4rem",
      },
      small: {
        maxWidth: "17rem",
        height: "2.4rem",
      },
    },
  },
});

export const ButtonHamburguer = styled("div", {
  position: "relative",
  width: "3.2rem",
  height: "3.2rem",
  transition: "all 0.3s ease-in",
  span: {
    position: "absolute",
    left: "calc(50% - 2.2rem/2)",
    top: "calc(50% - 0.2rem/2)",
    width: "2.2rem",
    height: "0.2rem",
    background: "$blue",
    borderRadius: "5rem",
    transition: "all 0.3s ease-in",
  },
  "&::before": {
    content: "",
    position: "absolute",
    width: "2.2rem",
    height: "0.2rem",
    left: "calc(50% - 2.2rem/2)",
    top: "0.8rem",
    background: "$blue",
    transition: "all 0.3s ease-in",
  },
  "&::after": {
    content: "",
    position: "absolute",
    width: "2.2rem",
    height: "0.2rem",
    left: "calc(50% - 2.2rem/2)",
    bottom: "0.8rem",
    background: "$blue",
    transition: "all 0.3s ease-in",
  },
});

export const StyledToggle = styled(TogglePrimitive.Root, {
  color: "$gray_100",
  fontSize: "$2",
  display: "none",
  alignItems: "center",
  gap: "0.8rem",
  transition: "all 0.3s ease-in",
  "&:hover": {
    [`& ${ButtonHamburguer}`]: {
      background: "rgba(0, 179, 126, 0.16)",
      borderRadius: "0.8rem",
    },
  },
  '&[data-state="on"]': {
    [`& ${ButtonHamburguer}`]: {
      background: "rgba(0, 179, 126, 0.16)",
      borderRadius: "0.8rem",
      span: {
        width: 0,
        opacity: 0,
        transition: "all 0.3s ease-in",
      },
      "&::before": {
        top: "calc(50% - 0.2rem/2)",
        transform: "rotate(45deg)",
        transition: "all 0.3s ease-in",
      },
      "&::after": {
        bottom: "calc(50% - 0.2rem/2)",
        transform: "rotate(-45deg)",
        transition: "all 0.3s ease-in",
      },
    },
  },
  "@sm": {
    display: "flex",
  },
});

export const MobileToggle = StyledToggle;
