import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import React from "react";
import ProjectListContext from "../context/ProjectListContext";

import Technologies from "./Technologies";

const PageTitle = styled.p`
  text-transform: uppercase;
  color: black;
  font-weight: bolder;
  font-size: xx-large;
  text-decoration: underline;
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
  width: 98%;
  @media (min-width: 426px) {
    width: 48%;
  }
  background-color: white;
  border-radius: 10px;
  padding: 12px;
  margin-top: 12px;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
`;

const ProjectIcon = styled.img`
  max-width: 25%;
`;

const ProjectDetailsHolder = styled.div`
  flex: 4;
  margin-left: 12px;
`;

const ProjectTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: large;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const ProjectDescription = styled.p`
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 7.2em;
  line-height: 1.8em;
`;

const Technology = styled.span`
  color: rgba(87, 199, 255);
`;

const MidDot = styled.span`
  margin-right: 12px;
  margin-left: 12px;
  color: rgba(87, 199, 255);
`;

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 12px;
  margin-right: 12px;
`;

const ProjectsDescription = styled.p`
  text-align: center;
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
            id
            description
            icon {
              url
            }
          }
        }
      }
    }
  `);

  const myProjectsData = myProjects.allStrapiProject.edges;

  return (
    <PageBackground id="projects">
      <Page>
        <PageTitle>Projects</PageTitle>
        <ProjectsDescription>
          A showcase of projects worked on, and technologies used.
        </ProjectsDescription>
        <Technologies />
        <ProjectListContext.Consumer>
          {(projects) => projects.setProjectList(myProjectsData)}
        </ProjectListContext.Consumer>
        <ProjectsList>
          {myProjectsData.map((myProject, index) => (
            <ProjectItemHolder>
              <ProjectIcon
                src={myProject.node.icon[0].url}
                height={80}
                width={80}
              />
              <ProjectDetailsHolder>
                <Link to={`/project`} state={{ index }}>
                  <ProjectTitle>{myProject.node.title}</ProjectTitle>
                </Link>
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
        </ProjectsList>
      </Page>
    </PageBackground>
  );
};

export default Projects;
