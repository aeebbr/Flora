import { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: "NEXON Lv1 Gothic OTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: Pretendard-Regular, "Arial", sans-serif;
    font-size: 16px;
  }

  button {
    font-weight: bold;
  }
`;
