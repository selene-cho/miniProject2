import { createGlobalStyle } from "styled-components";

/* npm i styles-reset */
import reset from "styles-reset";

// 전역으로 css reset 만들어줄 변수 만들기
export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }
  input {
    all: unset;
  }
  button {
    all: unset;
  }
  li {
    list-style: none;
  }
  #root {
    white-space: pre-line;
  }
`;
