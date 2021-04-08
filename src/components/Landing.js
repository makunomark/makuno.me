import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import styled from "@emotion/styled";

import GithubIcon from "../images/github.svg";
import LinkedInIcon from "../images/linkedin.svg";
import TwitterIcon from "../images/twitter.svg";

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.background_lighter} !important;
`;

const LandingPage = styled.div`
  display: flex;
  max-width: 112rem;
  flex-direction: column;
  align-items: center;
  padding: 12px;
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
  color: ${(props) => props.theme.text};
`;

const Tag = styled.span`
  background-color: ${(props) => props.theme.accent_background};
  color: ${(props) => props.theme.text};
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
  color: ${(props) => props.theme.text};
`;

const IconsHolder = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
`;

const TagsHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Landing = () => {
  const data = useStaticQuery(graphql`
    query StrapiHomePage {
      allStrapiHomePage {
        edges {
          node {
            personal_tags
            personal_description
            github_url
            linked_in_url
            twitter_url
            avatar {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  const nodeData = data.allStrapiHomePage.edges[0].node;
  return (
    <Page>
      <LandingPage>
        <Image
          src={
            process.env.GATSBY_DEV === "development"
              ? "http://localhost:8000"
              : "https://makuno.dev" + nodeData.avatar.childImageSharp.fluid.src
          }
          alt="Avatar"
        />

        <Description>{nodeData.personal_description}</Description>

        <TagsHolder>
          {nodeData.personal_tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsHolder>

        <IconsHolder>
          {nodeData.github_url ? (
            <IconHolder href={nodeData.github_url} target="_blank">
              <GithubIcon />
            </IconHolder>
          ) : null}

          {nodeData.twitter_url ? (
            <IconHolder href={nodeData.twitter_url} target="_blank">
              <TwitterIcon />
            </IconHolder>
          ) : null}

          {nodeData.linked_in_url ? (
            <IconHolder href={nodeData.linked_in_url} target="_blank">
              <LinkedInIcon />
            </IconHolder>
          ) : null}
        </IconsHolder>
      </LandingPage>
    </Page>
  );
};

export default Landing;
