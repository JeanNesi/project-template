import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

export const InputContainer = styled.div<{
  $labelColor: string;
  $disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: relative;

  > p {
    color: ${({ $labelColor, $disabled }) =>
      $disabled ? theme.neutralColor[800] : $labelColor};
    margin-bottom: ${theme.size["6"]};
  }

  width: 100%;
`;

export const InputWrapper = styled.div<{
  $error: boolean;
  $passwordPlaceholder?: boolean;
  $removeStyles: boolean;
}>`
  position: relative;
  width: 100%;

  ${({ $removeStyles }) =>
    $removeStyles &&
    css`
      > input {
        border: 0;
        border-radius: 0;
        outline: 0;
        border-radius: 0;
        background-color: transparent;

        :placeholder-shown {
          border: 0;
        }
      }
    `}

  ${({ $passwordPlaceholder }) =>
    $passwordPlaceholder &&
    css`
      > .opera input[type="password"],
      .webkit input[type="password"],
      input[type="password"] {
        border: 1px solid ${theme.neutralColor[500]};

        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: black;
          opacity: 1; /* Firefox */
        }
        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: black;
        }
        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: black;
        }
      }
      input[type="password"]:focus::-webkit-input-placeholder {
        color: transparent !important;
      }
      input[type="password"]:focus::-moz-placeholder {
        color: transparent !important;
      }
      input[type="password"]:focus:-moz-placeholder {
        color: transparent !important;
      }
    `}
  // CÓDIGOS PARA PLACEHOLDER DE SENHA FICAR PRETO E SUMIR NO FOCUS,
  // APENAS PARA O VISUAL ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  ${({ $error }) =>
    $error &&
    css`
      > input {
        border-color: ${theme.auxiliaryColor.red[300]} !important;
        padding-right: ${theme.size["32"]};
      }
    `}
`;

export const AbsoluteWrapper = styled.div`
  position: absolute;
  right: ${theme.size["7"]};

  top: 50%;
  transform: translateY(-50%);
`;

export const ErrorIcon = styled.div`
  display: grid;
  place-items: center;
  width: ${theme.size["10"]};
  height: ${theme.size["10"]};
  background: ${theme.auxiliaryColor.red[600]};
  color: ${theme.neutralColor[1100]};
  border-radius: 50%;
`;

export const ErrorMessage = styled.div<{ $errorColor: string }>`
  display: flex;
  color: ${({ $errorColor }) => $errorColor};
  margin-top: ${theme.size["4"]};

  /* > p {
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
  } */
`;
