import React from "react";
export function Logo({ src = "assets/logo-rork.svg", width = 280, background = "transparent", padding = 0, style }) {
  return React.createElement("div", { style: { width, aspectRatio: "70 / 39", boxSizing: "border-box", padding, background, display: "grid", placeItems: "center", ...style } },
    React.createElement("img", { src, alt: "Rork Web", style: { width: "100%", height: "100%", display: "block", objectFit: "contain" } }));
}
