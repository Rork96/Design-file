import React from "react";
import { Canvas } from "../../components/canvas/Canvas.jsx";
import { Handle } from "../../components/brand/Handle.jsx";

const body = { fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--rork-white)" };
export function CasePost({ variant = "cover", scale = 0.4 }) {
  const frame = { position: "absolute", left: 76, top: 76, width: 928, height: 632, border: "1px solid var(--rork-periwinkle)" };
  return (
    <Canvas format="post" scale={scale} background="var(--rork-blue)">
      <div style={{ position: "absolute", top: 36, left: 0, width: 1080, textAlign: "center", fontFamily: "var(--font-display)", fontSize: 24, color: "var(--rork-white)" }}>inst: <span style={{ color: "var(--rork-lime)" }}>rork_paul</span></div>
      <div style={frame}>
        {variant === "cover" && <div style={{ ...body, textAlign: "center", fontSize: 48, lineHeight: "64px", marginTop: 56 }}>WROCLAW<br />7 Днів</div>}
        {variant === "photo" && <div style={{ ...body, fontSize: 52, lineHeight: "62px", position: "absolute", left: 40, top: 40, width: 440 }}>Покупець знайшовся на 7 день</div>}
        {variant === "cover" && <div style={{ position: "absolute", left: 180, top: 240, width: 560, height: 280, border: "2px solid var(--rork-white)", display: "grid", placeItems: "end center", fontFamily: "var(--font-label)", fontWeight: 200, fontSize: 36, color: "var(--rork-white)", paddingBottom: 30 }}>FOODTRACK</div>}
        {variant === "table" && <div style={{ position: "absolute", left: 8, top: 8, width: 912, height: 200, background: "var(--rork-white)", color: "var(--rork-ink)", fontFamily: "var(--font-geometric)", fontWeight: 500, fontSize: 18, padding: 14, boxSizing: "border-box" }}>Охват · Сумма затрат · Клики · CTR · Цена за клик</div>}
        {variant === "table" && <div style={{ ...body, position: "absolute", left: 8, top: 224, fontSize: 21, lineHeight: "30px", width: 900 }}><span style={{ color: "var(--rork-lime)" }}>Результат (7 днів)</span><br />Охват - 7 598<br /><span style={{ color: "var(--rork-lime)" }}>Витрачено</span> - 141,13 зл (31$)<br />Потенційні клієнти ( цільові) +11</div>}
        {variant === "photo" && <div style={{ position: "absolute", left: 40, top: 270, width: 340, height: 330, background: "var(--rork-slot)" }} />}
        {variant === "photo" && <div style={{ position: "absolute", left: 540, top: 20, width: 360, height: 590, background: "var(--rork-slot)" }} />}
      </div>
      <div style={{ position: "absolute", left: 76, top: 794, fontFamily: "var(--font-geometric)", fontWeight: 500, fontSize: 52, lineHeight: 1, color: "var(--rork-white)" }}>Кейс «<span style={{ color: "var(--rork-lime)" }}>7zupiburger</span>»</div>
      <div style={{ position: "absolute", left: 76, top: 858, fontFamily: "var(--font-label)", fontWeight: 200, fontSize: 52, lineHeight: 1, color: "var(--rork-periwinkle)" }}>2022</div>
      <div style={{ position: "absolute", left: 76, top: 954, fontFamily: "var(--font-display)", fontSize: 20, color: "var(--rork-white)" }}>GASTRONOMY</div>
      {variant !== "table" && <div style={{ position: "absolute", right: 76, top: 810, fontFamily: "var(--font-display)", fontSize: 20, color: "var(--rork-white)" }}>гортай →</div>}
      <div style={{ position: "absolute", right: 76, top: 944, fontFamily: "var(--font-label)", fontWeight: 200, fontSize: 20, lineHeight: "26px", color: "var(--rork-white)", textAlign: "right" }}>Paul<br />Rork</div>
    </Canvas>
  );
}
