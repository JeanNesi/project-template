import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  width: 100vw;
  height: 100%;

  background: rgba(128, 128, 128, 0.6);

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  animation: fade-in 0.1s ease-in both;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 0;
  }

  scrollbar-width: none;
  scrollbar-color: transparent;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const Body = styled.div<{ $bodyWidth?: string }>`
  width: ${({ $bodyWidth }) => $bodyWidth ?? "460px"};
  margin: ${({ theme }) => theme.size["24"]} 0;

  animation: fade-in-scale 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes fade-in-scale {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }

  padding: ${({ theme }) => theme.size["8"]};
  background-color: ${({ theme }) => theme.color.foreground};
  border-radius: ${({ theme }) => theme.size["2"]};
  z-index: 10;

  @media (max-width: 900px) {
    width: 100vw;
    min-height: 100vh;
    border-radius: 0px;
    overflow-y: scroll;
    margin: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.size["4"]};

  word-break: break-word;
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size["4"]};

  img {
    width: 24px;
  }
`;
