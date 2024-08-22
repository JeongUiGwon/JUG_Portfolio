import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import ArchiveLink from "./ArchiveLink";

const StyledArchive = styled.section`
  display: flex;
  justify-content: center;
  background-color: #222222;
`;

const StyledArhciveContent = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 64px 32px;
`;

const StyledArchiveInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Archive = () => {
  const githubDescription = `
    <p>
        <b>소스 코드 저장소</b>입니다.
    </p>
    <ul>
        <li>프로젝트, 프로그램, 앱의 소스 코드</li>
        <li>코딩 연습의 과거 흔적</li>
        <li>각종 부트 캠프를 통해 구현한 프로젝트들</li>
    </ul>
    `;

  const tistoryDescrition = `
    <p>
        <b>지식 공유 목적의 기술 블로그</b>입니다.
    </p>
    <ul>
        <li>알고리즘 문제 기록 보관소</li>
        <li>CS 전공 지식 백과사전</li>
        <li>개발자로서 성장 과정</li>
    </ul>
    `;

  return (
    <StyledArchive id="archive">
      <StyledArhciveContent>
        <ContentTitle
          title="ARCHIVE"
          sectionId="archive"
          titleColor="#ffffff"
          borderBottomColor="#6c757d"
          hoverColor="white"
        />
        <StyledArchiveInfo>
          <ArchiveLink
            imageSrc="/images/git-hub.png"
            imageAlt="git-hub"
            url="https://github.com/JeongUiGwon"
            Description={
              <div dangerouslySetInnerHTML={{ __html: githubDescription }} />
            }
          />
          <ArchiveLink
            imageSrc="/images/tistory.png"
            imageAlt="tistory"
            url="https://uigwonblog.tistory.com/"
            Description={
              <div dangerouslySetInnerHTML={{ __html: tistoryDescrition }} />
            }
          />
        </StyledArchiveInfo>
      </StyledArhciveContent>
    </StyledArchive>
  );
};

export default Archive;
