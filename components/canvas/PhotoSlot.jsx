import React from "react";
export function PhotoSlot({ x = 0, y = 0, w = 140, h = 160, src, label, style }) {
  return React.createElement("div", { style: { position: "absolute", left: x, top: y, width: w, height: h, background: src ? `center / cover no-repeat url(${src})` : "var(--rork-slot)", display: "flex", alignItems: "flex-end", padding: label ? 8 : 0, boxSizing: "border-box", fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--rork-ink)", ...style } }, src ? null : label);
}
