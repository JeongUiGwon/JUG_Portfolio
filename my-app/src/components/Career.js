import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import CareerUlvac from "./CareerUlvac";
import CareerExicon from "./CareerExicon";
import CareerSemics from "./CareerSemics";

const StyledCareer = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
`;

const StyledCareerContent = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 64px 32px;
`;

const StyledCareerInfo = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Career = () => {
  return (
    <StyledCareer id="career">
      <StyledCareerContent>
        <ContentTitle title="CAREER" sectionId="career" />
        <StyledCareerInfo>
          <CareerUlvac />
          <CareerExicon />
          <CareerSemics />
        </StyledCareerInfo>
      </StyledCareerContent>
    </StyledCareer>
  );
};

export default Career;
