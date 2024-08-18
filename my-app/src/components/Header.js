import React from "react";
import styled from "styled-components";
import { Link } from "@mui/material";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  padding: 20px 30px;
`;

const StyledNav = styled.nav`
  font-size: 16px;
`;

const StyledLink = styled(Link)(({ theme }) => ({
  "&:hover": {
    color: "White",
  },
}));

const navLinks = [
  { href: "about-me", name: "About me" },
  { href: "introduce", name: "Skills" },
  { href: "introduce", name: "Archive" },
  { href: "introduce", name: "Projects" },
  { href: "introduce", name: "Career" },
];

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledLink
          component="button"
          underline="none"
          fontSize="24px"
          color="#FFFFFFB2"
          onClick={() => scrollToSection("introduce")}
        >
          JUG's portfolio
        </StyledLink>
        <StyledNav>
          {navLinks.map((link) => {
            return (
              <StyledLink
                component="button"
                underline="none"
                color="#FFFFFFB2"
                sx={{ padding: "0px 16px" }}
                onClick={() => scrollToSection(link.href)}
              >
                {link.name}
              </StyledLink>
            );
          })}
        </StyledNav>
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;
