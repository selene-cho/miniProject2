import { createGlobalStyle } from "styled-components";

/* npm i styles-reset */
import reset from "styles-reset";

// 전역으로 css reset 만들어줄 변수 만들기
export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  input {
    all: unset;
  }
  body {
    font-size: 1.25rem;
    font-family: 'NexonLv2Gothic','Montserrat', sans-serif;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🎡</text></svg>") 16 0, auto;
  }
  button {
    all: unset;
  }
  ol, ul {
    list-style: none;
  }
  
  div{
    white-space: pre-wrap;
  }

  @import url("https://fonts.googleapis.com/css2?family=Jua&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
  @import url("https://webfontworld.github.io/NexonMaplestory/NexonMaplestory.css");
  @import url("https://webfontworld.github.io/NexonLv2Gothic/NexonLv2Gothic.css");
  @import url("https://webfontworld.github.io/nongshim/Ansungtangmyun.css");
`;
