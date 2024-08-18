import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "@mui/material";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "white" : "transparent"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 1px .3rem hsla(0,0%,80%,.8)" : "none"};
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

const StyledLink = styled(Link)`
  transition: color 0.3s ease;
  &:hover {
    color: ${({ isScrolled }) => (isScrolled ? "#ff5733" : "white")};
  }
`;

const navLinks = [
  { href: "about-me", name: "About me" },
  { href: "introduce", name: "Skills" },
  { href: "introduce", name: "Archive" },
  { href: "introduce", name: "Projects" },
  { href: "introduce", name: "Career" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHeader isScrolled={isScrolled}>
      <StyledHeaderContent>
        <StyledLink
          component="button"
          underline="none"
          fontSize="24px"
          isScrolled={isScrolled}
          color={isScrolled ? "#453a33" : "#FFFFFFB2"}
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
                isScrolled={isScrolled}
                color={isScrolled ? "#453a33" : "#FFFFFFB2"}
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
