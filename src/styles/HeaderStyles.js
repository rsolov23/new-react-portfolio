import styled from "styled-components";

export const HeaderStyles = styled.div`
  color: rgb(247, 249, 247);
  display: flex;
  justify-content: center;
  /* border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
  /* margin: 100px 0; */
  padding: 60px;

  .wave {
    font-size: 32px;
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

  /* & > div {
    flex: 1;
  } */
`;
export const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
 height 500px;
 width:500px;

  /* height: 2000px;
  width: 1000px; */
  /* margin-left: 100px; */
`;

export const AboutStyle = styled.div`
  font-size: 35px;
  height 500px;
 width:500px;
margin-top:40px;
`;
