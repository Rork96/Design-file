/** Fixed 1080-wide artboard (post 1080×1080 or story 1080×1920), scaled for preview. Children are positioned in native px. */
export interface CanvasProps {
  format?: "post" | "story";
  scale?: number;
  background?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Canvas(props: CanvasProps): JSX.Element;
