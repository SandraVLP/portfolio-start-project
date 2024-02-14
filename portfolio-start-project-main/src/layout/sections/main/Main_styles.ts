import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { myTheme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/Button";

const Main = styled.section`
display: flex;
/* min-height: 100vh; */
  padding-top: 50px;
  padding-bottom: 90px;
  background-color: ${myTheme.colors.secondary};

  @media ${myTheme.media.tablet}{

    ${FlexWrapper} {
      flex-direction: column;
      gap: 30px;
    }

    ${StyledButton} {
      align-self: flex-end;
      width: 160px;
    }
  }

  span {
    font-size: calc((100vw - 360px) /  (1440 - 360) * (30 - 25) + 25px);
    font-weight: 400;
    color: ${myTheme.colors.primary};


  }

  p {
    margin-top: 20px;
    margin-bottom: 30px;

    @media ${myTheme.media.tablet}{
      margin-top: 10px;
    margin-bottom: 15px;
    }
  }

  img {
    object-fit: cover;
    max-width: 548px;
    border-radius: 24px;

    @media ${myTheme.media.tablet}{
      max-width: 450px;
    }

    @media ${myTheme.media.mobile}{
      max-width: 350px;
    }
  }
`;

const Info = styled.div`
  max-width: 470px;



  @media ${myTheme.media.tablet}{
      display: flex;
    flex-direction: column;
    }



    span {
      text-align: center;
    }
`;


export const S = {
    Main,
    Info,

}