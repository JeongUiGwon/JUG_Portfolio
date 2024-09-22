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

const CareerUlvac = () => {
  return (
    <CareerWrapper>
      <CareerLogoContainer>
        <CareerLogoWrapper>
          <img
            alt="ULVAC logo"
            src={process.env.PUBLIC_URL + "/images/ULVAC_logo.png"}
            width="95%"
          />
        </CareerLogoWrapper>
      </CareerLogoContainer>
      <StyledCareerInfo>
        <StyledCareerInfoTitle>(주) ULVAC</StyledCareerInfoTitle>
        <StyledCareerInfoPeriod>2024.10 ~ 현재</StyledCareerInfoPeriod>
        <StyledCareerInfoDescription>
          <b>세계 최고의 진공 기술</b>을 보유한 일본 기업입니다.
          <br />
          <br />
          세계 최고의 진공 기술을 기반으로 <b>Etching과 PVD 장비</b> 등을 필두로
          반도체 장비를 제공합니다. 1952년에 설립된 이래, ULVAC는 진공 시스템,
          진공 펌프, 측정 장비 및 소재 관련 솔루션을 개발하여 글로벌 시장에서
          중요한 위치를 차지하고 있습니다.
        </StyledCareerInfoDescription>
        <StyledCareerInfoWork>
          <h4>▎반도체 설비 제어 Software 설계</h4>
          <StyledCareerInfoWorkPeriod>
            2024.10 ~ 현재
          </StyledCareerInfoWorkPeriod>
          <li style={{ marginBottom: "8px" }}>GitLab과 JIRA 형상 관리 담당</li>
          <li style={{ marginBottom: "8px" }}>Release Note 관리 및 작성</li>
        </StyledCareerInfoWork>
      </StyledCareerInfo>
    </CareerWrapper>
  );
};

export default CareerUlvac;
