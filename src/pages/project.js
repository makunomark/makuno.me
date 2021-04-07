import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { FiChevronLeft, FiChevronRight, FiSmile } from "react-icons/fi";

import Layout from "../components/layout";
import ProjectListContext from "../context/ProjectListContext";

const Page = styled.div`
  display: flex;
  justify-content: center;
`;

const LandingPage = styled.div`
  display: flex;
  max-width: 112rem;
  flex-direction: column;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const ProjectTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: xx-large;
`;

const TechnologiesTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: medium;
`;

const ProjectDescription = styled.p`
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 7.2em;
  line-height: 1.8em;
`;

const ProjectCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const ProjectCarouselItem = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
    color: rgba(87, 199, 255);
  }
`;

export default function Projects({ location }) {
  const [position, setPosition] = useState(0);
  const [projectList, setProjectList] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setPosition(location.state.index || 0);
  }, [location]);

  useEffect(() => {
    if (projectList != null && projectList.length > position) {
      setSelectedProject(projectList[position].node);
    } else {
      setSelectedProject(null);
    }
  }, [projectList]);

  useEffect(() => {
    if (projectList != null && projectList.length > position) {
      setSelectedProject(projectList[position].node);
    }
  }, [position]);

  return (
    <Layout>
      {(value) => {
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | Selected Project</title>
        </Helmet>;
      }}
      <Page>
        <LandingPage>
          <ProjectListContext.Consumer>
            {(projects) => {
              setProjectList(projects.projectList);
            }}
          </ProjectListContext.Consumer>
          {projectList != null && projectList.length > 0 ? (
            <ProjectCarousel>
              {position - 1 < 0 ? (
                <FiSmile />
              ) : (
                <ProjectCarouselItem onClick={() => setPosition(position - 1)}>
                  <FiChevronLeft />
                  <span>{projectList[position - 1].node.title}</span>
                </ProjectCarouselItem>
              )}
              {position + 1 < projectList.length ? (
                <ProjectCarouselItem onClick={() => setPosition(position + 1)}>
                  <span>{projectList[position + 1].node.title}</span>
                  <FiChevronRight />
                </ProjectCarouselItem>
              ) : (
                <FiSmile />
              )}
            </ProjectCarousel>
          ) : null}
          {selectedProject ? (
            <>
              <ProjectTitle>{selectedProject.title}</ProjectTitle>
              <p>Sep 2017 to Aug 2018</p>
              <ProjectDescription>
                {selectedProject.description}
              </ProjectDescription>
              <TechnologiesTitle>Technologies</TechnologiesTitle>
              {selectedProject.technologies.map((technology) => (
                <span>{technology.name}</span>
              ))}
            </>
          ) : null}
        </LandingPage>
      </Page>
    </Layout>
  );
}
