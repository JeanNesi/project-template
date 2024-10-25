// COMPONENTS
import { theme } from "@/styles/theme";
import { ContainerButton, SpinnerContent } from "./styles";

// TYPES
import { IButton } from "./types";
import { buttonSize } from "@/styles/sizes";

export const Button = ({
  children,
  loading = false,
  outlined = false,
  bgColor = theme.neutralColor[100],
  color,
  borderless = false,
  fullWidth = false,
  justify,
  disabled,
  size = "medium",
  type,
  ...rest
}: IButton) => {
  const spinnerSize = {
    extraSmall: theme.size["10"],
    small: theme.size["10"],
    medium: theme.size["11"],
    large: theme.size["12"],
    extraLarge: theme.size["12"],
  };

  return (
    <ContainerButton
      $bgColor={bgColor}
      $loading={+loading}
      $disabled={disabled}
      $outlined={outlined}
      $borderless={borderless}
      $justify={justify}
      $fullWidth={fullWidth}
      $color={color}
      $size={buttonSize[size]}
    >
      <button {...rest} type={type} disabled={disabled || loading}>
        {loading ? <SpinnerContent $size={spinnerSize[size]} /> : children}
      </button>
    </ContainerButton>
  );
};
