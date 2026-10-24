import React from "react";
import { Canvas } from "../../components/canvas/Canvas.jsx";
import { Bullet } from "../../components/type/Bullet.jsx";

const THEMES = {
  blue: ["var(--rork-blue)", "var(--rork-lime)"],
  lime: ["var(--rork-lime-2)", "var(--rork-violet-2)"],
  indigo: ["var(--rork-indigo)", "var(--rork-white)"],
  ink: ["var(--rork-ink)", "var(--rork-lime)"],
};
export function HighlightCover({ label = "Кейси", theme = "blue", mark = "bullet", scale = 0.16, showCrop = false }) {
  const [bg, fg] = THEMES[theme] || THEMES.blue;
  return (
    <Canvas format="story" scale={scale} background={bg}>
      <div style={{ position: "absolute", left: 0, top: 420, width: 1080, height: 1080, display: "grid", placeItems: "center" }}>
        {mark === "bullet"
          ? <Bullet color={fg} size={420} style={{ borderWidth: 56 }} />
          : <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 520, lineHeight: 1, color: fg }}>{mark}</div>}
      </div>
      <div style={{ position: "absolute", left: 0, top: 1500, width: 1080, textAlign: "center", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 64, color: fg }}>{label}</div>
      {showCrop && <div style={{ position: "absolute", left: 90, top: 450, width: 900, height: 900, borderRadius: "50%", border: "4px dashed var(--guide-red)", boxSizing: "border-box" }} />}
    </Canvas>
  );
}
