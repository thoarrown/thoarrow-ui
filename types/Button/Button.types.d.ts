import { MouseEventHandler, ButtonHTMLAttributes } from "react";
export declare type ButtonSize = "default" | "small" | "large";
export declare type ButtonAppearance = "default" | "secondary" | "danger";
export declare type ButtonProps = ButtonHTMLAttributes<unknown> & {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    iconOnly?: boolean;
    size?: ButtonSize;
    appearance?: ButtonAppearance;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
