import React from "react";
export function SwatchTile({ color = "var(--rork-indigo)", size = 200, stroke = 24, frame = "var(--frame-stroke)", style }) {
  return React.createElement("div", { style: { width: size, height: size, background: color, boxShadow: `0 0 0 ${stroke}px ${frame}`, margin: stroke, flex: "none", ...style } });
}
