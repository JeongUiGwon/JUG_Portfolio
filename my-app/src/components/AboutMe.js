import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import ContentTitle from "./ContentTitle";

const StyledAboutMe = styled.section`
  display: flex;
  justify-content: center;
`;

const StyledAboutMeContent = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 64px 32px;
`;

const StyledAboutMeInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const StyledAboutMeInfoContent = styled.div`
  flex: 0 1 calc(33.33% - 16px);
  margin-bottom: 32px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 1/3%;
  max-width: 224px;
  margin: 0 auto;
`;

const StyledAboutMeInfoField = styled.div`
  text-align: left;
`;

const StyledFieldTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #505457;
  margin-bottom: 10px;
`;

const StyledFieldDescription = styled.div`
  font-size: 16px;
  color: #505457;
`;

const StyledAboutMeDescription = styled.div`
  background-color: #f0c9c9;
  padding: 16px;
  font-weight: 700;
`;

const AboutMe = () => {
  return (
    <StyledAboutMe id="about-me">
      <StyledAboutMeContent>
        <ContentTitle
          title="ABOUT ME"
          sectionId="about-me"
          borderBottomColor="#cccccc"
        />
        <StyledAboutMeInfo>
          <StyledAboutMeInfoContent>
            <StyledInfo>
              <PersonIcon sx={{ fontSize: 32, marginRight: "30px" }} />
              <StyledAboutMeInfoField>
                <StyledFieldTitle>이름</StyledFieldTitle>
                <StyledFieldDescription>정의권</StyledFieldDescription>
              </StyledAboutMeInfoField>
            </StyledInfo>
          </StyledAboutMeInfoContent>

          <StyledAboutMeInfoContent>
            <StyledInfo>
              <CalendarTodayIcon sx={{ fontSize: 32, marginRight: "30px" }} />
              <StyledAboutMeInfoField>
                <StyledFieldTitle>생년월일</StyledFieldTitle>
                <StyledFieldDescription>1994.01.02</StyledFieldDescription>
              </StyledAboutMeInfoField>
            </StyledInfo>
          </StyledAboutMeInfoContent>

          <StyledAboutMeInfoContent>
            <StyledInfo>
              <PlaceIcon sx={{ fontSize: 32, marginRight: "30px" }} />
              <StyledAboutMeInfoField>
                <StyledFieldTitle>주소지</StyledFieldTitle>
                <StyledFieldDescription>
                  경기도 수원시 영통구
                </StyledFieldDescription>
              </StyledAboutMeInfoField>
            </StyledInfo>
          </StyledAboutMeInfoContent>

          <StyledAboutMeInfoContent>
            <StyledInfo>
              <LocalPhoneIcon sx={{ fontSize: 32, marginRight: "30px" }} />
              <StyledAboutMeInfoField>
                <StyledFieldTitle>연락처</StyledFieldTitle>
                <StyledFieldDescription>010-3058-****</StyledFieldDescription>
              </StyledAboutMeInfoField>
            </StyledInfo>
          </StyledAboutMeInfoContent>

          <StyledAboutMeInfoContent>
            <StyledInfo>
              <EmailIcon sx={{ fontSize: 32, marginRight: "30px" }} />
              <StyledAboutMeInfoField>
                <StyledFieldTitle>이메일</StyledFieldTitle>
                <StyledFieldDescription>
                  jek9412@naver.com
                </StyledFieldDescription>
              </StyledAboutMeInfoField>
            </StyledInfo>
          </StyledAboutMeInfoContent>

          <StyledAboutMeInfoContent>
            <StyledInfo>
              <SchoolIcon sx={{ fontSize: 32, marginRight: "30px" }} />
              <StyledAboutMeInfoField>
                <StyledFieldTitle>학력</StyledFieldTitle>
                <StyledFieldDescription>
                  아주대학교
                  <br />
                  (화학공학과)
                </StyledFieldDescription>
              </StyledAboutMeInfoField>
            </StyledInfo>
          </StyledAboutMeInfoContent>
        </StyledAboutMeInfo>
        <StyledAboutMeDescription>
          * 외주 개발 또는 과외/레슨 문의는 위 연락처/이메일로 부탁드립니다.
        </StyledAboutMeDescription>
      </StyledAboutMeContent>
    </StyledAboutMe>
  );
};

export default AboutMe;
