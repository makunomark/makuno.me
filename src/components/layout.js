import React from "react";
import Header from "./Header";
import styled from "@emotion/styled";

import "../styles/global.css";
import "./milligram.min.css";

const Main = styled.div`
  font-family: "Poppins", sans-serif;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main className="container" style={{ padding: 0 }}>
        <div className="row">
          <div className="column">{children}</div>
        </div>
      </Main>
    </>
  );
}
