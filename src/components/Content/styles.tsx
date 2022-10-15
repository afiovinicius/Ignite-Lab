import { styled } from "../../styles/setitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const ContentRoom = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "3.2rem",
  ".description": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.6rem",
    width: "100%",
    maxWidth: "73.2rem",
    h2: {
      color: "$gray_100",
      fontSize: "$5",
      fontWeight: "$bd",
    },
    p: {
      color: "$gray_200",
      fontSize: "$3",
    },
  },
  ".btns_acess": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.6rem",
    minWidth: "27.2rem",
  },
  "@md": {
    flexFlow: "row wrap",
    ".description": {
      maxWidth: "none",
    },
    ".btns_acess": {
      width: "100%",
      flexDirection: "row",
    },
  },
  "@sm": {
    justifyContent: "center",
    ".description": {
      h2: {
        fontSize: "$4",
      },
      p: {
        fontSize: "$1",
      },
    },
    ".btns_acess": {
      flexFlow: "row wrap",
      width: "100%",
      minWidth: "none",
    },
  },
});

export const InforTeacher = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "2.4rem 0rem",
  gap: "1.6rem",
  width: "100%",
  ".avatar": {
    objectFit: "cover",
    width: "6.4rem",
    height: "6.4rem",
  },
  ".name_office": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.4rem",
    width: "100%",
    maxWidth: "23.2rem",
    strong: {
      color: "$gray_100",
      fontSize: "$5",
      fontWeight: "$bd",
    },
    p: {
      fontSize: "$2",
    },
  },
});

export const MaterialClass = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "3.2rem 0rem",
  gap: "3.2rem",
  width: "100%",
  "@media (max-width: 768px)": {
    flexFlow: "row wrap",
  },
});

export const Player = styled("div", {
  width: "100%",
  height: "70rem",
  padding: "2.4rem 0rem",
  iframe: {
    width: "100%",
    height: "100%",
  },
  "@sm": {
    height: "23.2rem",
  },
});

export const ContentTab = TabsPrimitive.Content;
