import React from "react";
const SIZES = { post: [1080, 1080], story: [1080, 1920] };
export function Canvas({ format = "post", scale = 0.4, background = "var(--surface-accent)", children, style }) {
  const [w, h] = SIZES[format] || SIZES.post;
  return React.createElement("div", { style: { width: w * scale, height: h * scale, flex: "none", overflow: "hidden", position: "relative", ...style } },
    React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: w, height: h, background, overflow: "hidden", transform: `scale(${scale})`, transformOrigin: "0 0" } }, children));
}
