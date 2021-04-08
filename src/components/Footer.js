import styled from "@emotion/styled";
import React from "react";

const FooterHolder = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.background_lighter} !important;
  flex-direction: column;
  padding: 12px;
  align-items: center;
`;

const Link = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: underline;
`;

const Copyright = styled.div`
  color: ${(props) => props.theme.text_secondary};
`;

const Footer = () => (
  <FooterHolder>
    <Copyright>© 2021 · Mark M. Gachoka</Copyright>
    <div>
      <Link href="https://github.com/makunomark/makuno.me" target="_blank">
        Source Code
      </Link>{" "}
      ·{" "}
      <Link href="https://github.com/makunomark/makuno.dev-cms" target="_blank">
        CMS Source Code
      </Link>
    </div>
  </FooterHolder>
);

export default Footer;
