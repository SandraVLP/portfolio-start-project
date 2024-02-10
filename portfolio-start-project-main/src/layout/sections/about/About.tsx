import styled from "styled-components";
import FotoAbout from "../../../assets//images/foto-about.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { myTheme } from "../../../styles/Theme";
import { MyTitle } from "../../../components/MyTitle";
import { Container } from "../../../components/Container";

export function About() {
  return (
    <StyledAbout id="about" className="About">
      <Container>
        <FlexWrapper
          padding="140px 0 0 0"
          align="flex-start"
          justify="center"
          gap="160px"
        >
          <Photowrapper className="foto-container">
            <StyledImg src={FotoAbout} alt="Foto about"></StyledImg>
          </Photowrapper>
          <FlexWrapper
            direction="column"
            justify="flex-start"
            maxwidth="550px"
            align="flex-start"
            gap="40px"
          >
            <MyTitle text="About me"></MyTitle>
            <p>
              Hello! My name is Rostam Sadiqi and I am a UX/UI designer and
              Front End Developer. I enjoy creating things that live on the
              internet. An experienced Software Engineer with a demonstrated
              history of working in the Computer Software industry. Skilled in
              Web Design, UX/UI design, and Front-end Development. Specialize in
              Information Security and software engineering, creating dynamic
              and beautiful web pages. I have been in the field for nearly 5
              years, and have been loving every minute of it.{" "}
            </p>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
}

const StyledAbout = styled.section`
  @media ${myTheme.media.tablet}{
   ${FlexWrapper}:first-child {
    gap:30px;
    padding: 100px 0 0 0;
   }

   ${FlexWrapper}:nth-child(2) {
    gap: 10px;
    padding: 0;
   }
  }

  

`

const StyledImg = styled.img`
  max-width: 280px;
  border-radius: 20px;

  @media ${myTheme.media.tablet}{
    max-width: 200px;
  }

`;

const Photowrapper = styled.div`
position: relative;
z-index: 0;
 &::before {
  content: "";
  border: solid 3px ${myTheme.colors.primary};
  width: 280px;
  height: 420px; 
  border-radius: 20px;
  position: absolute;
  bottom: -40px;
  right: 50px;
  z-index: -1;

  @media ${myTheme.media.tablet}{
    width: 200px;
    height: 300px; 
    bottom: -20px;
  right: 30px;
  }

 }



`;
