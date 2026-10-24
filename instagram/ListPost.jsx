import React from "react";
import { Canvas } from "../../components/canvas/Canvas.jsx";
import { PhotoSlot } from "../../components/canvas/PhotoSlot.jsx";
import { GlowHeading } from "../../components/type/GlowHeading.jsx";
import { Bullet } from "../../components/type/Bullet.jsx";
import { BulletList } from "../../components/type/BulletList.jsx";
import { Handle } from "../../components/brand/Handle.jsx";

const LIST_SLOTS = [[258,0,139,164],[190,245,71,101],[0,602,172,78],[746,794,71,81],[228,911,139,169],[905,986,175,94]];
export function ListPost({ title = "Я люблю", items = ["Дарувати корисну інформацію людям", "Обожнюю коли рідні шарять", "Я буду вести свій профіль"], slots = true, scale = 0.5 }) {
  return (
    <Canvas format="post" scale={scale} background="var(--rork-lime-2)">
      <GlowHeading size={104} highlight={false} color="var(--heading-on-lime)" style={{ position: "absolute", left: 172, top: 150 }}>{title}</GlowHeading>
      <BulletList items={items} size={50} bulletSize={36} gap={60} maxWidth={620} style={{ position: "absolute", left: 109, top: 344 }} />
      {slots && LIST_SLOTS.map(([x, y, w, h], i) => <PhotoSlot key={i} x={x} y={y} w={w} h={h} />)}
      <Handle color="var(--rork-ink)" size={24} style={{ position: "absolute", left: 770, top: 878 }} />
    </Canvas>
  );
}
