import Fitness from "../../assets/images/fitness.png";
import Puma from "../../assets/images/puma.png";
import Sight from "../../assets/images/sight.jpeg";
import Yoga from "../../assets/images/yoga.jpeg";
import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MyTitle } from "../../components/MyTitle";
import { Container } from "../../components/Container";
import { S } from "./Portfolio_styles";

export function Portfolio() {
  return (
    <section id="works" className="Portfolio">
      <Container>
        <FlexWrapper direction="column">
          <MyTitle text="My recent works" />
          <S.List>
            <li>
              <S.Link href="#all">All</S.Link>
            </li>
            <li>
              <S.Link href="#uxdes">UX/UI Design</S.Link>
            </li>
            <li>
              <S.Link href="#webdes">Web Design</S.Link>
            </li>
            <li>
              <S.Link href="#frontend">Front End Development</S.Link>
            </li>
          </S.List>
          <FlexWrapper
            wrap="wrap"
            justify="center"
            gap="25px"
            padding="0 0 95px 0"
          >
            <S.Image src={Fitness} alt="Fitness"></S.Image>
            <S.Image src={Sight} alt="Sight"></S.Image>
            <S.Image src={Puma} alt="Puma"></S.Image>
            <S.Image src={Yoga} alt="Yoga"></S.Image>
          </FlexWrapper>
          <StyledButton color={myTheme.colors.white}>See more</StyledButton>
        </FlexWrapper>
      </Container>
    </section>
  );
}
