import React from "react";
export function GlowHeading({ children, color = "var(--heading-on-accent)", glow = "var(--highlight)", size = 104, weight = 700, blur = 10, highlight = true, style }) {
  return React.createElement("span", { style: { position: "relative", display: "inline-block", padding: highlight ? "0.12em 0.36em" : 0, fontFamily: "var(--font-display)", fontWeight: weight, fontSize: size, lineHeight: 1, color, letterSpacing: "-0.01em", ...style } },
    highlight ? React.createElement("span", { "aria-hidden": true, style: { position: "absolute", inset: 0, background: glow, filter: `blur(${blur}px)` } }) : null,
    React.createElement("span", { style: { position: "relative" } }, children));
}
