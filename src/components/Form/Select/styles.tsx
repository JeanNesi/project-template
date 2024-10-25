import styled from "styled-components";

export const SelectContainer = styled.div<{
  $error: boolean;
  $watchValue: string;
}>`
  display: flex;
  flex-direction: column;
  > h6 {
    margin-bottom: ${({ theme }) => theme.size["2"]};
  }
  width: 100%;
  position: relative;

  ${({ $watchValue, theme }) =>
    $watchValue === "Selecione" || $watchValue === ""
      ? `
      > select {
        border-color: ${theme.neutralColor[300]};
        color: #757575
      }
      `
      : `
      > select {
          border-color: ${theme.neutralColor[400]};
      }`}

  ${({ $error, theme }) =>
    $error &&
    `
   > select {
    border-color: ${theme.auxiliaryColor.red[400]} !important;
    color: ${theme.auxiliaryColor.red[400]};
    margin-bottom: 2px;
  }
 `}
`;

export const ErrorMessage = styled.div`
  display: flex;
  color: ${({ theme }) => theme.auxiliaryColor.red[400]};
  > p {
    animation: scale-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes scale-in-left {
      0% {
        transform: scale(0);
        transform-origin: 0% 50%;
        opacity: 1;
      }
      100% {
        transform: scale(1);
        transform-origin: 0% 50%;
        opacity: 1;
      }
    }
  }
`;
