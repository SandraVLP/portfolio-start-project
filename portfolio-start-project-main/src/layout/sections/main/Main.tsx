import styled from "styled-components";
import MainFoto from "../../../assets/images/foto-main.jpg";

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
        <StyledBtn>Send E-mail</StyledBtn>
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
  background-color: rgba(15, 191, 97, 0.1);
`;
const StyledSpan = styled.span`
  color: rgba(15, 191, 97, 1);
`;

const StyledBtn = styled.button`
  width: 170px;
  height: 54px;
  padding: 12px 40px 12px 40px;
  border-radius: 50px;
  gap: 10px;
  border: none;
  background-color: rgba(15, 191, 97, 1);
`;

const StyledImg = styled.img `
    max-width: 548px;
    border-radius: 24px;
`

const StyledInfo = styled.div `
    max-width: 480px;
`