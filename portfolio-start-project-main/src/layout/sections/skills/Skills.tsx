import { Icon } from "../../../components/Icon";
import { MyTitle } from "../../../components/MyTitle";
import { Container } from "../../../components/Container";
import { S } from "./Skills_styles";
import React from "react";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="Skills">
      <Container>
        <MyTitle text="Skills"></MyTitle>
        <S.Grid className="skills-grid">
          <Icon iconId="redux"></Icon>
          <Icon iconId="react-js"></Icon>
          <Icon iconId="react-nat"></Icon>
          <Icon iconId="html"></Icon>
          <Icon iconId="mongo"></Icon>
          <Icon iconId="express"></Icon>
          <Icon iconId="js"></Icon>
          <Icon iconId="git"></Icon>
          <Icon iconId="styled-comp"></Icon>
          <Icon iconId="typescript"></Icon>
        </S.Grid>
      </Container>
    </section>
  );
}

