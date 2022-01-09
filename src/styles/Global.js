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
  --main-color: #6b9fed;
  --main-b-color:#24f9f9;
  --main-g-color:#a1a7c8;
  --main-w-color:#ffffff;


}

#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: #0c0513;
  background-image: url(../assets/images/pre.svg);
  background-repeat: no-repeat;
  background-position: center;
}

#preloader-none {
  opacity: 0;
}
`;
export default GlobalStyles;
