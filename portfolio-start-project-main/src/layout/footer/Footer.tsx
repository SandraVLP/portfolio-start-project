import { Icon } from "../../components/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Footer_styles";
import React from "react";

const socialIconsList = [
  {
    aria: "Linkedin",
    iconId: "in",
    width: "21px",
    height: "21px",
    viewbox: "0 0 21px 21px",
  },
  {
    aria: "Telegram",
    iconId: "tg",
    width: "21px",
    height: "21px",
    viewbox: "0 0 21px 21px",
  },
  {
    aria: "Vkontakte",
    iconId: "vk",
    width: "21px",
    height: "21px",
    viewbox: "0 0 21px 21px",
  },
  {
    aria: "Instagram",
    iconId: "inst",
    width: "17px",
    height: "17px",
    viewbox: "0 0 17px 17px",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper>
          <small>Designed and developed by Rostam Sadiqi 2021</small>
          <FlexWrapper gap="20px" width="fit-content">
            {socialIconsList.map((i, index) => {
              return (
                <S.SocialLink>
                  {" "}
                  <Icon
                    key={index}
                    aria-label={i.aria}
                    iconId={i.iconId}
                    width={i.width}
                    height={i.height}
                    viewbox={i.viewbox}
                  />
                </S.SocialLink>
              );
            })}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
