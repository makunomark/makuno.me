import React from "react";
import Header from "./Header";
import styled from "@emotion/styled";

import "../styles/global.css";
import "./milligram.min.css";
import Footer from "./Footer";

const Main = styled.div`
  font-family: "Poppins", sans-serif;
`;

export default function Layout({ children }) {
  return (
    <>
      <Main
        className="container"
        style={{ padding: 0, maxWidth: "100%", height: "100vh" }}
      >
        <div className="row" style={{ marginLeft: 0, height: "100%" }}>
          <div className="column" style={{ padding: 0, height: "100%" }}>
            <>
              <Header />
              {children}
              <Footer />
            </>
          </div>
        </div>
      </Main>
    </>
  );
}
