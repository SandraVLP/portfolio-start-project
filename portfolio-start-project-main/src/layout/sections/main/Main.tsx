import MainFoto from "../../../assets/images/foto-main.jpg";
import MainBigFoto from "../../../assets/images/MainPhoto@2.jpg";
import { StyledButton } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import {S} from "./Main_styles"
import React from "react";
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
  return (
    <S.Main id="main">
      <Container>
        <FlexWrapper gap="90px" wrap="wrap" justify="center">
          <S.Info className="Info">
            <span>Hello, I’m</span>
            <h1>Fabio Scaletta Web developer</h1>
            <p>
              I’m a UX/UI designer and Front End Developer based in Kuala
              Lumpur, Malaysia! 🇲🇾. I love designing, coding, creating and
              building stuff.
            </p>
            <StyledButton>Send Email</StyledButton>
          </S.Info>
          <Tilt> <img src={MainFoto} srcSet={`${MainBigFoto} 2x`} alt="Main Foto"></img></Tilt>
         
        </FlexWrapper>
      </Container>
    </S.Main>
  );
}

// const StyledMain = styled.section`
// display: flex;
// /* min-height: 100vh; */
//   padding-top: 50px;
//   padding-bottom: 90px;
//   background-color: ${myTheme.colors.secondary};

//   @media ${myTheme.media.tablet}{

//     ${FlexWrapper} {
//       flex-direction: column;
//       gap: 30px;
//     }

//     ${StyledButton} {
//       align-self: flex-end;
//       width: 160px;
//     }
//   }

//   span {
//     font-size: calc((100vw - 360px) /  (1440 - 360) * (30 - 25) + 25px);
//     font-weight: 400;
//     color: ${myTheme.colors.primary};


//   }

//   p {
//     margin-top: 20px;
//     margin-bottom: 30px;

//     @media ${myTheme.media.tablet}{
//       margin-top: 10px;
//     margin-bottom: 15px;
//     }
//   }

//   img {
//     object-fit: cover;
//     max-width: 548px;
//     border-radius: 24px;

//     @media ${myTheme.media.tablet}{
//       max-width: 450px;
//     }

//     @media ${myTheme.media.mobile}{
//       max-width: 350px;
//     }
//   }
// `;

// const StyledInfo = styled.div`
//   max-width: 470px;



//   @media ${myTheme.media.tablet}{
//       display: flex;
//     flex-direction: column;
//     }



//     span {
//       text-align: center;
//     }
// `;
