import { Container } from "../../styles/global";
import { styled } from "../../styles/setitches.config";
import { keyframes } from "@stitches/react";

const TrayLeft = keyframes({
  "0%": {
    transform: "translateX(-2rem)",
    opacity: 0.5,
  },
  "50%": {
    transform: "translateX(1rem)",
    opacity: 1,
  },
  "100%": {
    transform: "translateX(0rem)",
    opacity: 1,
  },
});

const ReactTop = keyframes({
  "0%": {
    transform: "translateY(-2rem)",
    opacity: 0.5,
  },
  "100%": {
    transform: "translateY(0rem)",
    opacity: 1,
  },
});

const CardRight = keyframes({
  "0%": {
    transform: "translateY(8rem)",
    opacity: 0.5,
  },
  "100%": {
    transform: "translateY(0rem)",
    opacity: 1,
  },
});

export const StyledHome = styled("section", {
  flex: 1,
  background: "url(/assets/bg_index.png) no-repeat center/cover",
  [`& ${Container}`]: {
    ".content": {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "8rem",
      ".text_home": {
        width: "100%",
        maxWidth: "70rem",
        ".logo_home": {
          maxWidth: "24rem",
          marginBottom: "3.2rem",
        },
        "h1, b": {
          color: "$gray_100",
          fontSize: "$6",
        },
        b: {
          color: "$blue",
        },
        p: {
          fontSize: "$3",
          color: "$gray_200",
          marginTop: "1.6rem",
        },
      },
      form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "3.2rem",
        gap: "1.6rem",
        minWidth: "36.4rem",
        background: "$gray_500",
        border: "0.1rem solid $gray_400",
        borderRadius: "0.4rem",
        p: {
          fontWeight: "$bd",
          fontSize: "$5",
          color: "$gray_100",
        },
      },
    },
    ".illust_screencode": {
      width: "100%",
      height: "65rem",
      position: "relative",
      ".tray": {
        position: "absolute",
        width: "26.4rem",
        height: "7.2rem",
        left: "0rem",
        bottom: "25.3rem",
        opacity: 0,
        animation: `${TrayLeft} 1s ease-in forwards`,
        animationDelay: "2s",
      },
      ".card_react": {
        position: "absolute",
        width: "11.1rem",
        height: "10.5rem",
        right: "34rem",
        top: "11.8rem",
        animation: `${ReactTop} 1s ease-in forwards`,
        animationDelay: "0.8s",
      },
      ".card_person": {
        position: "absolute",
        width: "23.2rem",
        height: "25.6rem",
        right: "0.2rem",
        bottom: "11.6rem",
        opacity: 0,
        animation: `${CardRight} 1s ease-in forwards`,
        animationDelay: "2s",
      },
      ".screen": {
        objectFit: "cover",
      },
    },
  },
  "@md": {
    [`& ${Container}`]: {
      ".content": {
        justifyContent: "center",
        gap: "3.2rem",
        ".text_home": {
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      },
      ".illust_screencode": {
        height: "38.6rem",
        ".tray": {
          width: "8rem",
          height: "2.4rem",
          left: "3.6rem",
          bottom: "11.6rem",
        },
        ".card_react": {
          width: "3.2rem",
          height: "3.2rem",
          right: "22rem",
          top: "8rem",
        },
        ".card_person": {
          width: "6.8rem",
          height: "7.6rem",
          right: "6rem",
          bottom: "10rem",
        },
      },
    },
  },
  "@sm": {
    [`& ${Container}`]: {
      ".content": {
        ".text_home": {
          b: {
            fontSize: "3.6rem",
          },
          p: {
            fontSize: "$2",
          },
        },
        form: {
          minWidth: "100%",
          padding: "2.4rem",
          alignItems: "center",
          p: {
            fontSize: "$4",
          },
        },
      },
      ".illust_screencode": {
        height: "17.6rem",
        ".tray": {
          left: "0.6rem",
          bottom: "6.4rem",
        },
        ".card_react": {
          right: "10rem",
          top: "3rem",
        },
        ".card_person": {
          right: "1.2rem",
          bottom: "2.4rem",
        },
      },
    },
  },
});
