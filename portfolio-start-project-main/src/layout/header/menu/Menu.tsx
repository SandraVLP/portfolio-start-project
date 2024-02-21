import styled from "styled-components";
import { myTheme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/Button";
import React from "react";
import { Link } from "react-scroll";

export const MenuList: React.FC = () => {
  return (
      <StyledUl>
        <li>
          <NavLink to="main" smooth={true} activeClass="active" spy={true}>Home</NavLink>
        </li>
        <li>
          <NavLink to="about" smooth={true} activeClass="active" spy={true}>About</NavLink>
        </li>
        <li>
          <NavLink to="skills" smooth={true} activeClass="active" spy={true}>Skills</NavLink>
        </li>
        <li>
          <NavLink to="service" smooth={true} activeClass="active" spy={true}>Service</NavLink>
        </li>
        <li>
          <NavLink to="works" smooth={true} activeClass="active" spy={true}>My work</NavLink>
        </li>
        <li>
          <NavLink to="contacts" smooth={true} activeClass="active" spy={true}>Contacts</NavLink>
        </li>
        <li>
          <StyledButton as="a" href="/resume">
            Resume
          </StyledButton>
        </li>
      </StyledUl>

  );
};

const StyledUl = styled.ul`

  li {
    margin-right: 30px;

    &:last-child {
      margin: 0;
    }
    @media ${myTheme.media.tablet} {
      margin-right: 13px; //Некрасивая цифра
    }
  }

`;

const NavLink = styled(Link)`
cursor: pointer;
font-size: calc((100vw - 360px) /  (1440 - 360) * (18 - 14) + 14px);
  &:hover, &.active {
    color: ${myTheme.colors.primary};
  }
`;