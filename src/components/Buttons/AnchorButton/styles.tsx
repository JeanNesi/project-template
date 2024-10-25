import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

export const ContainerButton = styled(Link)<{
  $justify: string;
  $selected?: boolean;
  $opacity?: string;
  $color?: string;
  $fontWeight?: string;
  $disable?: boolean;
}>`
  display: flex;
  align-items: center;

  ${({ $justify }) =>
    $justify === "flex-start"
      ? css`
          justify-content: flex-start;
          width: fit-content;
        `
      : css`
          justify-content: ${$justify};
          width: 100%;
        `}

  gap: ${theme.size["2"]};

  ${({ $color }) => $color && `color: ${$color};`}
  ${({ $fontWeight }) => $fontWeight && `font-weight: ${$fontWeight};`}


  ${({ $disable }) =>
    $disable &&
    css`
      opacity: 0.4 !important;
      :hover {
        opacity: 0.4 !important;
      }
      cursor: not-allowed;
    `}

  ${({ $opacity }) =>
    $opacity && `opacity:${$opacity}; :hover { opacity: 1; };`}

  ${({ $selected }) => $selected && " opacity: 1;"}
`;
