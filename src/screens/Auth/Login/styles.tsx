import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Background = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.size["20"]} ${theme.size["16"]};
  gap: ${theme.size["60"]};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size["20"]};
  max-width: 448px;
  margin-top: ${theme.size["40"]};
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size["2"]};
`;

export const Form = styled.form`
  display: grid;
  place-items: center;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.size["8"]};
`;

export const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.size["4"]};
  margin-top: auto;

  a {
    text-decoration: underline;
  }
`;
