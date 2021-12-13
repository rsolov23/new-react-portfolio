import React from "react";
import { FooterStyle } from "../../styles/FooterStyles";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <FooterStyle>
        <div>
      <p>Designed and Developed by Rachel Solov</p>
      <p>Copyright © {year} RS </p>
      </div>
      
      <a href="https://github.com/rsolov23" target="blank">
        {" "}
        <SiGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/rachel-solov-80bb3a174"
        target="blank"
      >
        <SiLinkedin />
      </a>
      <a href="mailto:rachelswebdev@gmail.com" target="blank">
        <AiOutlineMail />
      </a>
    </FooterStyle>
  );
}
