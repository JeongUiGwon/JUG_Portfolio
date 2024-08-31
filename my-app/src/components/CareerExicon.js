import styled from "styled-components";

const CareerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  jusify-content: center;
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

const CareerExicon = () => {
  return (
    <CareerWrapper>
      <CareerLogoContainer>
        <CareerLogoWrapper>
          <img
            alt="EXICON logo"
            src={process.env.PUBLIC_URL + "/images/EXICON_logo.png"}
            width="95%"
          />
        </CareerLogoWrapper>
      </CareerLogoContainer>
      <StyledCareerInfo>
        <StyledCareerInfoTitle>(주) 엑시콘</StyledCareerInfoTitle>
        <StyledCareerInfoPeriod>2023.07 ~ 현재</StyledCareerInfoPeriod>
        <StyledCareerInfoDescription>
          <b>Global Test Solution Provider</b>로 반도체 테스터 제조회사입니다.
          <br />
          <br />
          다양한 반도체 Test Solution 중에서도{" "}
          <b>SSD(Solid State Drive) Test Solution</b>을 제공하고 있습니다.
          고객사에게 <b>Linux OS 기반 SSD Test Solution 라이브러리</b>와{" "}
          <b>디바이스 드라이버</b> 개발 및 유지/보수 업무 를 책임지고 있습니다.
          주로 맡고 있는 SSD 프로토콜은 <b>NVMe/SAS/SATA</b> 입니다.
        </StyledCareerInfoDescription>
        <StyledCareerInfoWork>
          <h4>▎NVMe/SAS/SATA 라이브러리 및 디바이스 드라이버 개발/유지/보수</h4>
          <StyledCareerInfoWorkPeriod>
            2023.07 ~ 현재
          </StyledCareerInfoWorkPeriod>
          <li style={{ marginBottom: "8px" }}>
            NVMe/SAS/SATA Test Solution 라이브러리 개발(C++ 언어)
          </li>
          <li style={{ marginBottom: "8px" }}>
            Linux OS 기반 NVMe/SAS/SATA 디바이스 드라이버 개발(C 언어)
          </li>
          <li style={{ marginBottom: "8px" }}>
            Linux OS 기반 Shell 프로그래밍
          </li>
          <li style={{ marginBottom: "8px" }}>
            SSD Test Solution Script 작성(C++ 언어)
          </li>
          <li style={{ marginBottom: "8px" }}>GitLab과 JIRA 형상 관리 담당</li>
          <li style={{ marginBottom: "8px" }}>Release Note 관리 및 작성</li>
        </StyledCareerInfoWork>
      </StyledCareerInfo>
    </CareerWrapper>
  );
};

export default CareerExicon;
