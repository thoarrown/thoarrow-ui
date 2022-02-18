import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonSize = "default" | "small" | "large";
export type ButtonAppearance = "default" | "secondary" | "danger";

export type ButtonProps = ButtonHTMLAttributes<unknown> & {
  text?: string;
  disabled?: boolean;
  iconOnly?: boolean;
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  icon?: ReactNode;
  iconRight?: ReactNode;
};
