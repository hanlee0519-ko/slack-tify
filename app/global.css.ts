import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  height: "100%",
  boxSizing: "border-box",
});

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const globalTitle = style({
  height: "100px",
  width: "100%",
  backgroundColor: "gray",
  textAlign: "center",
  color: "white",
  fontWeight: "bolder",
  margin: 0,
});

export const globalContent = style({
  display: "flex",
  flex: 1,
});

export const globalNav = style({
  backgroundColor: "salmon",
  width: "100px",
  display: "flex",
  flex: "none",
  flexDirection: "column",
  paddingLeft: "10px",
});

export const globalMain = style({
  display: "flex",
  flex: 1,
  overflow: "auto",
});

export const globalItem = style({
  color: "white",
  textDecoration: "none",
  marginTop: "40px",
  fontSize: "20px",
  selectors: {
    "&:hover": {
      color: "black",
    },
  },
});
