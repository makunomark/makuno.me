import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Technologies from "./Technologies";

const PageTitle = styled.h2`
  text-transform: uppercase;
  color: black;
  font-weight: bold;
`;

const PageBackground = styled.div`
  background-color: #f5f5f5;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Page = styled.div`
  max-width: 112rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectItemHolder = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  padding: 12px;
  margin-top: 12px;
  margin-left: 8px;
  margin-right: 8px;
`;

const ProjectIcon = styled.img`
  flex: 1;
  height: 50%;
  max-width: 20%;
`;

const ProjectDetailsHolder = styled.div`
  flex: 4;
  margin-left: 12px;
`;

const ProjectTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: large;
`;

const ProjectDescription = styled.p`
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 7.2em;
  line-height: 1.8em;
`;

const Technology = styled.span``;

const MidDot = styled.span`
  margin-right: 12px;
  margin-left: 12px;
`;

const Projects = () => {
  const myProjects = useStaticQuery(graphql`
    query AllStrapiProjectQuery {
      allStrapiProject {
        edges {
          node {
            technologies {
              name
            }
            title
            description
            icon {
              formats {
                thumbnail {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  const myProjectsData = myProjects.allStrapiProject.edges;
  console.log(myProjectsData);

  return (
    <PageBackground>
      <Page>
        <PageTitle>My Projects</PageTitle>
        <Technologies />
        {myProjectsData.map((myProject) => (
          <ProjectItemHolder>
            <ProjectIcon src={myProject.node.icon[0].formats.thumbnail.url} />
            <ProjectDetailsHolder>
              <ProjectTitle>{myProject.node.title}</ProjectTitle>
              <ProjectDescription>
                {myProject.node.description}
              </ProjectDescription>
              {myProject.node.technologies.map((technology, index) => (
                <>
                  <Technology>{technology.name}</Technology>
                  {index == myProject.node.technologies.length - 1 ? null : (
                    <MidDot>·</MidDot>
                  )}
                </>
              ))}
            </ProjectDetailsHolder>
          </ProjectItemHolder>
        ))}
      </Page>
    </PageBackground>
  );
};

export default Projects;
