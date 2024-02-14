import { Icon } from "../../components/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Footer_styles";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper>
          <small>Designed and developed by Rostam Sadiqi 2021</small>
          <FlexWrapper gap="20px" width="fit-content">
            <S.SocialLink>
              <Icon
              aria-label={"Linkedin"}
                iconId="in"
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
              ></Icon>
            </S.SocialLink>
            <S.SocialLink>
              <Icon
              aria-label={"Telegram"}
                iconId="tg"
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
              ></Icon>
            </S.SocialLink>
            <S.SocialLink>
              <Icon
              aria-label={"Vkontakte"}
                iconId="vk"
                width="21px"
                height="21px"
                viewbox="0 0 21px 21px"
              ></Icon>
            </S.SocialLink>
            <S.SocialLink>
              <Icon aria-label={"Instagram"}
                iconId="inst"
                width="17px"
                height="17px"
                viewbox="0 0 17px 17px"
              ></Icon>
            </S.SocialLink>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
}
