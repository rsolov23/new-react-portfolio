import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;600;700&display=swap');

* {
    box-sizing:border-box;
}
body {
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1.15em;
    /* background-color: #000;
     */
}


`;
export default GlobalStyles;
