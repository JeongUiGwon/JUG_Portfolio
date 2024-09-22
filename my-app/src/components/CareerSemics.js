import styled from "styled-components";

const CareerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  jusify-content: center;
  margin-bottom: 100px;
`;

const CareerLogoContainer = styled.div`
  padding-right: 48px;
  border-right: 1px solid #ccc;
`;

const CareerLogoWrapper = styled.div`
  display: flex;
  flex-flow: colmn nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 240px;
  height: 240px;
  border: 1px solid #ccc;
  border-radius: 160px;
  background-color: #fff;
`;

const StyledCareerInfo = styled.div`
  padding-left: 48px;
`;

const StyledCareerInfoTitle = styled.div`
  padding-bottom: 8px;
  font-weight: 900;
  font-size: 24px;
  text-align: left;
`;

const StyledCareerInfoPeriod = styled.div`
  padding-bottom: 16px;
  font-weight: 400;
  font-size: 18px;
  color: #6c757d;
  text-align: left;
`;

const StyledCareerInfoDescription = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
  text-align: left;
`;

const StyledCareerInfoWork = styled.div`
  padding-left: 0px;
  text-align: left;
`;

const StyledCareerInfoWorkPeriod = styled.h5`
  font-size: 15px;
  font-weight: 400;
  color: #6c757d;
`;

const CareerSemics = () => {
  return (
    <CareerWrapper>
      <CareerLogoContainer>
        <CareerLogoWrapper>
          <img
            alt="SEMICS logo"
            src={process.env.PUBLIC_URL + "/images/SEMICS_logo.png"}
            width="95%"
          />
        </CareerLogoWrapper>
      </CareerLogoContainer>
      <StyledCareerInfo>
        <StyledCareerInfoTitle>쎄믹스</StyledCareerInfoTitle>
        <StyledCareerInfoPeriod>2020.09 ~ 2022.03</StyledCareerInfoPeriod>
        <StyledCareerInfoDescription>
          <b>EDS 공정 Wafer Prober</b> Global 반도체 장비 회사입니다.
          <br />
          <br />
          <b>해외 CS 엔지니어</b>로 근무하였으며, 해외 Customer와의 소통과 기술
          지원 업무를 맡았습니다. 주된 업무는 Wafer Prober 장비 이슈 대응
          업무였으며, <b>반도체 설비 파라미터 검증 SW 개발</b> 프로젝트도
          진행하였습니다.
        </StyledCareerInfoDescription>
        <StyledCareerInfoWork>
          <h4>▎반도체 설비 파라미터 검증 SW 개발</h4>
          <StyledCareerInfoWorkPeriod>
            2020.09 ~ 2020.12
          </StyledCareerInfoWorkPeriod>
          <li style={{ marginBottom: "8px" }}>
            반도체 설비 파라미터 검증 Window 기반 프로그램 개발(C# WPF)
          </li>
        </StyledCareerInfoWork>
        <StyledCareerInfoWork>
          <h4>▎해외 고객사 현장 지원 및 이슈 대응</h4>
          <StyledCareerInfoWorkPeriod>
            2020.09 ~ 2020.12
          </StyledCareerInfoWorkPeriod>
          <li style={{ marginBottom: "8px" }}>
            Wafer Prober 설비 셋업 및 유지/보수
          </li>
          <li style={{ marginBottom: "8px" }}>
            Wafer Prober 설비 이슈 Trouble Shooting
          </li>
        </StyledCareerInfoWork>
        <StyledCareerInfoWork>
          <h4>▎해외 고객사 엔지니어 교육 및 지원</h4>
          <StyledCareerInfoWorkPeriod>
            2020.09 ~ 2020.12
          </StyledCareerInfoWorkPeriod>
          <li style={{ marginBottom: "8px" }}>SOP 메뉴얼 등 제작</li>
          <li style={{ marginBottom: "8px" }}>고객사 엔지니어 장비 교육</li>
        </StyledCareerInfoWork>
      </StyledCareerInfo>
    </CareerWrapper>
  );
};

export default CareerSemics;
