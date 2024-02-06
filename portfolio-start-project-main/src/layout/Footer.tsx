import styled from "styled-components";
import { Icon } from "../components/Icon";
import { myTheme } from "../styles/Theme";
import { FlexWrapper } from "../components/FlexWrapper";

export function Footer() {
  return (
    <StyledFooter>
      <small>Designed and developed by Rostam Sadiqi 2021</small>
      
        <FlexWrapper>
          <Icon
            iconId="ball"
            width="22px"
            height="22px"
            viewbox="0 0 22 22"
          ></Icon>
          <Icon
            iconId="be"
            width="22px"
            height="22px"
            viewbox="0 0 22 22"
          ></Icon>
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
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  height: 10vh;
  background-color: ${myTheme.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
  }
  
`;
