import { Link } from "react-router-dom";
import { Container } from "../../styles/global";
import { styled } from "../../styles/setitches.config";

export const StyledFooter = styled("footer", {
  padding: "2.4rem 0rem",
  width: "100%",
  background: "$dark",
  borderTop: "0.1rem solid $gray_400",
  [`& ${Container}`]: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3.2rem",
    "@sm": {
      justifyContent: "center",
    },
  },
});

export const Copy = styled("div", {
  width: "100%",
  maxWidth: "54.6rem",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  gap: "3.2rem",
  img: {
    maxWidth: "20rem",
    height: "3.8rem",
  },
  p: {
    fontSize: "$3",
  },
  "@sm": {
    gap: "1.6rem",
    textAlign: "center",
    justifyContent: "center",
  },
});

export const LinkPolitic = styled(Link, {
  fontSize: "$3",
  transition: "all 0.3s ease-in",
  "&:hover": {
    color: "$gray_200",
    textDecoration: "underline",
  },
});
