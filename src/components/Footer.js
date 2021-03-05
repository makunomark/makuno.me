import styled from "@emotion/styled";
import React from "react";

const FooterHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  align-items: center;
`;

const Link = styled.a`
  color: black;
  text-decoration: underline;
`;

const Footer = () => (
  <FooterHolder>
    <div>© 2021 · Mark M. Gachoka</div>
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
