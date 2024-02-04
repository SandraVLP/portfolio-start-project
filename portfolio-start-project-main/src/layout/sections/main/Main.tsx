import styled from "styled-components";
import MainFoto from "../../../assets/images/foto-main.jpg";
import { myTheme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/Button";

export function Main() {
  return (
    <StyledMain>
      <StyledInfo className="Info">
        <StyledSpan>Hello, I’m</StyledSpan>
        <h1>Fabio Scaletta web developer</h1>
        <p>
          I’m a UX/UI designer and Front End Developer based in Kuala Lumpur,
          Malaysia! 🇲🇾. I love designing, coding, creating and building stuff.{" "}
        </p>
        <StyledButton width={"170px"}>Send E-mail</StyledButton>
      </StyledInfo>
      <StyledImg src={MainFoto} alt="Main Foto"></StyledImg>
    </StyledMain>
  );
}

const StyledMain = styled.main`
padding-top: 50px;
padding-bottom: 90px;
  display: flex;
  justify-content: space-around;
  background-color: ${myTheme.secondary}
`;
const StyledSpan = styled.span`
  color: ${myTheme.primary};
`;


const StyledImg = styled.img `
    max-width: 548px;
    border-radius: 24px;
`

const StyledInfo = styled.div `
    max-width: 480px;
`