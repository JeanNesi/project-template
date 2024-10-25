import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size["8"]};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.size["4"]};
  flex-wrap: wrap;
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size["4"]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size["4"]};
  justify-content: flex-end;
`;

export const PaginationFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
