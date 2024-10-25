import { css } from "styled-components";
import { auxiliaryColor, brandColor, color, neutralColor } from "./colors";
import { elevations } from "./elevations";
import { size } from "./sizes";
import { fonts } from "./fonts";

export const theme = {
  color,
  brandColor,
  auxiliaryColor,
  neutralColor,
  elevations,
  fonts,
  size,
  card: css`
    background-color: ${color.foreground};
    padding: ${size["4"]};
    border-radius: ${size["2"]};
  `,
};
