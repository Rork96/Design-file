import React from "react";
import { Canvas } from "../../components/canvas/Canvas.jsx";

const BLUE = "var(--rork-blue)";
const bars = [3,1,2,1,4,1,1,3,2,1,5,1,2,2,1,3,1,1,4,2,1,2,3,1,1,5,1,2,1,3,2,1,4,1,2,1,1,3,2,4,1,2,1,3,1,2,5,1,1,2,3,1,2,1,4,1,2,3];
export function WroclawPost({ scale = 0.4 }) {
  const t = (s) => ({ position: "absolute", whiteSpace: "nowrap", color: BLUE, ...s });
  let x = 0;
  return (
    <Canvas format="post" scale={scale} background="var(--rork-navy)">
      <div style={{ position: "absolute", left: 50, top: 114, width: 980, height: 672, boxShadow: "inset 0 0 0 1px var(--rork-navy-line)" }} />
      <div style={{ position: "absolute", left: 112, top: 159, width: 504, height: 539, borderRadius: 8, boxShadow: "35px 35px 35px 0 rgba(0,0,0,0.3)" }} />
      <div style={{ position: "absolute", left: 158, top: 258, width: 338, height: 402, background: "var(--rork-slot)", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 14 }}>image 17</div>
      <div style={{ position: "absolute", left: 122, top: 235, width: 407, height: 459, background: "rgba(48,58,245,0.3)" }} />
      <div style={t({ left: 159, top: 124, fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: 24, lineHeight: "32px" })}>WROCŁAW - WROCŁAW - WROCŁAW</div>
      <div style={t({ left: 667, top: 159, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 20, lineHeight: "100px", letterSpacing: "-0.035em" })}>28 August 2018 - 2 December 2022</div>
      <div style={t({ left: 667, top: 245, fontFamily: "var(--font-script)", fontSize: 96, lineHeight: "100px", letterSpacing: "-0.035em" })}>Paul Rork</div>
      <div style={t({ left: 667, top: 390, fontFamily: "var(--font-label)", fontWeight: 200, fontSize: 24, lineHeight: "32px" })}>Lived in <span style={{ color: "var(--rork-lime)", fontFamily: "var(--font-display)", fontWeight: 400, marginLeft: 8 }}>Poland</span></div>
      <div style={t({ left: 667, top: 433, fontFamily: "var(--font-label)", fontStyle: "italic", fontWeight: 200, fontSize: 20, lineHeight: "32px" })}>LIFE TIME - 4 YEARS</div>
      <div style={{ position: "absolute", left: 667, top: 477, width: 298, height: 1, background: BLUE }} />
      <div style={{ position: "absolute", left: 666, top: 534, width: 259, height: 135, display: "flex", alignItems: "stretch", gap: 0 }}>
        {bars.map((w, i) => <div key={i} style={{ width: w * 2.2, marginRight: 2.2 * (i % 3 === 0 ? 2 : 1), background: BLUE, flex: "none" }} />)}
      </div>
      <div style={t({ left: 50, top: 835, fontFamily: "var(--font-title-condensed)", fontSize: 58, lineHeight: "60px" })}>The Most Longest life in one Country</div>
      <div style={t({ left: 50, top: 900, fontFamily: "var(--font-label)", fontWeight: 200, fontSize: 58, lineHeight: "60px" })}>2022</div>
      <div style={t({ left: 50, top: 978, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, lineHeight: "28px" })}>LIFESTYLE</div>
      <div style={t({ left: 50, top: 1008, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 18, lineHeight: "22px" })}>Illustration by Paul Rork for HIMself</div>
      <div style={t({ right: 50, top: 1000, fontFamily: "var(--font-title-condensed)", fontSize: 24, lineHeight: 0.924, letterSpacing: "-0.108em", textAlign: "right" })}>Paul<br />Rork</div>
    </Canvas>
  );
}
