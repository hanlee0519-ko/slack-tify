import { style } from "@vanilla-extract/css";

export const navContainer = style({
  display: "flex",
  flexDirection: "column",
  padding: "5px",
  marginTop: "20px",
});

export const navItem = style({
  color: "white",
  marginTop: "20px",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
  selectors: {
    "&:hover": {
      color: "black",
    },
  },
});

export const activeNavItem = style({
  color: "black",
  marginTop: "20px",
  textDecoration: "none",
  fontSize: "25px",
  fontWeight: "bold",
  backgroundColor: "lightcoral",
  padding: "5px",
});
