import React from "react";
import styled from "@emotion/styled";

const Nav = styled.nav`
  background-color: #f5f5f5 !important;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
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
`;

export default function Header() {
  return (
    <Nav>
      <HeaderIcon>Makuno</HeaderIcon>
      <div>
        <HeaderLinks>Home</HeaderLinks>
        <HeaderLinks>Work</HeaderLinks>
      </div>
    </Nav>
  );
}
