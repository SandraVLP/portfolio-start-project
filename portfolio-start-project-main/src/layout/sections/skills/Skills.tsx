import styled from "styled-components";
import { Icon } from "../../../components/Icon";
import { MyTitle } from "../../../components/MyTitle";

export function Skills() {
  return (
    <section className="Skills">
      <MyTitle text="Skills"></MyTitle>
      <StyledGrid className="skills-grid">
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
      </StyledGrid>
    </section>
  );
}

const StyledGrid = styled.div`
margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  justify-content: space-around;
`;
