import styled from "styled-components";

export const HeaderStyles = styled.div`
color: rgb(247, 249, 247);
display: flex;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 100px 0;
  padding: 60px;
.hand {
  
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.1s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;

}

  img {
 
    height 100px;
    width:100px;
  }

  /* & > div {
    flex: 1;
  } */

`;
