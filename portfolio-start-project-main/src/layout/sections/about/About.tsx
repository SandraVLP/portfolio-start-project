import styled from "styled-components";
import FotoAbout from "../../../assets//images/foto-about.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { myTheme } from "../../../styles/Theme";
import { MyTitle } from "../../../components/MyTitle";


export function About() {
  return (
    <section id="about" className="About">
      <FlexWrapper padding="140px 0 0 0" align="flex-start" justify="center" gap="160px">
      <StyledRectngle className="foto-container">
       
       <StyledImg src={FotoAbout} alt="Foto about"></StyledImg></StyledRectngle>
     

     <FlexWrapper direction="column" justify="flex-start" maxwidth="550px" align="flex-start" gap="40px">
      <MyTitle text="About me"></MyTitle>
       <p>
         Hello! My name is Rostam Sadiqi and I am a UX/UI designer and Front
         End Developer. I enjoy creating things that live on the internet. An
         experienced Software Engineer with a demonstrated history of working
         in the Computer Software industry. Skilled in Web Design, UX/UI
         design, and Front-end Development. Specialize in Information Security
         and software engineering, creating dynamic and beautiful web pages. I
         have been in the field for nearly 5 years, and have been loving every
         minute of it.{" "}
       </p>
     </FlexWrapper>
      </FlexWrapper>
    </section>
  );
}



const StyledImg = styled.img`
  max-width: 280px;
  border-radius: 20px;
  position: absolute;
  top: -40px;
  left: 50px;
`;

const StyledRectngle = styled.div `
  border: solid 3px ${myTheme.primary};
  width: 280px;
  height: 420px; //Поправить
  border-radius: 20px;
  position: relative;

`