import styled from "styled-components";
import { myTheme } from "../../styles/Theme";

const List = styled.ul`
  li {
    margin-right: 40px;

    &:last-child{
      margin-right: 0;

    }
    @media ${myTheme.media.mobile} {
    margin: 0;
width: 50%;
      text-align: center;
    }
  }

  margin-bottom: 95px;

  @media ${myTheme.media.tablet} {

    margin-bottom: 40px;
    
  }

  @media ${myTheme.media.mobile} {
    
  display: flex;
  flex-wrap: wrap;
    
  }
`;
const Link = styled.a`
  font-weight: 500;
  font-size: calc((100vw - 360px) / (1440 - 360) * (18 - 14) + 14px);

  &:hover {
    text-decoration: underline;
    color: ${myTheme.colors.primary};
  }
`;

const Image = styled.img`
width: 50%;
  max-width: 545px;
  max-height: 350px;
  border: solid 1px ${myTheme.colors.grey};
  border-radius: 36px;


  @media ${myTheme.media.tablet} {

    width: 100%;
    
  }
`;

export const S = {
    List,
    Link,
    Image
}