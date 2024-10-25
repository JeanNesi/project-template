import styled from "styled-components";

export const Container = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.size["4"]};
  height: ${({ height }) => height};
  color: ${({ theme }) => theme.neutralColor[400]};
`;
