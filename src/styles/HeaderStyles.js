import styled from "styled-components";

export const HeaderStyles = styled.div`
color: rgb(247, 249, 247);
display: flex;
  align-items: center;
  /* border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
  margin: 100px 0;
  padding: 60px;

  .wave {
    font-size:32px;
  animation-name: wave-animation; 
  animation-duration: 2.1s; 
  animation-iteration-count: infinite; 
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } 
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } 
  100% {
    transform: rotate(0deg);
  }
}

  img {
 
    height 100px;
    width:100px;
  }

  /* & > div {
    flex: 1;
  } */

`;
