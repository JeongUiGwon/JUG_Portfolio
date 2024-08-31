import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 176px;
  padding-top: 48px;
  background-color: #222;
  text-align: center;
`;

const StyledFooterIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const StyledFooterIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  padding: 2px;
  margin: 0 8px;
  border-radius: 32px;
  cursor: pointer;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fff"};

  &:hover {
    opacity: 0.8;
  }
`;

const STyledFooterCopyright = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: #f5f5f5;
`;

const Footer = () => {
  const handleClick = (url) => {
    if (url) {
      window.open(url, "_blank"); // 새 탭에서 URL 열기
    }
  };

  return (
    <StyledFooter>
      <StyledFooterIcon>
        <StyledFooterIconWrapper
          onClick={() => handleClick("https://github.com/JeongUiGwon")}
        >
          <img
            alt="git-hub icon"
            src={process.env.PUBLIC_URL + "/images/git-hub_icon.png"}
            width="100%"
          />
        </StyledFooterIconWrapper>

        <StyledFooterIconWrapper
          backgroundColor="#222"
          onClick={() => handleClick("https://uigwonblog.tistory.com/")}
        >
          <img
            alt="Tistory icon"
            src={process.env.PUBLIC_URL + "/images/tistory_icon.png"}
            width="100%"
          />
        </StyledFooterIconWrapper>

        <StyledFooterIconWrapper
          backgroundColor="#222"
          onClick={() =>
            handleClick("https://www.instagram.com/euikwon_jeong/")
          }
        >
          <img
            alt="instagram icon"
            src={process.env.PUBLIC_URL + "/images/instagram_icon.png"}
            width="100%"
          />
        </StyledFooterIconWrapper>
      </StyledFooterIcon>
      <STyledFooterCopyright>
        © 2024. Ui Gwon Jeong. All rights reserved.
      </STyledFooterCopyright>
    </StyledFooter>
  );
};

export default Footer;
