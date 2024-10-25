import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  > button {
    height: 16px;
    min-width: 16px;
    padding: 2px;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      opacity: 0.7;
    }
    margin: 0 2px;
    border: none;
    border-radius: 2px;
  }

  > .isCurrent {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.text};
  }

  > .notCurrent {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.brandColor.blue[100]};
  }
`;

export const Ellipsis = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 16px;
  width: 16px;
  padding: 2px;
  margin: 0 2px;

  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.brandColor.blue[100]};
  border: none;
  border-radius: 2px;
`;

export const Next = styled.div<{ $disabled?: boolean }>`
  ${({ $disabled }) => $disabled && `opacity: 0.4;pointer-events: none;`};

  display: flex;
  align-items: center;

  cursor: pointer;
  transition: 0.25s;
  :hover {
    opacity: 0.7;
  }
  > img {
    height: 16px;
  }
`;

export const Previous = styled.div<{ $disabled?: boolean }>`
  ${({ $disabled }) => $disabled && `opacity: 0.4;pointer-events: none;`};

  display: flex;
  align-items: center;

  cursor: pointer;

  transition: 0.25s;
  :hover {
    opacity: 0.7;
  }

  > img {
    height: 16px;
  }
`;

export const TakeContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${({ theme }) => theme.size["4"]};
  margin-right: ${({ theme }) => theme.size["4"]};

  select {
    width: 80px;
  }
`;
