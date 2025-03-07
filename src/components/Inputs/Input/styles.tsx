import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    margin-bottom: ${({ theme }) => theme.size["2"]};
  }
  width: 100%;
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
