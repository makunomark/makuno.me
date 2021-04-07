import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import { graphql, useStaticQuery } from "gatsby";

const Nav = styled.nav`
  background-color: #f5f5f5 !important;
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

const HeaderIcon = styled.a`
  text-transform: uppercase;
  color: black;
  font-weight: bold;
  font-size: large;
  cursor: pointer;
`;

const HeaderLinks = styled.a`
  text-transform: uppercase;
  color: black;
  margin-left: 6px;
  margin-right: 6px;
  cursor: pointer;
  /* text-decoration: underline; */
  /* text-underline-position: under; */
  font-weight: 500;
`;

export default function Header() {
  return (
    <Nav>
      <NavHolder>
        <Link to="/">
          <HeaderIcon>Makuno</HeaderIcon>
        </Link>
        <div>
          <Link to="/">
            <HeaderLinks>Home</HeaderLinks>
          </Link>
          <Link to="/#projects">
            <HeaderLinks>Projects</HeaderLinks>
          </Link>
        </div>
      </NavHolder>
    </Nav>
  );
}
