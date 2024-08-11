import styled from "styled-components";
import LinkIcon from "@mui/icons-material/Link";
import PersonIcon from "@mui/icons-material/Person";

const StyledAboutMe = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledAboutMeContent = styled.div`
  padding: 64px 32px;
`;

const StyledAboutMeTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  position: relative;
  margin-bottom: 48px;
`;

const StyledLinkIcon = styled(LinkIcon)(({ theme }) => ({
  position: "absolute",
  left: "-3rem",
  cursor: "pointer",
  color: "#828282",
  "&:hover": {
    color: "#212529", // hover 시 색상 변경
  },
}));

const StyledAboutMeInfo = styled.div``;

const StyledAboutMeInfoContent = styled.div`
  display: flex;
`;

const StyledAboutMeInfoField = styled.div``;

const StyledFieldTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #505457;
`;

const StyledFieldDescription = styled.div`
  font-size: 16px;
  color: #505457;
`;

const AboutMe = () => {
  return (
    <StyledAboutMe>
      <StyledAboutMeContent>
        <StyledAboutMeTitle>
          <StyledLinkIcon sx={{ fontSize: 42 }} />
          ABOUT ME
        </StyledAboutMeTitle>
        <StyledAboutMeInfo>
          <StyledAboutMeInfoContent>
            <PersonIcon sx={{ fontSize: 32 }} />
            <StyledAboutMeInfoField>
              <StyledFieldTitle>이름</StyledFieldTitle>
              <StyledFieldDescription>정의권</StyledFieldDescription>
            </StyledAboutMeInfoField>
          </StyledAboutMeInfoContent>
        </StyledAboutMeInfo>
      </StyledAboutMeContent>
    </StyledAboutMe>
  );
};

export default AboutMe;
