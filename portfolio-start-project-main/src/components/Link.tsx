import styled from "styled-components"
import { myTheme } from "../styles/Theme"

type LinkPropsType = {
    href?: string
    title?: string
}

export const Link = (props:LinkPropsType) => {
  return (
    <StyledLink href={props.href}>{props.title}</StyledLink>
  )
}

const StyledLink = styled.a`
    text-decoration: none;
      color: ${myTheme.black.dark};



`