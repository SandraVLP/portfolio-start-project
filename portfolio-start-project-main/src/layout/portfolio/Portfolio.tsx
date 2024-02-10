import styled from "styled-components";
import Fitness from "../../assets/images/fitness.png";
import Puma from "../../assets/images/puma.png";
import Sight from "../../assets/images/sight.jpeg";
import Yoga from "../../assets/images/yoga.jpeg";
import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MyTitle } from "../../components/MyTitle";
import { Container } from "../../components/Container";


export function Portfolio() {
  return (
    <section id="works" className="Portfolio">
      <Container>
        <FlexWrapper direction="column">
          <MyTitle text="My recent works" />
          <StyledList>
            <li><Link href="#all">All</Link></li>
            <li><Link href="#uxdes" >UX/UI Design</Link></li>
            <li><Link href="#webdes">Web Design</Link></li>
            <li><Link href="#frontend">Front End Development</Link></li>
          </StyledList>
          <FlexWrapper
            wrap="wrap"
            margin="95px auto"
            justify="center"
            gap="25px"
          >
            <StyledImg src={Fitness} alt="Fitness"></StyledImg>
            <StyledImg src={Sight} alt="Sight"></StyledImg>
            <StyledImg src={Puma} alt="Puma"></StyledImg>
            <StyledImg src={Yoga} alt="Yoga"></StyledImg>
          </FlexWrapper>
          <StyledButton color={myTheme.colors.white} width="214px">
            See more
          </StyledButton>
        </FlexWrapper>
      </Container>
    </section>
  );
}

const StyledList = styled.ul`
  margin-top: 75px;
  li {
    margin-right: 40px;
  }



  
`;
const Link = styled.a `
font-size: 18px;
font-weight: 500;
line-height: 30px;


    &:hover {
      text-decoration: underline;
    color: ${myTheme.colors.primary};
    }
    

  
`

const StyledImg = styled.img`
  width: 50%;
  max-width: 545px;
  max-height: 350px;
  border: solid 1px ${myTheme.colors.grey};
  border-radius: 36px;
`;
