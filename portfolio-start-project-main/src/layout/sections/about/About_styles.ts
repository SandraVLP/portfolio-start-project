import styled from "styled-components";
import { myTheme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

const About = styled.section`
  @media ${myTheme.media.tablet} {
    ${FlexWrapper}:first-child {
      gap: 30px;
      padding: 100px 0 0 0;
    }

    ${FlexWrapper}:nth-child(2) {
      gap: 10px;
      padding: 0;
    }
  }
`;

const Image = styled.img`
  max-width: 280px;
  border-radius: 20px;

  @media ${myTheme.media.tablet} {
    max-width: 200px;
  }
`;

const Photowrapper = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    border: solid 3px ${myTheme.colors.primary};
    width: 280px;
    height: 420px;
    border-radius: 20px;
    position: absolute;
    bottom: -40px;
    right: 50px;
    z-index: -1;

    @media ${myTheme.media.tablet} {
      width: 200px;
      height: 300px;
      bottom: -20px;
      right: 30px;
    }
  }
`;


export const S = {
    About,
    Image,
    Photowrapper
}