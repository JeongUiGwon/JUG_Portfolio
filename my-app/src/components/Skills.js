import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import TechStack from "./TechStack";

const StyledSkills = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f9c51d;
`;

const StyledSkillsContent = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 64px 32px;
`;

const StyledSkillsInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  height: 900px;
`;

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <StyledSkillsContent>
        <ContentTitle title="SKILLS" sectionId="skills" underline="black" />
        <StyledSkillsInfo>
          <TechStack
            title="Frontend"
            alt="frontend"
            src="/images/frontend_tech_stack.png"
          />
          <TechStack
            title="Backend"
            alt="backend"
            src="/images/backend_tech_stack.png"
          />
          <TechStack
            title="Deployment"
            alt="deployment"
            src="/images/deployment_tech_stack.png"
          />
          <TechStack
            title="Version Control"
            alt="version-control"
            src="/images/versionControl_tech_stack.png"
          />
          <TechStack
            title="Communication"
            alt="communication"
            src="/images/communication_tech_stack.png"
          />
        </StyledSkillsInfo>
      </StyledSkillsContent>
    </StyledSkills>
  );
};

export default Skills;
