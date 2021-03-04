import React from "react";
import GithubIcon from "../images/github.svg";
import LinkedInIcon from "../images/linkedin.svg";
import TwitterIcon from "../images/twitter.svg";

import styled from "@emotion/styled";

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  margin-top: 8%;
`;

const Description = styled.p`
  margin-top: 24px;
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
  margin-top: 2px;
  font-size: 12px;
`;

const IconHolder = styled.a`
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  color: black;
`;

const IconsHolder = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
`;

const TagsHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Landing() {
  return (
    <LandingPage>
      <Image
        src="https://res.cloudinary.com/dzm2zrijg/image/upload/v1614881740/large_7_V8_A3311_53d77326f2.jpg"
        alt=""
      />

      <Description>
        Hello. My name is Mark M. Gachoka. I'm a Software Engineer currently
        working at Twiga Foods. Previously, at Kuhustle.
      </Description>

      <TagsHolder>
        <Tag>Software Engineer</Tag>
        <Tag>Full Stack Developer</Tag>
      </TagsHolder>

      <IconsHolder>
        <IconHolder>
          <GithubIcon />
        </IconHolder>
        <IconHolder>
          <TwitterIcon />
        </IconHolder>
        <IconHolder>
          <LinkedInIcon />
        </IconHolder>
      </IconsHolder>
    </LandingPage>
  );
}
