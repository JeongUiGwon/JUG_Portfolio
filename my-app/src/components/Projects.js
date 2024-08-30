import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import ProjectPortfolio from "./ProjectPortfolio";

const StyledProjects = styled.section`
  display: flex;
  justify-content: center;
  background-color: #1d809f;
`;

const StyledProjectsContent = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 64px 32px;
`;

const StyledProjectsInfo = styled.div``;

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <StyledProjectsContent>
        <ContentTitle
          title="PROJECTS"
          sectionId="projects"
          titleColor="#ffffff"
          borderBottomColor="#cccccc"
          iconColor="#97c0d0"
          hoverColor="white"
        />
        <StyledProjectsInfo>
          <ProjectPortfolio />
        </StyledProjectsInfo>
      </StyledProjectsContent>
    </StyledProjects>
  );
};

export default Projects;
