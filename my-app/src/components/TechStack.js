import styled from "styled-components";

const StyledSkillsStacks = styled.div`
  width: 272px;
  padding: 24px;
  margin: 0 auto 32px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 16px 16px 16px 0 rgba(68, 68, 68, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(8px);
  }
`;

const StyledSkillsStacksTitle = styled.div`
  padding-bottom: 8px;
  margin-bottom: 24px;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 24px;
  color: #f4623a;
  text-align: left;
`;
const TechStack = ({ title, alt, src }) => {
  return (
    <StyledSkillsStacks>
      <StyledSkillsStacksTitle>{title}</StyledSkillsStacksTitle>
      <img alt={alt} src={process.env.PUBLIC_URL + src} width="100%" />
    </StyledSkillsStacks>
  );
};

export default TechStack;
