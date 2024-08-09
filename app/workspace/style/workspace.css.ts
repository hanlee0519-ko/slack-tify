import { style } from "@vanilla-extract/css";

export const workspaceContainer = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const contentContainer = style({
  display: "flex",
  flex: 1,
});

export const nav = style({
  backgroundColor: "lightsalmon",
  display: "flex",
  flex: "none",
  width: "200px",
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  padding: "20px",
  overflow: "auto",
});
