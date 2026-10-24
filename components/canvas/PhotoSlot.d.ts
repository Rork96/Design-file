/** Square-cornered photo crop (#D9D9D9 when empty) placed absolutely on a canvas; often bleeds off an edge or overlaps type. */
export interface PhotoSlotProps {
  x?: number; y?: number; w?: number; h?: number;
  /** Image URL; empty renders the grey slot. */
  src?: string;
  label?: string;
  style?: React.CSSProperties;
}
export declare function PhotoSlot(props: PhotoSlotProps): JSX.Element;
