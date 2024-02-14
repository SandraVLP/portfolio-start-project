import styled from "styled-components";
import { myTheme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Services = styled.section`
  ${FlexWrapper} {
    ${FlexWrapper} {
      div {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

const List = styled.div`
  margin-bottom: 120px;
  display: flex;

  @media ${myTheme.media.mobile} {
    flex-direction: column;
    gap: 20px;
  }

  div {
    display: flex;
    align-items: center;
    max-width: 300px;
    margin-right: 30px;

    @media ${myTheme.media.tablet} {
      margin-right: 10px;
    }

    img {
      width: 120px;
      border-radius: 20px;
      padding: 25px;
      background-color: rgba(45, 76, 255, 0.13);

      @media ${myTheme.media.tablet} {
        width: 90px;
      }
      @media ${myTheme.media.mobile} {
        width: 120px;
      }
    }

    &:first-child {
      img {
        background-color: rgba(15, 191, 97, 0.2);
      }
    }

    &:last-child {
      margin-right: 0;

      img {
        background-color: rgba(15, 191, 97, 0.05);
      }
    }
  }

  p {
    font-size: calc((100vw - 360px) / (1440 - 360) * (20 - 16) + 16px);
    font-weight: 500;
    margin-left: 30px;

    @media ${myTheme.media.tablet} {
      margin-left: 10px;
    }
  }
`;


export const S = {
    Services,
    List
}