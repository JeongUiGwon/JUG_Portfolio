import styled from "styled-components";
import LinkIcon from "@mui/icons-material/Link";

const StyledTitleContent = styled.div`
  font-family: blackHanSans;
  font-size: 48px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  border-bottom: 1px solid ${(props) => props.borderBottomColor};
  position: relative;
  margin-bottom: 48px;
  color: ${(props) => props.titleColor};
`;

const StyledLinkIcon = styled(LinkIcon)(({ theme, hoverColor }) => ({
  position: "absolute",
  left: "-60px",
  top: "25%",
  cursor: "pointer",
  color: "#828282",
  "&:hover": {
    color: hoverColor || "#212529",
  },
}));

const ContentTitle = ({
  title,
  sectionId,
  titleColor,
  borderBottomColor,
  hoverColor,
}) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const scrollPositionValue = section.offsetTop - headerHeight;

      window.scrollTo({
        top: scrollPositionValue,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledTitleContent>
      <StyledTitle
        borderBottomColor={borderBottomColor}
        titleColor={titleColor}
      >
        <StyledLinkIcon
          sx={{ fontSize: 42 }}
          onClick={() => scrollToSection(sectionId)}
          hoverColor={hoverColor}
        />
        {title}
      </StyledTitle>
    </StyledTitleContent>
  );
};

export default ContentTitle;
