import styled from "styled-components";
import { myTheme } from "../styles/Theme";
import { StyledButton } from "../components/Button";
import { Logo } from "../components/Logo";
import { Link } from "../components/Link";

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <ul>
          <li>
            <Link href="/home" title="Home"/>
          </li>
          <li>
          <Link href="/about" title="About"/>
          </li>
          <li>
          <Link href="/service" title="Service"/>
          </li>
          <li>
          <Link href="/work" title="My work"/>
          </li>
          <li>
            <StyledButton width="146px" as="a" href="/resume">
              Resume
            </StyledButton>
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
      a:only-child {
    color: ${myTheme.primary}; 
  } 
    } 
  }


`;
