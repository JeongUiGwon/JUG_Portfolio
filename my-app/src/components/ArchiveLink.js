import styled from "styled-components";

const StyledUrl = styled.div`
  text-align: left;
  margin-bottom: 16px;
`;

const StyledLink = styled.a`
  width: 416px;
  padding: 32px;
  background-color: white;
  border-radius: 16px;
  text-decoration: none;
  color: #258ddb;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(8px);

    ${StyledUrl} {
      text-decoration: underline;
    }
  }
`;

const StyledImageWrapper = styled.div`
  width: 192px;
  margin-bottom: 16px;
`;

const StyledDescription = styled.div`
  text-align: left;
  color: black;
`;

const ArchiveLink = ({ imageSrc, imageAlt, url, Description }) => {
  return (
    <StyledLink href={url}>
      <StyledImageWrapper>
        <img
          alt={imageAlt}
          src={process.env.PUBLIC_URL + imageSrc}
          width="100%"
        />
      </StyledImageWrapper>
      <StyledUrl>{url}</StyledUrl>
      <StyledDescription>{Description}</StyledDescription>
    </StyledLink>
  );
};

export default ArchiveLink;
