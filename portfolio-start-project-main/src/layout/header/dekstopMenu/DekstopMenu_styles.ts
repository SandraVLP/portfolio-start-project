import styled from "styled-components";
import { myTheme } from "../../../styles/Theme";

const Menu = styled.nav`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media ${myTheme.media.mobile} {
    display: none;
  }
`;

export const S = {
    Menu
}