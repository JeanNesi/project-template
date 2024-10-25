import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarBody = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size["4"]};
  width: 100%;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.neutralColor[200]};
  background-color: ${({ theme }) => theme.color.foreground};
  color: ${({ theme }) => theme.color.text};
  text-align: center;
  overflow-y: auto;

  resize: horizontal;
  min-width: 150px;
  max-width: 350px;
  width: 255px;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const SidebarHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.size["4"]};

  border-bottom: 1px solid ${({ theme }) => theme.neutralColor[200]};
`;

export const SidebarContent = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.size["4"]};
  gap: ${({ theme }) => theme.size["4"]};

  > :last-child {
    margin-top: auto;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: fit-content;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Spacer = styled.div`
  height: 100%;
`;

export const SidebarButton = styled(Link)<{ $selected: boolean }>`
  ${({ $selected }) => $selected && "opacity: 1"}
  opacity: 0.4;
  color: ${({ theme }) => theme.color.primary};

  background-color: ${({ theme }) => theme.neutralColor[100]};
  padding: ${({ theme }) => theme.size["4"]} ${({ theme }) => theme.size["4"]};
  border-radius: ${({ theme }) => theme.size["4"]};
  gap: ${({ theme }) => theme.size["4"]};

  :first-child {
    min-width: ${({ theme }) => theme.size["4"]};
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  display: flex;
  align-items: center;

  &:hover {
    opacity: 1 !important;
  }
`;
