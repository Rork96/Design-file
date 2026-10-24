import React from "react";
import { Canvas } from "../../components/canvas/Canvas.jsx";
import { PhotoSlot } from "../../components/canvas/PhotoSlot.jsx";
import { GlowHeading } from "../../components/type/GlowHeading.jsx";
import { Bullet } from "../../components/type/Bullet.jsx";
import { BulletList } from "../../components/type/BulletList.jsx";
import { Handle } from "../../components/brand/Handle.jsx";

const QUESTION_SLOTS = [[255,0,139,152],[192,271,71,101],[175,713,177,91],[746,794,71,81],[228,911,139,169],[905,986,175,94]];
export function QuestionPost({ title = "Привіт", question = "А що тобі подобається дарувати людям?", slots = true, scale = 0.5 }) {
  return (
    <Canvas format="post" scale={scale} background="var(--rork-blue)">
      <GlowHeading size={104} style={{ position: "absolute", left: 76, top: 149, padding: "15px 88px" }}>{title}</GlowHeading>
      <Bullet color="var(--rork-lime)" size={36} style={{ position: "absolute", left: 109, top: 392 }} />
      <div style={{ position: "absolute", left: 177, top: 352, width: 880, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 100, lineHeight: "141px", color: "var(--rork-lime)", letterSpacing: "-0.01em" }}>{question}</div>
      {slots && QUESTION_SLOTS.map(([x, y, w, h], i) => <PhotoSlot key={i} x={x} y={y} w={w} h={h} />)}
      <Handle color="var(--rork-paper)" size={24} style={{ position: "absolute", left: 10, top: 1036 }} />
    </Canvas>
  );
}
