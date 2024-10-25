// COMPONENTS
import { ContainerButton } from "./styles";
import { theme } from "@/styles/theme";

// TYPES
import { IAnchorButton } from "./types";

export const AnchorButton = ({
  justify = "flex-start",
  opacity,
  color = theme.neutralColor[400],
  selected,
  fontWeight = "500",
  disabled = false,
  to,
  children,
}: IAnchorButton) => (
  <ContainerButton
    style={{ pointerEvents: disabled ? "none" : "auto" }}
    $justify={justify}
    $selected={selected}
    $opacity={opacity}
    $color={color}
    $fontWeight={fontWeight}
    $disable={disabled}
    to={to}
  >
    {children}
  </ContainerButton>
);
