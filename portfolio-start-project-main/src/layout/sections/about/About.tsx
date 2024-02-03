import styled from "styled-components";
import FotoAbout from "../../../assets//images/foto-about.jpg"

export function About() {
  return (
    <StyledAbout className="About">
     
      <StyledImg src={FotoAbout} alt="Foto about"></StyledImg>
      <StyledContainer className="text-container">
      <h2>About me</h2>
      <p>
        Hello! My name is Rostam Sadiqi and I am a UX/UI designer and Front End
        Developer. I enjoy creating things that live on the internet. An
        experienced Software Engineer with a demonstrated history of working in
        the Computer Software industry. Skilled in Web Design, UX/UI design, and
        Front-end Development. Specialize in Information Security and software
        engineering, creating dynamic and beautiful web pages. I have been in
        the field for nearly 5 years, and have been loving every minute of it.{" "}
      </p>
      </StyledContainer>
    </StyledAbout>
  );
}

const StyledAbout = styled.section `
  display: flex;
  justify-content: space-around;
  padding-top: 140px;
  padding-bottom: 140px;
`

const StyledImg = styled.img `
  max-width: 280px;
  border-radius: 20px;
`

const StyledContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 550px;
`