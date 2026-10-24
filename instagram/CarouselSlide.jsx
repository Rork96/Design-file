import React from "react";
import { Canvas } from "../../components/canvas/Canvas.jsx";
import { Handle } from "../../components/brand/Handle.jsx";
import { GlowHeading } from "../../components/type/GlowHeading.jsx";
import { Bullet } from "../../components/type/Bullet.jsx";

const THEMES = {
  blue: { bg: "var(--rork-blue)", fg: "var(--rork-lime)", title: "var(--rork-white)", mark: "var(--rork-lime)" },
  lime: { bg: "var(--rork-lime-2)", fg: "var(--rork-ink)", title: "var(--rork-violet-2)", mark: "var(--rork-violet-2)" },
};
export function CarouselSlide({ kind = "cover", theme = "blue", index = 1, total = 5, title = "5 причин вести профіль", body = "Коротке пояснення в одну-дві стрічки.", number = 1, scale = 0.4 }) {
  const t = THEMES[theme] || THEMES.blue;
  const counter = <div style={{ position: "absolute", right: 76, top: 60, fontFamily: "var(--font-mono)", fontSize: 24, color: t.fg }}>{index}/{total}</div>;
  return (
    <Canvas format="post" scale={scale} background={t.bg}>
      {counter}
      {kind === "cover" && <>
        <div style={{ position: "absolute", left: 76, top: 200, width: 900, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 112, lineHeight: "118px", letterSpacing: "-0.01em", color: t.title }}>{title}</div>
        <div style={{ position: "absolute", left: 76, bottom: 120, fontFamily: "var(--font-geometric)", fontWeight: 500, fontSize: 40, color: t.fg }}>гортай →</div>
      </>}
      {kind === "point" && <>
        <div style={{ position: "absolute", left: 76, top: 150, fontFamily: "var(--font-label)", fontWeight: 200, fontSize: 280, lineHeight: 1, letterSpacing: "-0.02em", color: t.mark }}>{String(number).padStart(2, "0")}</div>
        <Bullet color={t.mark} size={36} style={{ position: "absolute", left: 76, top: 560 }} />
        <div style={{ position: "absolute", left: 144, top: 530, width: 860, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 80, lineHeight: "86px", color: t.title }}>{title}</div>
        <div style={{ position: "absolute", left: 144, top: 760, width: 800, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 40, lineHeight: "50px", color: t.fg }}>{body}</div>
      </>}
      {kind === "end" && <>
        <GlowHeading size={104} highlight={theme === "blue"} color={theme === "blue" ? "var(--rork-blue)" : "var(--heading-on-lime)"} style={{ position: "absolute", left: 76, top: 250 }}>{title}</GlowHeading>
        <div style={{ position: "absolute", left: 76, top: 520, width: 860, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 56, lineHeight: "64px", color: t.fg }}>{body}</div>
      </>}
      <Handle color={t.fg} size={24} style={{ position: "absolute", left: 76, bottom: 50 }} />
    </Canvas>
  );
}
