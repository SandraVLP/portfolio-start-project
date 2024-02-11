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
text-align: ${props =>  props.align || "center"};

`
    
