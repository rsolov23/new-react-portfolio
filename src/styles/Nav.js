import styled from "styled-components";

export const LogoStyle = styled.div`
  @import url("http://fonts.cdnfonts.com/css/agustina");
  font-family: "Agustina", sans-serif;
`
export const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  a {
    color: var(--main-color);
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
  }

  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: var(--main-color);
    cursor: pointer;
  }
  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Logo = styled.img`
  width: 55px;
  height: 55px;
  padding: 1rem 0;
  color: rgb(247, 249, 247);
  &:hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(2);
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 658) {
    margin-bottom: 40px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  color: rgb(247, 249, 247);
  font-weight: bold;
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: var(--main-b-color);
    cursor: pointer;
  }
  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--main-b-color);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:hover {
    color: var(--main-b-color);
  }
`;
