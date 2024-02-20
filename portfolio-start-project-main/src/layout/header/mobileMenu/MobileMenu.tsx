import React, { useState } from "react";
import { S } from "./MobileMenu_styles";
import { MenuList } from "../menu/Menu";

export const MobileMenu: React.FC = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerButtonClick = () => {setMenuIsOpen(!menuIsOpen)

  }
  return (
    <S.Menu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerButtonClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={menuIsOpen}>
        <MenuList />
      </S.MobileMenuPopup>
    </S.Menu>
  );
};
