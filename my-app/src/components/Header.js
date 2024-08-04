import React from "react";
import styled from "styled-components";
import { Link } from "@mui/material";

const StyledHeader = styled.header``;

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
        <Link href="#" underline="none" fontSize="24px">
          JUG's portfolio
        </Link>
        <StyledNav>
          {navLinks.map((link) => {
            return (
              <Link href={link.href} underline="none" padding="0px 16px">
                {link.name}
              </Link>
            );
          })}
        </StyledNav>
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;
