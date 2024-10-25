import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  font-family: DM Sans;
  background-color: ${({ theme }) => theme.neutralColor[200]};

  @media (max-width: 900px) {
    position: fixed;
    overflow: hidden;
  }

  > button {
    font-family: DM Sans;
    font-size: 14px;
    width: fit-content;
    transition: 0.25s;
    border-radius: ${({ theme }) => theme.size["2"]};
    padding: ${({ theme }) => theme.size["4"]} ${({ theme }) => theme.size["4"]};
    outline: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.neutralColor[1100]};
    background-color: ${({ theme }) => theme.color.primary};
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.size["32"]};
  margin-bottom: ${({ theme }) => theme.size["4"]};
  border-radius: ${({ theme }) => theme.size["2"]};
  background-color: ${({ theme }) => theme.neutralColor[1100]};
  color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => theme.size["4"]};
  width: 100%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.size["4"]};
  font-family: DM Sans;

  > h2 {
    margin: 0;
  }

  @media (max-width: 900px) {
    width: 80%;
  }
`;
