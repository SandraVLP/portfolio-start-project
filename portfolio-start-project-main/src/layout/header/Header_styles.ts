import styled from "styled-components";
import { myTheme } from "../../styles/Theme";

const Header = styled.header`
  background-color: ${myTheme.colors.secondary};
  padding: 15px 0;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;

`;

export const S = {
    Header
}