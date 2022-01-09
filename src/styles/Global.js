import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;600;700&display=swap');

* {
    box-sizing:border-box;
}
body {
    font-family: 'Merriweather Sans', sans-serif;
  
    
}
html, body, #root, .App {
  height: 100%;
  /* background-color: #232741; */

}

`;
export default GlobalStyles;
