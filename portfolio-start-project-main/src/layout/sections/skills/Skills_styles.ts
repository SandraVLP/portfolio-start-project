import styled from "styled-components";
import { myTheme } from "../../../styles/Theme";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  justify-items: center;
  @media ${myTheme.media.tablet} {
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 20px;
  }

  svg {
    @media ${myTheme.media.tablet} {
      width: 100px;
      height: 100px;
    }
  }
`;

export const S = {
    Grid,
}