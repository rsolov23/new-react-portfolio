import React, { useState } from "react";
import { Nav, Hamburger, Menu, MenuLink } from "../../styles/Nav";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <a href="/">&lt;RS/&gt;</a>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <div>
          <MenuLink href="/projects">Projects</MenuLink>
          <MenuLink href="/skills">Skills</MenuLink>
          <MenuLink href="/resume">Resume</MenuLink>
        </div>
      </Menu>
    </Nav>
  );
}
