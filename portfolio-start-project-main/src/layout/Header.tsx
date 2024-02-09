import styled from "styled-components";
import { myTheme } from "../styles/Theme";
import { StyledButton } from "../components/Button";
import { Logo } from "../components/Logo";
import { Container } from "../components/Container";
import { FlexWrapper } from "../components/FlexWrapper";

export function Header() {
  return (
    <StyledHeader id="home">
      <Container>
        <FlexWrapper>
          <Logo />
          <StyledNav>
            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#service">Service</Link>
              </li>
              <li>
                <Link href="#works">My work</Link>
              </li>
              <li>
                <Link href="#contacts">Contacts</Link>
              </li>
              <li>
                <StyledButton width="146px" as="a" href="/resume">
                  Resume
                </StyledButton>
              </li>
            </ul>
          </StyledNav>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${myTheme.secondary};
  padding: 15px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
`;

const StyledNav = styled.nav`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    margin-right: 30px;
  }
`;

const Link = styled.a`
    &:hover {
    color: ${myTheme.primary};
    }
`;
