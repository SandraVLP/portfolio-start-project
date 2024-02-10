import styled from "styled-components"
import { myTheme } from "../styles/Theme"

type TitlePropsType = {
    text?: string
    align?: string
}

export const MyTitle = (props:TitlePropsType) => {
  return (
    <StyledTitle>{props.text}</StyledTitle>
  )
}

const StyledTitle = styled.h2<TitlePropsType>`
  color:${myTheme.colors.primary};
  font-family: Roboto;
font-size: 40px;
font-weight: 700;
line-height: 30px;
text-align: ${props =>  props.align || "center"};

`
    
