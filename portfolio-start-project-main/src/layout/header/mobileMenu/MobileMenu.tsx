import React from "react";
import { S } from "./MobileMenu_styles";
import { MenuList } from "../menu/Menu";

export const MobileMenu: React.FC = () => {
  return (
    <S.Menu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <MenuList />
      </S.MobileMenuPopup>
    </S.Menu>
  );
};
