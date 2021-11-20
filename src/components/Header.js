import React, { useState } from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink } from "../styles/HeaderStyles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo src="./images/RSlogo.png" alt="logo" />
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/skills">Skills</MenuLink>
        <MenuLink href="/resume">Resume</MenuLink>
      </Menu>
    </Nav>
  );
}
