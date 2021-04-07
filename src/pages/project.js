import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import ReactTooltip from "react-tooltip";
import { FiChevronLeft, FiChevronRight, FiSmile } from "react-icons/fi";

import Layout from "../components/layout";
import ProjectListContext from "../context/ProjectListContext";
import { Link } from "gatsby";

const Page = styled.div`
  display: flex;
  justify-content: center;
`;

const LandingPage = styled.div`
  display: flex;
  max-width: 112rem;
  flex-direction: column;
  width: 100%;
  padding: 12px;
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

const EmptyProjectsView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkContent = styled.span`
  color: black;
  text-decoration: underline;
`;

export default function Projects({ location }) {
  const [position, setPosition] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (location.state == null) return;
    setPosition(location.state.index || 0);
    setSelectedProject(location.state.project || null);
  }, [location]);

  function updateSelectedProject(project, position) {
    setPosition(position);
    setSelectedProject(project);
  }

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
      </Helmet>

      <Page>
        <LandingPage>
          <ProjectListContext.Consumer>
            {(projects) => {
              if (
                projects.projectList != null &&
                projects.projectList.length > 0
              ) {
                if (selectedProject == null) {
                  updateSelectedProject(
                    projects.projectList[position].node,
                    position
                  );
                }

                return (
                  <ProjectCarousel>
                    {position - 1 < 0 ? (
                      <>
                        <span data-tip data-for="projects-beginning">
                          <FiSmile />
                        </span>
                        <ReactTooltip
                          id="projects-beginning"
                          place="bottom"
                          type="dark"
                          effect="solid"
                        >
                          <span>Beginning of projects</span>
                        </ReactTooltip>
                      </>
                    ) : (
                      <ProjectCarouselItem
                        onClick={() =>
                          updateSelectedProject(
                            projects.projectList[position - 1].node,
                            position - 1
                          )
                        }
                      >
                        <FiChevronLeft />
                        <span>
                          {projects.projectList[position - 1].node.title}
                        </span>
                      </ProjectCarouselItem>
                    )}
                    {position + 1 < projects.projectList.length ? (
                      <ProjectCarouselItem
                        onClick={() =>
                          updateSelectedProject(
                            projects.projectList[position + 1].node,
                            position + 1
                          )
                        }
                      >
                        <span>
                          {projects.projectList[position + 1].node.title}
                        </span>
                        <FiChevronRight />
                      </ProjectCarouselItem>
                    ) : (
                      <>
                        <span data-tip data-for="projects-end">
                          <FiSmile />
                        </span>
                        <ReactTooltip
                          id="projects-end"
                          place="bottom"
                          type="dark"
                          effect="solid"
                        >
                          <span>End of projects</span>
                        </ReactTooltip>
                      </>
                    )}
                  </ProjectCarousel>
                );
              }

              return null;
            }}
          </ProjectListContext.Consumer>

          {selectedProject ? (
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Projects | {selectedProject.title}</title>
              </Helmet>
              <ProjectTitle>{selectedProject.title}</ProjectTitle>
              <ProjectDescription>
                {selectedProject.description}
              </ProjectDescription>
              <TechnologiesTitle>Technologies</TechnologiesTitle>
              {selectedProject.technologies.map((technology, index) => (
                <span key={index}>{technology.name}</span>
              ))}
            </>
          ) : (
            <EmptyProjectsView>
              <FiSmile />
              <div>No project selected</div>
              <Link to="/">
                <LinkContent>Go home</LinkContent>
              </Link>
            </EmptyProjectsView>
          )}
        </LandingPage>
      </Page>
    </Layout>
  );
}
