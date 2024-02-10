import styled from "styled-components";
import { myTheme } from "../styles/Theme";

type StyleBtnPropsType = {
  width?: string;
  color?: string;
  bgcolor?: string;
};

export const StyledButton = styled.button<StyleBtnPropsType>`
  width: ${(props) => props.width || "170px"};;
  height: 54px;
  color: ${(props) => props.color || myTheme.colors.black.dark};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  padding: 12px 40px;
  border-radius: 50px;
  gap: 10px;
  border: none;
  background-color:${(props) => props.bgcolor || myTheme.colors.primary};
  cursor: pointer;
  text-decoration: none;

  &:hover{
    cursor: pointer;
    opacity: 50%;
  }

  @media ${myTheme.media.tablet} {
    padding: 10px 25px;
    font-size: 16px;
    
  }
`;
