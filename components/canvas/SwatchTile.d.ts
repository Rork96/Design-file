/** Colour square with a thick dark outer frame (Figma colour board). */
export interface SwatchTileProps {
  color?: string;
  size?: number;
  stroke?: number;
  frame?: string;
  style?: React.CSSProperties;
}
export declare function SwatchTile(props: SwatchTileProps): JSX.Element;
