import React, { useState } from "react";

const ProjectListContext = React.createContext({
  setProjectList: () => {},
});

function ProjectListProvider({ children }) {
  const [projectList, setProjectList] = useState([]);

  return (
    <ProjectListContext.Provider
      value={{
        projectList,
        setProjectList: (p) => setProjectList(p),
      }}
    >
      {children}
    </ProjectListContext.Provider>
  );
}

export default ProjectListContext;
export { ProjectListProvider };
