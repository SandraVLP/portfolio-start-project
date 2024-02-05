import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import { myTheme } from "../styles/Theme";
import { StyledButton } from "../components/Button";
import { Logo } from "../components/Logo";

export function Header() {
  return (
    <StyledHeader>
      <Logo/>
      <StyledNav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/service">Service</a>
          </li>
          <li>
            <a href="/work">My work</a>
          </li>
          <li>
            <StyledButton width="146px" as="a"  href="/resume">Resume</StyledButton>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${myTheme.secondary};
  display: flex;
  justify-content: space-around;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;


  li {
    margin-right: 30px;
    &:first-child {
      color: ${myTheme.primary};
    }
  }

  a {
    
  }
`;

