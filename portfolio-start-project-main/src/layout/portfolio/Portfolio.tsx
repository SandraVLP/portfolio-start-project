import styled from "styled-components";
import Fitness from "../../assets/images/fitness.png";
import Puma from "../../assets/images/puma.png";
import Sight from "../../assets/images/sight.jpeg";
import Yoga from "../../assets/images/yoga.jpeg";
import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MyTitle } from "../../components/MyTitle";

export function Portfolio() {
  return (
    <section id="works" className="Portfolio">
      <MyTitle text="My recent works"/>
      <StyledList>
        <li>All</li>
        <li>UX/UI Design</li>
        <li>Web Design</li>
        <li>Front End Development</li>
      </StyledList>

      <FlexWrapper wrap="wrap" margin="95px auto" justify="center" gap="25px">
        {" "}
        <StyledImg src={Fitness}></StyledImg>
        <StyledImg src={Sight}></StyledImg>
        <StyledImg src={Puma}></StyledImg>
        <StyledImg src={Yoga}></StyledImg>
      </FlexWrapper>

      <StyledButton color={myTheme.white} width="214px">
        See more
      </StyledButton>
    </section>
  );
}

const StyledList = styled.ul`
margin-top: 75px;
  li {
    margin-right: 40px;
  }
`;



const StyledImg = styled.img`
  width: 50%;
  max-width: 545px;
  max-height: 350px;
  border: solid 1px ${myTheme.grey};
  border-radius: 36px;
`;
