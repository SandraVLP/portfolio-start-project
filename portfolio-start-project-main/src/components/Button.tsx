import styled from "styled-components";
import { myTheme } from "../styles/Theme";

type StyleBtnPropsType = {
  width?: string;
  color?: string;
};

export const StyledButton = styled.button<StyleBtnPropsType>`
  width: ${(props) => props.width};
  height: 54px;
  color: ${(props) => props.color || myTheme.black.dark};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  padding: 12px 40px 12px 40px;
  border-radius: 50px;
  gap: 10px;
  border: none;
  background-color: ${myTheme.primary};
  cursor: pointer;
  text-decoration: none;
`;
