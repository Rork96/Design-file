import React from "react";
import { Canvas } from "../../components/canvas/Canvas.jsx";
import { StoryGuides } from "../../components/canvas/StoryGuides.jsx";

const WORDS = ["Посмішка","Здивування","Доброта","Впевненість","Симпатія","Здивування","Тепло","Знання","Радість","Щирість"];
export function WordListStory({ scale = 0.3, guides = false }) {
  return (
    <Canvas format="story" scale={scale} background="var(--rork-white)">
      <div style={{ position: "absolute", left: 160, top: 290, fontFamily: "var(--font-condensed)", fontWeight: 400, textTransform: "uppercase", fontSize: 76, lineHeight: "84px", color: "var(--rork-forest)" }}>10 слів, які асоціюють<br /><span style={{ color: "var(--rork-blue-ink)" }}>мій бренд</span></div>
      <ol style={{ position: "absolute", left: 160, top: 530, margin: 0, padding: "0 0 0 64px", fontFamily: "var(--font-condensed)", fontWeight: 400, textTransform: "uppercase", fontSize: 56, lineHeight: "78px", color: "var(--rork-forest)" }}>
        {WORDS.map((w, i) => <li key={i}>{w}</li>)}
      </ol>
      {guides && <StoryGuides />}
    </Canvas>
  );
}
