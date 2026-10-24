import React from "react";
import { Bullet } from "./Bullet.jsx";
export function BulletList({ items = [], color = "var(--text-on-lime)", bulletColor = "var(--bullet-on-lime)", size = 52, bulletSize = 36, gap = 64, maxWidth = 640, style }) {
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap, ...style } },
    items.map((t, i) => React.createElement("div", { key: i, style: { display: "flex", gap: 28, alignItems: "flex-start" } },
      React.createElement(Bullet, { color: bulletColor, size: bulletSize, style: { marginTop: size * 0.12 } }),
      React.createElement("div", { style: { fontFamily: "var(--font-display)", fontWeight: 400, fontSize: size, lineHeight: 1.02, color, maxWidth, textWrap: "pretty" } }, t))));
}
