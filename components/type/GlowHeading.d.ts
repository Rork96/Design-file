/** Post title. Optional blurred lime block behind the word ("Привіт"). Without highlight it is a plain bold title ("Я люблю"). */
export interface GlowHeadingProps {
  children?: React.ReactNode;
  color?: string;
  glow?: string;
  /** px at 1080 canvas. Default 104. */
  size?: number;
  weight?: number;
  blur?: number;
  highlight?: boolean;
  style?: React.CSSProperties;
}
export declare function GlowHeading(props: GlowHeadingProps): JSX.Element;
