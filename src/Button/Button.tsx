import React from "react";
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { ButtonAppearance, ButtonProps, ButtonSize } from "./Button.types";

type CssPartial = FlattenInterpolation<ThemeProps<DefaultTheme>>;

const StyledButton = styled.button<{
  size: CssPartial;
  colors: CssPartial;
  disabled: boolean;
  iconOnly: boolean;
}>`
  border: 1px solid transparent;
  font: inherit;
  ${(props) => props.size};
  ${(props) => props.colors};
`;

const Button = ({
  className = "",
  onClick,
  size = "default",
  text,
  appearance = "default",
  children,
  disabled = false,
  iconOnly = false,
  icon,
  iconRight,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      size={getButtonSize(size)}
      colors={getColors(appearance, disabled)}
      disabled={disabled}
      iconOnly={iconOnly}
      {...rest}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children && children}
      {iconRight && (
        <span className="button-icon button-icon-right">{iconRight}</span>
      )}
    </StyledButton>
  );
};

function getColors(appearance: ButtonAppearance, disabled: boolean) {
  if (disabled) {
    return css`
      background-color: ${(props) => props.theme.colors.disabled};
    `;
  }

  if (appearance === "danger") {
    return css`
      background-color: ${(props) => props.theme.colors.warning};
    `;
  }

  if (appearance === "secondary") {
    return css`
      background-color: ${(props) => props.theme.colors.secondary};
    `;
  }

  return css`
    background-color: ${(props) => props.theme.colors.primary};
  `;
}

function getButtonSize(size: ButtonSize) {
  if (size === "small") {
    return css`
      height: 2.5rem;
    `;
  }
  return css`
    height: 3.5rem;
  `;
}
export default Button;
