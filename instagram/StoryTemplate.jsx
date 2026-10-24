import React from "react";
import { Canvas } from "../../components/canvas/Canvas.jsx";
import { StoryGuides } from "../../components/canvas/StoryGuides.jsx";

export function StoryTemplate({ guides = true, scale = 0.3, background = "var(--surface-support)" }) {
  return (
    <Canvas format="story" scale={scale} background={background}>
      {guides && <StoryGuides />}
    </Canvas>
  );
}
