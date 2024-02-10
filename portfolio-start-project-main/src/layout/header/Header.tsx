import styled from "styled-components";
import { myTheme } from "../../styles/Theme";
import { Logo } from "../../components/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DekstopMenu } from "./dekstopMenu/DekstopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export function Header() {
  return (
    <StyledHeader id="home">
      <Container>
        <FlexWrapper wrap="wrap">
          <Logo />
          <DekstopMenu/>
          <MobileMenu/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${myTheme.colors.secondary};
  padding: 15px 0;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;

`;


