import styledComponents from "styled-components";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledProjectWrapper = styledComponents.div`
  background-color: #fff;
  padding: 48px;
  margin: 0 auto 32px;
  border-radius: 16px;
  box-shadow: 16px 16px 16px 0 rgba(68, 68, 68, 0.2);
`;

const StyledProjectTitle = styledComponents.div`
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 40px;
  font-family: blackHanSans;
`;

const StyledProjectPeriod = styledComponents.div`
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 16px;
  color: #6c757d;
  opacity: 0.8;
`;

const StyledProjectInfo = styledComponents.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StyledProjectImage = styledComponents.div`
  width: 50%;
  margin-right: 48px;
`;

const StyeldProjectDescription = styledComponents.div`
  width: calc(50% - 48px);
`;

const StyeldProjectDescriptionMain = styledComponents.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
`;

const ProjectRed = styledComponents.span`
  color: #ed3770;
`;

const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "#343a40",
  },
}));

const StyledProjectDescriptionItem = styledComponents.div`
  display: flex;
  margin-bottom: 16px;
`;

const StyledProjectDescriptionItemLabel = styledComponents.div`
  width: 135px;
  font-weight: 900;
  font-size: 16px;
  text-align: left;
`;

const StyledProjectDescriptionItemValue = styledComponents.div`
  width: calc(100% - 135px);
  font-weight: 400;
  text-align: left;
`;

const ProjectPortfolio = () => {
  return (
    <StyledProjectWrapper>
      <StyledProjectTitle>Portfolio WebSite</StyledProjectTitle>
      <StyledProjectPeriod>2024.08 (1인 개인 프로젝트)</StyledProjectPeriod>
      <StyledProjectInfo>
        <StyledProjectImage>
          <img
            alt="portfolio"
            src={process.env.PUBLIC_URL + "/images/portfolio_image.png"}
            width="100%"
          />
        </StyledProjectImage>
        <StyeldProjectDescription>
          <StyeldProjectDescriptionMain>
            <b>현재 보고 계신 포트폴리오 웹사이트</b>입니다.
            <p />이 프로젝트를 통해 <ProjectRed>React</ProjectRed> 라이브러리의
            다양한 기능과 <ProjectRed>styled-components</ProjectRed>를 이용한
            세련된 스타일링 기법을 익혔습니다. 또한, 여러{" "}
            <ProjectRed>JavaScript</ProjectRed> 문법을 적용하여 코드의 효율성과
            가독성을 높이는 데 집중했습니다. 제 작업을 통해 웹 개발에 대한 저의
            열정과 기술을 확인해 보세요!
            <p />
            <BlackButton variant="contained">자세히 보기 ▶</BlackButton>
          </StyeldProjectDescriptionMain>
          <StyledProjectDescriptionItem>
            <StyledProjectDescriptionItemLabel>
              ✔ 주요 기능
            </StyledProjectDescriptionItemLabel>
            <StyledProjectDescriptionItemValue>
              자기 소개, 기술 스택, GitHub 및 TISTORY, <br />
              Project 경험, 업무 경력
            </StyledProjectDescriptionItemValue>
          </StyledProjectDescriptionItem>

          <StyledProjectDescriptionItem>
            <StyledProjectDescriptionItemLabel>
              ✔ GitHub
            </StyledProjectDescriptionItemLabel>
            <StyledProjectDescriptionItemValue>
              <a href="https://github.com/JeongUiGwon/JUG_Portfolio">
                https://github.com/JeongUiGwon/JUG_Portfolio
              </a>
            </StyledProjectDescriptionItemValue>
          </StyledProjectDescriptionItem>

          <StyledProjectDescriptionItem>
            <StyledProjectDescriptionItemLabel>
              ✔ URL
            </StyledProjectDescriptionItemLabel>
            <StyledProjectDescriptionItemValue>
              <a href="https://jeonguigwon.github.io/JUG_Portfolio/">
                https://jeonguigwon.github.io/JUG_Portfolio/
              </a>
            </StyledProjectDescriptionItemValue>
          </StyledProjectDescriptionItem>

          <StyledProjectDescriptionItem>
            <StyledProjectDescriptionItemLabel>
              ✔ Frontend
            </StyledProjectDescriptionItemLabel>
            <StyledProjectDescriptionItemValue>
              React, JavaScript, Material UI
            </StyledProjectDescriptionItemValue>
          </StyledProjectDescriptionItem>
        </StyeldProjectDescription>
      </StyledProjectInfo>
    </StyledProjectWrapper>
  );
};

export default ProjectPortfolio;
