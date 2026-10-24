import React from "react";
export function Handle({ handle = "paulrork", heart = true, color = "currentColor", size = 24, style }) {
  return React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: "0.25em", fontFamily: "var(--font-mono)", fontSize: size, lineHeight: 1, color, whiteSpace: "nowrap", ...style } },
    heart ? React.createElement("span", { "aria-hidden": true }, "\u2764\uFE0F") : null,
    React.createElement("span", null, handle));
}
