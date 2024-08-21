import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: "#FF5733",
      },
      name: "salmon",
    }),
  },
});

const StyledIntroduce = styled.section`
  width: 100%;
  height: 400px;
  background-image: linear-gradient(
      180deg,
      rgba(112, 93, 80, 0.5) 0,
      rgba(112, 93, 80, 0.5) 90%
    ),
    url("${process.env.PUBLIC_URL}/images/background_table.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 136px 32px 64px 32px;
`;

const StyledIntroduceContent = styled.div``;

const StyledTitle = styled.div`
  color: white;
  font-size: 64px;
  font-weight: bold;
`;

const StyledHr = styled.hr`
  width: 60px;
  height: 3px;
  background-color: #f4623a;
  border: none;
`;

const StyledDescription = styled.div`
  color: #ffffffbf;
  font-size: 20px;
  margin-bottom: 32px;
`;

const Introduce = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <StyledIntroduce id="introduce">
        <StyledIntroduceContent>
          <StyledTitle>
            - 정의권 - <br /> 임베디드 개발자 포트폴리오
          </StyledTitle>
          <StyledHr />
          <StyledDescription>
            안녕하세요.
            <br />
            도전적인 임베디드 개발자, 정의권입니다.
          </StyledDescription>
          <Button
            variant="contained"
            color="salmon"
            sx={{
              borderRadius: "50px",
              padding: "16px 32px",
              fontSize: "16px",
            }}
            onClick={() => scrollToSection("about-me")}
          >
            더 알아보기 ↓
          </Button>
        </StyledIntroduceContent>
      </StyledIntroduce>
    </ThemeProvider>
  );
};

export default Introduce;
