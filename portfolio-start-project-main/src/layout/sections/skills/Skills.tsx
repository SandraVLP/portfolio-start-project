import styled from "styled-components";
import { Icon } from "../../../components/Icon";
import { MyTitle } from "../../../components/MyTitle";
import { Container } from "../../../components/Container";
import { myTheme } from "../../../styles/Theme";

export function Skills() {
  return (
    <section id="skills" className="Skills">
      <Container>
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
      </Container>
    </section>
  );
}


const StyledGrid = styled.div`
  margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  justify-items: center;
  @media ${myTheme.media.tablet} {
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 20px;
  }

  svg {
    @media ${myTheme.media.tablet} {
      width: 100px;
      height: 100px;
    }
  }
`;
