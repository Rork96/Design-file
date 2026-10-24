import React from "react";
const box = ({ key, ...s }) => React.createElement("div", { key, style: { position: "absolute", ...s } });
export function StoryGuides({ header = true, thirds = true }) {
  return React.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } },
    header ? [
      box({ key: 1, left: 0, top: 1, width: 517, height: 6, background: "var(--rork-slot)" }),
      box({ key: 2, left: 0, top: 7, width: 517, height: 6, background: "var(--rork-slot)" }),
      box({ key: 3, left: 0, top: 13, width: 88, height: 88, borderRadius: "50%", background: "var(--guide-avatar)" }),
      box({ key: 4, left: 0, top: 101, width: 320, height: 28, background: "var(--guide-username)" }),
      box({ key: 5, left: 0, top: 129, width: 1080, height: 1, background: "var(--guide-red)" }),
      box({ key: 6, left: 0, top: 130, width: 1, height: 1919, background: "var(--guide-red)" }),
    ] : null,
    thirds ? [
      box({ key: 7, left: 387, top: 0, width: 1, height: 1920, background: "var(--guide-orange)" }),
      box({ key: 8, left: 781, top: 0, width: 1, height: 1920, background: "var(--guide-orange)" }),
      box({ key: 9, left: 0, top: 604, width: 1080, height: 1, background: "var(--guide-white)" }),
      box({ key: 10, left: 0, top: 1301, width: 1080, height: 1, background: "var(--guide-white)" }),
    ] : null);
}
