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
            <div style={{ display: "flex" }}>
              <VscPerson style={{ paddingRight: "8px" }} />
              About
            </div>
          </MenuLink>

          <MenuLink href="/projects" className="hover-underline-animation">
            <div style={{ display: "flex" }}>
              {" "}
              <AiOutlineProject style={{ paddingRight: "8px" }} />
              Projects
            </div>
          </MenuLink>
          <MenuLink href="/resume" className="hover-underline-animation">
            <div style={{ display: "flex" }}>
              {" "}
              <FiPaperclip style={{ paddingRight: "8px" }} />
              Resume
            </div>
          </MenuLink>
        </div>
      </Menu>
    </Nav>
  );
}
