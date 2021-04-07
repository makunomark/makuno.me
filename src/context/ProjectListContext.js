import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

const ProjectListContext = React.createContext({
  setProjectList: () => {},
});

function ProjectListProvider({ children }) {
  const [projectList, setProjectList] = useState([]);

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

  useEffect(() => {
    setProjectList(myProjectsData);
  }, []);

  return (
    <ProjectListContext.Provider
      value={{
        projectList,
      }}
    >
      {children}
    </ProjectListContext.Provider>
  );
}

export default ProjectListContext;
export { ProjectListProvider };
