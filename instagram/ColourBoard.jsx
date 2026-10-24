import React from "react";
import { StoryGuides } from "../../components/canvas/StoryGuides.jsx";
import { SwatchTile } from "../../components/canvas/SwatchTile.jsx";

const label = { position: "absolute", left: 104, fontSize: 72, lineHeight: "100px", letterSpacing: "-0.020em", textTransform: "uppercase", whiteSpace: "nowrap" };
export function ColourBoard({ scale = 0.24, guides = true }) {
  const sq = (x, y, c) => <SwatchTile color={c} style={{ position: "absolute", left: x, top: y, margin: 0 }} />;
  return (
    <div style={{ width: 2226 * scale, height: 2639 * scale, overflow: "hidden", flex: "none" }}>
      <div style={{ position: "relative", width: 2226, height: 2639, background: "var(--rork-white)", transform: `scale(${scale})`, transformOrigin: "0 0" }}>
        <div style={{ position: "absolute", left: 896, top: 327, width: 1080, height: 1920, overflow: "hidden", background: "var(--rork-indigo)" }}>{guides && <StoryGuides />}</div>
        {sq(154, 844, "var(--rork-indigo)")}{sq(454, 844, "var(--rork-blue-deep)")}
        {sq(154, 1144, "var(--rork-ink)")}{sq(454, 1144, "var(--rork-paper)")}
        <div style={{ ...label, top: 1530, fontFamily: "var(--font-label)", fontWeight: 200, color: "var(--rork-ink)" }}>Ахроматичні</div>
        <div style={{ ...label, top: 1680, fontFamily: "var(--font-geometric)", fontWeight: 500, fontSize: 96, color: "var(--rork-blue-ink)" }}>Акцент</div>
        <div style={{ ...label, top: 1820, fontFamily: "var(--font-condensed)", fontWeight: 300, fontSize: 96, color: "var(--rork-ink)" }}><span style={{ color: "var(--rork-indigo)" }}>Додатковий</span> колір</div>
      </div>
    </div>
  );
}
