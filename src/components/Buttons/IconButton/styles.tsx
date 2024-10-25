import styled, { css } from "styled-components";

export const ContainerButton = styled.button<{
  $labelPos?: string;
  $selected?: boolean;
  $opacity?: string;
  $color?: string;
  $hideLabelOnMedia?: boolean;
  $fontWeight?: string;
  $disable?: boolean;
}>`
  all: unset;
  display: flex;
  width: fit-content;
  align-items: center;
  cursor: pointer;
  transition: 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
  gap: ${({ theme }) => theme.size["2"]};

  > p {
    ${({ $color }) => $color && `color: ${$color};`}
    ${({ $fontWeight }) => $fontWeight && `font-weight: ${$fontWeight};`}

    @media (max-width: 900px) {
      ${({ $hideLabelOnMedia }) => $hideLabelOnMedia && `display: none;`}
    }
  }

  ${({ $opacity }) =>
    $opacity &&
    css`
      opacity: ${$opacity};
      &:hover {
        opacity: 1 !important;
      }
    `}
  ${({ $selected }) => $selected && " opacity: 1;"}
  ${({ $labelPos }) => $labelPos === "top" && "flex-direction:column-reverse;"}
  ${({ $labelPos }) => $labelPos === "right" && "flex-direction: row;"}
  ${({ $labelPos }) => $labelPos === "left" && "flex-direction: row-reverse;"}
  ${({ $labelPos }) => $labelPos === "bottom" && "flex-direction: column;"}
`;
