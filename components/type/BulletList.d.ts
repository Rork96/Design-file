/** Stack of statements each led by the square bullet ("Я люблю" post). */
export interface BulletListProps {
  items?: React.ReactNode[];
  color?: string;
  bulletColor?: string;
  /** px at 1080 canvas. Default 52. */
  size?: number;
  bulletSize?: number;
  gap?: number;
  maxWidth?: number;
  style?: React.CSSProperties;
}
export declare function BulletList(props: BulletListProps): JSX.Element;
