import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeChangerContext } from "../context/ThemeContext";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.background} !important;
  display: flex;
  justify-content: center;
`;

const NavHolder = styled.div`
  max-width: 112rem;
  flex: 1;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
`;

const HeaderIcon = styled.span`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-size: large;
  cursor: pointer;
`;

const HeaderLinks = styled.span`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-left: 6px;
  margin-right: 6px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const MenuItems = styled.div`
  align-items: center;
  display: flex;
`;

export default function Header() {
  return (
    <Nav>
      <NavHolder>
        <Link to="/">
          <HeaderIcon>Makuno</HeaderIcon>
        </Link>
        <MenuItems>
          <Link to="/">
            <HeaderLinks>Home</HeaderLinks>
          </Link>
          <Link to="/#projects">
            <HeaderLinks>Projects</HeaderLinks>
          </Link>
          <ThemeChangerContext.Consumer>
            {(value) =>
              value.activeTheme === "dark" ? (
                <FiSun onClick={value.switchTheme} />
              ) : (
                <FiMoon onClick={value.switchTheme} />
              )
            }
          </ThemeChangerContext.Consumer>
        </MenuItems>
      </NavHolder>
    </Nav>
  );
}
