import React from "react";

import styled from "@emotion/styled";

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15%;
  margin-right: 15%;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin-top: 10%;
`;

const Description = styled.p`
  margin-top: 10%;
  font-weight: 400;
  text-align: center;
`;

const Tag = styled.span`
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 25px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: 2px;
  margin-right: 2px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export default function Landing() {
  return (
    <LandingPage>
      <Image src="http://placekitten.com/300/300" alt="" />
      <Description>
        Hello. My name is Mark M. Gachoka. I'm a Software Engineer currently
        working at Twiga Foods. Previously, at Kuhustle.
      </Description>
      <div>
        <Tag>Software Engineer</Tag>
        <Tag>Full Stack Developer</Tag>
      </div>
    </LandingPage>
  );
}
