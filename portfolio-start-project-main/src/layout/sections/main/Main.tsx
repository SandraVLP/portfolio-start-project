import styled from "styled-components";
import MainFoto from "../../../assets/images/foto-main.jpg";
import { myTheme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/Button";

export function Main() {
  return (
    <StyledMain>
      <div className="Info">
        <span>Hello, I’m</span>
        <h1>Fabio Scaletta Web developer</h1>
        <p>
          I’m a UX/UI designer and Front End Developer based in Kuala Lumpur,
          Malaysia! 🇲🇾. I love designing, coding, creating and building stuff.{" "}
        </p>
        <StyledButton width={"170px"}>Send E-mail</StyledButton>
      </div>
      <img src={MainFoto} alt="Main Foto"></img>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding-top: 50px;
  padding-bottom: 90px;
  display: flex;
  justify-content: space-around;
  background-color: ${myTheme.secondary};
  align-items: center;
  justify-content: center;

  div {
    max-width: 480px;
  }

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
    max-width: 548px;
    border-radius: 24px;
  }
`;
