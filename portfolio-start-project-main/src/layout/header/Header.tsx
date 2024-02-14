import React from "react";
import { Logo } from "../../components/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DekstopMenu } from "./dekstopMenu/DekstopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

import { S } from "./Header_styles";

export const Header: React.FC = () => {
const [width, setWidth] = React.useState(window.innerWidth);
const breakpoint = 576;

React.useEffect(() => {
  const HandleWindowResize = () => setWidth(window.innerWidth)
  window.addEventListener("resize", HandleWindowResize);
  return() => window.removeEventListener("resize", HandleWindowResize)
}, [])


  return (
    <S.Header id="home">
      <Container>
        <FlexWrapper wrap="wrap">
          <Logo />
          {width < breakpoint ? <MobileMenu />  :  <DekstopMenu />}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
