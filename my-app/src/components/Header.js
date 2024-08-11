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
    color: "White", // hover 시 색상 변경
  },
}));

const navLinks = [
  { href: "#", name: "About me" },
  { href: "#", name: "Skills" },
  { href: "#", name: "Archive" },
  { href: "#", name: "Projects" },
  { href: "#", name: "Career" },
];

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledLink href="#" underline="none" fontSize="24px" color="#FFFFFFB2">
          JUG's portfolio
        </StyledLink>
        <StyledNav>
          {navLinks.map((link) => {
            return (
              <StyledLink
                href={link.href}
                underline="none"
                padding="0px 16px"
                color="#FFFFFFB2"
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
