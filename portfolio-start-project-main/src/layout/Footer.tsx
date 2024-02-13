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
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
              ></Icon>
            </SocialLink>
            <SocialLink>
              <Icon
              aria-label={"Telegram"}
                iconId="tg"
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
              ></Icon>
            </SocialLink>
            <SocialLink>
              <Icon
              aria-label={"Vkontakte"}
                iconId="vk"
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
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
  height: 25vh;
  padding: 60px 0;
  background-color: ${myTheme.colors.secondary};

small {
  font-weight: 500;
  font-size: calc((100vw - 360px) /  (1440 - 360) * (18 - 14) + 14px);
}


`;

const SocialLink = styled.a`
color: ${myTheme.colors.primary};
border: 2px solid ${myTheme.colors.primary};
border-radius: 5px;
width: 35px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  cursor: pointer;
  color: ${myTheme.colors.black.light};
border: 2px solid ${myTheme.colors.black.light};
transform: translateY(-4px);
}
`;
