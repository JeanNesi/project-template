import { createGlobalStyle } from "styled-components";
import { img } from "@/assets/img";
import { theme } from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.components};
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: ${theme.size["2"]};
    transition: 0.25s;
    color: ${theme.neutralColor[400]};
  }

  a:hover {
    text-decoration-color: ${theme.neutralColor[200]};
    color: ${theme.neutralColor[200]};
  }


  body {
    background-color: ${theme.color.background};
    color: ${theme.color.text};
  }

  .bold {
    font-weight: 700 !important;
  }

  .semiBold {
    font-weight: 600 !important;
  }

  .medium {
    font-weight: 500 !important;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 76.8px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 67.2px;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 57.6px;
  }

  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
  }

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43.2px;
  }

  h6 {
    font-style: normal;
    font-weight: 500;
    font-size: 37px;
    line-height: 38.4px;
  }

  .h7 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28.8px;
  }

  .h8 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }

  .p1 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38.4px;
  }

  .p2 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }

  .p3 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
  }

  .p4 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
  }

  .p5 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
  }

  .p6 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
  }

  .p7 {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }


  input {
    font-weight: 400;
    font-size: 16px;
    line-height: 25.6px;
    font-style: normal;
    outline: none;
    width: 100%;
    color: ${theme.neutralColor[100]};
    background-color: ${theme.neutralColor[1000]};
    border: 1px solid transparent;
    height: 56px;
    border-radius: ${theme.size["6"]};
    padding: ${theme.size["5"]} ${theme.size["8"]};
    transition: color 0.25s;
    
    &:focus{
      border: 1px solid ${theme.neutralColor["100"]};
      padding: ${theme.size["5"]} calc(${theme.size["8"]} - 2) ;
    }

    &::placeholder {
      color: ${theme.neutralColor[400]};
    }
  }

  

  input[type=checkbox] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: ${theme.color.primary};
  }

  input[type=radio] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: ${theme.color.primary};
  }

  input[type=date],
  input::-webkit-calendar-picker-indicator {
    cursor: pointer;

  }

  input[type=file],
  input[type=file]::-webkit-file-upload-button {
    cursor: pointer;
  }

  input[disabled], textarea[disabled],select[disabled] {
    cursor: not-allowed !important;
    background-color: ${theme.neutralColor[1000]} !important;
    color: ${theme.neutralColor[800]} !important;
    opacity: 1 !important;

    &::placeholder {
      color: ${theme.neutralColor[800]};
    }
  }

  textarea {
    color: ${theme.neutralColor[500]};
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    outline: none;
    width: 100%;
    background-color: ${theme.color.foreground};
    border: 1px solid ${theme.neutralColor[400]};
    height: 100px;
    border-radius: ${theme.size["2"]};
    padding: ${theme.size["4"]} ${theme.size["4"]} ;
    resize: none;
  }

  select {
    color: ${theme.neutralColor[500]};
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    outline: none;
    width: 100%;
    background-color: ${theme.color.foreground};
    border: 1px solid ${theme.neutralColor[400]};
    height: 32px;
    border-radius: ${theme.size["2"]};
    padding: 0 ${theme.size["4"]};
    background-image: url(${img.grayArrow});
    background-repeat: no-repeat, repeat;
    background-position: right ${theme.size["4"]} top 50%, 0 0;
    background-size: 16px;
  }

  option {
    color: ${theme.neutralColor[500]};
  }

  option[disabled] {
    color: ${theme.neutralColor[400]};
  }

  button[disabled] {
    cursor: not-allowed !important;
  }

  button {
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 500;
    height: 56px;
    border-radius: ${theme.size["2"]};
    padding: ${theme.size["4"]} ${theme.size["4"]};
    outline: none !important;
    border: none;
    cursor: pointer;
    color: ${theme.color.foreground};
    background-color: ${theme.color.primary};
    transition: 0.25s;
  }

  button:hover {
    opacity: 0.8;
  }

  table {
    th {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }

   td {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
   }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.size["12"]};


    button[type='submit'] {
      margin-top: ${theme.size["4"]};
    }
  }

  ::-webkit-scrollbar {
    @media (max-width: 900px) {
     display: none;
    }
}
`;
