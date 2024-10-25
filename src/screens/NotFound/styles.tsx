import styled from "styled-components";

export const Container = styled.div`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.size["12"]};
`;

export const ImgWrapper = styled.div`
  max-width: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.size["8"]};

  text-align: center;
  max-width: 350px;
`;
