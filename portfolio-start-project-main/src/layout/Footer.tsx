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
            <SocialLink>
              <Icon
              aria-label={"Linkedin"}
                iconId="in"
                width="17px"
                height="17px"
                viewbox="0 0 17px 17px"
              ></Icon>
            </SocialLink>
            <SocialLink>
              <Icon
              aria-label={"Telegram"}
                iconId="tg"
                width="17px"
                height="17px"
                viewbox="0 0 17px 17px"
              ></Icon>
            </SocialLink>
            {/* <img src={Tele}></img> */}
            <SocialLink>
              <Icon
              aria-label={"Vkontakte"}
                iconId="vk"
                width="17px"
                height="17px"
                viewbox="0 0 17px 17px"
              ></Icon>
            </SocialLink>
            <SocialLink>
              <Icon aria-label={"Instagram"}
                iconId="inst"
                width="17px"
                height="17px"
                viewbox="0 0 17px 17px"
              ></Icon>
            </SocialLink>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  height: 10vh;
  padding: 60px 0;
  background-color: ${myTheme.secondary};
`;

const SocialLink = styled.a`
color: ${myTheme.primary};
border: 2px solid ${myTheme.primary};
border-radius: 5px;
width: 35px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  cursor: pointer;
  color: ${myTheme.black.light};
border: 2px solid ${myTheme.black.light};
transform: translateY(-4px);
}
`;
