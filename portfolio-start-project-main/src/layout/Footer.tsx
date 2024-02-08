import styled from "styled-components";
import { Icon } from "../components/Icon";
import { myTheme } from "../styles/Theme";
import { FlexWrapper } from "../components/FlexWrapper";
import { Container } from "../components/Container";
// import Tele from "../assets/images/telegram-svgrepo-com.svg";

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper>
          <small>Designed and developed by Rostam Sadiqi 2021</small>
          <FlexWrapper gap="20px" width="fit-content">
            <Icon
              iconId="be"
              width="22px"
              height="22px"
              viewbox="0 0 22 22"
            ></Icon>
            <Icon
              iconId="tele"
              width="22px"
              height="22px"
              viewbox="0 0 22 22"
            ></Icon>
            {/* <img src={Tele}></img> */}
            <Icon
              iconId="in"
              width="22px"
              height="22px"
              viewbox="0 0 22 22"
            ></Icon>
            <Icon
              iconId="inst"
              width="22px"
              height="22px"
              viewbox="0 0 22 22"
            ></Icon>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  height: 10vh;
  background-color: ${myTheme.secondary};
  
`;
