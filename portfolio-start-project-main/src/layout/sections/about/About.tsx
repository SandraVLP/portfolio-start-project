import FotoAbout from "../../../assets//images/foto-about.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { MyTitle } from "../../../components/MyTitle";
import { Container } from "../../../components/Container";
import { S } from "./About_styles";
import FotoAboutBig from "../../../assets/images/aboutphoto@2.jpg"
import React from "react";


export const About: React.FC = () => {
  return (
    <S.About id="about" className="About">
      <Container>
        <FlexWrapper
          padding="140px 0 0 0"
          align="flex-start"
          justify="center"
          gap="160px"
        >
          <S.Photowrapper className="foto-container">
            <S.Image src={FotoAbout} srcSet={`${FotoAboutBig} 2x`} alt="Foto about"></S.Image>
          </S.Photowrapper>
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
    </S.About>
  );
}
