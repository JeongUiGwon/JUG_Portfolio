import styled from "styled-components";
import LinkIcon from "@mui/icons-material/Link";

const StyledTitleContent = styled.div`
  font-size: 48px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  border-bottom: 1px solid ${(props) => props.borderBottomColor || "#cccccc"};
  position: relative;
  margin-bottom: 48px;
`;

const StyledLinkIcon = styled(LinkIcon)(({ theme }) => ({
  position: "absolute",
  left: "-60px",
  top: "25%",
  cursor: "pointer",
  color: "#828282",
  "&:hover": {
    color: "#212529", // hover 시 색상 변경
  },
}));

const ContentTitle = ({ title, sectionId, underline }) => {
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
      <StyledTitle borderBottomColor={underline ? "black" : "#cccccc"}>
        <StyledLinkIcon
          sx={{ fontSize: 42 }}
          onClick={() => scrollToSection(sectionId)}
        />
        {title}
      </StyledTitle>
    </StyledTitleContent>
  );
};

export default ContentTitle;
