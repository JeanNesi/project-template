import styled, { css, CSSProperties } from "styled-components";

export const SpinnerContent = styled.div<{ $size: string }>`
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: conic-gradient(white, rgba(0, 0, 0, 0.1));
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 4px),
    black calc(100% - 4px)
  );
  animation: spin 0.75s linear infinite;
  display: flex;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerButton = styled.div<{
  $disabled?: boolean;
  $loading: number;
  $outlined: boolean;
  $bgColor: string;
  $borderless: boolean;
  $fullWidth: boolean;
  $color?: string;
  $justify?: "flex-start" | "center" | "flex-end";
  $size: CSSProperties;
}>`
  width: ${({ $justify, $fullWidth }) =>
    $justify || $fullWidth ? "100%" : "fit-content"};
  display: flex;
  align-items: center;
  justify-content: ${({ $justify }) => $justify};

  > button {
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.size["4"]};

    ${({ $size }) => css`
      padding: ${$size.padding};
      font-size: ${$size.fontSize};
      height: ${$size.height};
      border-radius: ${$size.borderRadius};
    `}

    ${({ $fullWidth }) =>
      $fullWidth &&
      css`
        width: 100%;
      `}
    ${({ $outlined, $bgColor }) =>
      $outlined &&
      css`
        :hover {
          opacity: 0.7;
          background-color: ${`${$bgColor}26`};
        }
      `}
      ${({ $bgColor }) => $bgColor && `  background-color: ${$bgColor};`}
      ${({ $outlined, $bgColor }) =>
      $outlined &&
      css`
        outline: 2px solid ${$bgColor} !important;
        outline-offset: -2px;
        background-color: transparent;
        color: ${$bgColor};
      `}
      ${({ $disabled }) =>
      $disabled && "opacity: 0.4; :hover {opacity: 0.4;} cursor: not-allowed; "}
      ${({ $borderless, theme }) =>
      $borderless &&
      `
      background-color: transparent;
      border: none;
      outline: none;
      color: ${theme.auxiliaryColor.red[400]};
      padding: 0;
    `}
      ${({ $color }) => $color && `color: ${$color};`}
      ${({ $loading, $fullWidth, theme }) =>
      $loading &&
      css`
        ${!$fullWidth && `border-radius: 100%;`}

        padding: ${theme.size["4"]};
        opacity: 1;
        pointer-events: none;
      `};
  }
`;
