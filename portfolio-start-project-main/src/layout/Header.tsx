import styled from "styled-components";
import { myTheme } from "../styles/Theme";
import { StyledButton } from "../components/Button";
import { Logo } from "../components/Logo";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { FlexWrapper } from "../components/FlexWrapper";

export function Header() {
  return (
    <StyledHeader id="home">
      <Container>
        <FlexWrapper justify="space-between">
          <Logo />
          <StyledNav>
            <ul>
              <li>
                <Link href="#home" title="Home" />
              </li>
              <li>
                <Link href="#about" title="About" />
              </li>
              <li>
                <Link href="#skills" title="Skills" />
              </li>
              <li>
                <Link href="#service" title="Service" />
              </li>
              <li>
                <Link href="#works" title="My work" />
              </li>
              <li>
                <Link href="#contacts" title="Contacts" />
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
  padding-top: 20px;
`;

const StyledNav = styled.nav`
font-family: Roboto;
font-size: 18px;
font-weight: 500;
line-height: 21px;


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
