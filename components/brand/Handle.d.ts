/** Signature: red-heart emoji + handle in mono, placed in a bottom corner of every post. */
export interface HandleProps {
  handle?: string;
  heart?: boolean;
  color?: string;
  /** px at 1080 canvas. Default 24. */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Handle(props: HandleProps): JSX.Element;
