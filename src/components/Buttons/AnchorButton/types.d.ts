export interface IAnchorButton {
  color?: string;
  opacity?: string;
  className?: string;
  justify?: "center" | "flex-end" | "flex-start";
  selected?: boolean;
  to: string;
  fontWeight?: string;
  size?: string;
  children: React.ReactNode;
  disabled?: boolean;
}
