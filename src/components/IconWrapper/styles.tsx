import styled from "styled-components";

export const Wrapper = styled.div<{ $bgColor: string; $size: number }>`
  display: grid;
  place-items: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  max-width: ${({ $size }) => $size}px;
  max-height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ $bgColor }) => $bgColor};
`;
