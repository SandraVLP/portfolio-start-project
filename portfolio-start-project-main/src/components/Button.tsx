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
  padding: 12px 40px;
  border-radius: 50px;
  gap: 10px;
  border: none;
  background-color:${(props) => props.bgcolor || myTheme.colors.primary};
  cursor: pointer;
  text-decoration: none;
  font-family: Roboto, sans-serif;
font-size: calc((100vw - 360px) /  (1440 - 360) * (18 - 14) + 14px);
font-weight: 500;

  &:hover{
    cursor: pointer;
    opacity: 50%;
  }

  @media ${myTheme.media.tablet} {
    padding: 10px 25px;
    
  }
`;
