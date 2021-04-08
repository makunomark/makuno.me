import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import ProjectListContext from "../context/ProjectListContext";

import Technologies from "./Technologies";

const PageTitle = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-size: xx-large;
`;

const PageBackground = styled.div`
  background-color: ${(props) => props.theme.background} !important;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Page = styled.div`
  max-width: 112rem;
  width: 100%;
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
  background-color: ${(props) => props.theme.background_lighter} !important;
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
  margin-left: 4px;
`;

const ProjectTitle = styled.p`
  color: ${(props) => props.theme.text};
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
  color: ${(props) => props.theme.text_secondary};
  line-height: 1.8em;
`;

const Technology = styled.span`
  color: ${(props) => props.theme.accent};
`;

const MidDot = styled.span`
  margin-right: 12px;
  margin-left: 12px;
  color: ${(props) => props.theme.accent};
`;

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 12px;
  margin-right: 12px;
  width: 100%;
`;

const ProjectsDescription = styled.p`
  text-align: center;
  margin-right: 12px;
  margin-left: 12px;
  color: ${(props) => props.theme.text_secondary};
`;

const TechnologyHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Projects = () => {
  return (
    <PageBackground id="projects">
      <Page>
        <PageTitle>Projects</PageTitle>
        <ProjectsDescription>
          A showcase of projects worked on, and technologies used.
        </ProjectsDescription>
        <Technologies />
        <ProjectListContext.Consumer>
          {(myProjectsData) => (
            <ProjectsList>
              {myProjectsData.projectList != null &&
              myProjectsData.projectList.length > 0
                ? myProjectsData.projectList.map((myProject, index) => (
                    <ProjectItemHolder key={index}>
                      <ProjectIcon
                        src={myProject.node.icon[0].url}
                        height={80}
                        width={80}
                      />
                      <ProjectDetailsHolder>
                        <Link
                          to={`/project`}
                          state={{ index, project: myProject.node }}
                        >
                          <ProjectTitle>{myProject.node.title}</ProjectTitle>
                        </Link>
                        <ProjectDescription>
                          {myProject.node.description}
                        </ProjectDescription>
                        <TechnologyHolder>
                          {myProject.node.technologies.map(
                            (technology, index) => (
                              <div key={index}>
                                <Technology>{technology.name}</Technology>
                                {index ==
                                myProject.node.technologies.length -
                                  1 ? null : (
                                  <MidDot>·</MidDot>
                                )}
                              </div>
                            )
                          )}
                        </TechnologyHolder>
                      </ProjectDetailsHolder>
                    </ProjectItemHolder>
                  ))
                : null}
            </ProjectsList>
          )}
        </ProjectListContext.Consumer>
      </Page>
    </PageBackground>
  );
};

export default Projects;
