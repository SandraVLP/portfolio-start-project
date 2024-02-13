import React from "react";
import { Logo } from "../../components/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DekstopMenu } from "./dekstopMenu/DekstopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

import { S } from "./Header_styles";

export const Header: React.FC = () => {
  return (
    <S.Header id="home">
      <Container>
        <FlexWrapper wrap="wrap">
          <Logo />
          <DekstopMenu />
          <MobileMenu />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
