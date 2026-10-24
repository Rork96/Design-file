import React from "react";
export function Bullet({ color = "currentColor", size = 36, style }) {
  const stroke = Math.max(2, Math.round(size * 0.14));
  return React.createElement("span", { "aria-hidden": true, style: { width: size, height: size, flex: "none", boxSizing: "border-box", border: `${stroke}px solid ${color}`, display: "grid", placeItems: "center", ...style } },
    React.createElement("span", { style: { width: Math.round(size * 0.36), height: Math.round(size * 0.36), background: color } }));
}
