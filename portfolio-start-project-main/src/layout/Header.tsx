import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import { myTheme } from "../styles/Theme";

export function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="logo"></img>
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
            <a href="/resume">Resume</a>
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
  ul {
    li > a {
      text-decoration: none;
      color: ${myTheme.black.dark};
      
    }
  }

  li {
    margin-right: 30px;
    &:first-child {
      color: ${myTheme.primary};
    }
    &:last-child {
      background: ${myTheme.primary};
      width: 146px;
      text-align: center;
      border-radius: 50px;
      margin-right: 0;
    }
  }
`;

