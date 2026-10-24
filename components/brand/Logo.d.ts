/** Rork Web wordmark — vector, transparent background (white letters, black extruded shadow). Place on blue (#446DF4) or another saturated ground. */
export interface LogoProps {
  /** Path to logo-rork.svg relative to the consuming page. */
  src?: string;
  width?: number | string;
  /** Backdrop colour, e.g. "var(--rork-blue-logo)". Default transparent. */
  background?: string;
  padding?: number | string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
