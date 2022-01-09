import React, { useState } from "react";
import { Nav, Hamburger, Menu, MenuLink, LogoStyle } from "../../styles/Nav";
import { AiOutlineProject } from "react-icons/ai";
import { FiPaperclip } from "react-icons/fi";
import { VscPerson } from "react-icons/vsc";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <LogoStyle>
        <a href="/" className="hover-underline-animation">
          &lt;Rachel Solov /&gt;
        </a>
      </LogoStyle>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <div>
          <MenuLink href="/skills" className="hover-underline-animation">
            <VscPerson />
            About
          </MenuLink>
          <MenuLink href="/projects" className="hover-underline-animation">
            <AiOutlineProject />
            Projects
          </MenuLink>
          <MenuLink href="/resume" className="hover-underline-animation">
            <FiPaperclip />
            Resume
          </MenuLink>
        </div>
      </Menu>
    </Nav>
  );
}
