import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
    min-width: 280px;
  }
`;

export const AppContent = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: auto;
  max-width: 1920px;
  padding: ${({ theme }) => theme.size["4"]} ${({ theme }) => theme.size["8"]};
`;
