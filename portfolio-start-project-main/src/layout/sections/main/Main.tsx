import styled from "styled-components";
import MainFoto from "../../../assets/images/foto-main.jpg";
import { myTheme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export function Main() {
  return (
    <StyledMain id="main">
      <Container>
        <FlexWrapper gap="90px">
          <StyledInfo className="Info">
            <span>Hello, I’m</span>
            <h1>Fabio Scaletta Web developer</h1>
            <p>
              I’m a UX/UI designer and Front End Developer based in Kuala
              Lumpur, Malaysia! 🇲🇾. I love designing, coding, creating and
              building stuff.
            </p>
            <StyledButton width={"170px"}>Send Email</StyledButton>
          </StyledInfo>
          <img src={MainFoto} alt="Main Foto"></img>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding-top: 50px;
  padding-bottom: 90px;
  background-color: ${myTheme.secondary};

  span {
    font-size: 30px;
    font-weight: 400;
    line-height: 35px;
    color: ${myTheme.primary};
  }

  p {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  img {
    object-fit: contain;
    max-width: 548px;
    height: auto;
    border-radius: 24px;
  }
`;

const StyledInfo = styled.div`
  max-width: 470px;
`;
