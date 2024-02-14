import styled from "styled-components";
import { myTheme } from "../../../styles/Theme";

const Description = styled.div`
  width: 100%;
  border: solid 1px ${myTheme.colors.grey};
  border-radius: 30px;
  position: relative;
  padding: 50px;
  margin-bottom: 110px;
  display: flex;
  gap:80px;
  

  @media ${myTheme.media.tablet} {
    padding: 30px;
    gap:30px;
   margin-bottom: 80px;
  }

  @media ${myTheme.media.mobile} {
    position: static;
    flex-direction: column-reverse;
    padding: 30px;
    gap:30px;
    height: 100%;
    align-items: center;
  }

  p {
    text-transform: uppercase;
    font-weight: 400;
    font-size: calc((100vw - 360px) /  (1440 - 360) * (16 - 14) + 14px);
  }

  svg {
    margin-left: 25px;
  }
  a {
    font-weight: 500;
    font-size: calc((100vw - 360px) /  (1440 - 360) * (20 - 16) + 16px);

    @media ${myTheme.media.mobile} {
    text-align:right;
  }
}

`;

const Image = styled.img`

  max-width: 554px;
  max-height: 390px;
  position: absolute;
  top: -45px;
  right: 50px;
  border-radius: 20px;
  width: 50%;
  object-fit: cover;

  @media ${myTheme.media.tablet} {
    top: -35px;
  right: 30px;
  max-height: 225px;
  }

  @media ${myTheme.media.mobile} {
    position: static;
    width: 100%;
  }

`;

const TextDescription = styled.h3`
  margin: 35px 0 70px 0;



  @media ${myTheme.media.tablet} {
    margin: 25px 0 30px 0;
    font-size: 20px;
    line-height: 25px;
  }

  @media ${myTheme.media.mobile} {
    margin: 15px 0 20px 0;
    font-size: 25px;
    text-align:center;
  }
`;

const Info = styled.div`
  width: 40%;
  max-width: 380px;

  @media ${myTheme.media.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

`;

export const S = {
    Description,
    Image,
    TextDescription,
    Info
}