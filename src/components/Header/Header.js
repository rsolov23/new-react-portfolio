import React from "react";
import { HeaderStyles } from "../../styles/HeaderStyles";
// import Particle from "../../pages/Particle";
import image from "../../assets/images/fdev.svg";
export default function Header() {
  return (
    <HeaderStyles>
      {/* <Particle /> */}
      <h1>Hello World! 👋</h1>
      <h2>I'm Rachel Solov</h2>
      <img src={image} alt="" />
    </HeaderStyles>
  );
}
