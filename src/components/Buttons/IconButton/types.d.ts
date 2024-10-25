import { ElementType } from "react";

export type IIconConfig = {
  size?: string | number;
  color?: string;
  bgColor?: string;
};

export type ILabelConfig = {
  color?: string;
  className?: string;
  position?: "left" | "right" | "top" | "bottom";
  fontWeight?: string;
  hideLabelOnMedia?: boolean;
};

export interface IIconButton {
  icon: ElementType;
  label?: string;
  title?: string;
  onClick: (evt: any) => void;

  iconConfig?: IIconConfig;
  labelConfig?: ILabelConfig;

  opacity?: string;
  selected?: boolean;
  disabled?: boolean;

  type?: "submit" | "button";
}
