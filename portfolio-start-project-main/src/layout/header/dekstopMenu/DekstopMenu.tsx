import { MenuList } from '../menu/Menu';
import React from "react";
import { S } from "./DekstopMenu_styles"

export const DekstopMenu: React.FC = () => {
  return (
    <S.Menu>
   <MenuList />
    </S.Menu>
  );
};



