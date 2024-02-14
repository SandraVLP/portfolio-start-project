import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import { myTheme } from "../styles/Theme";
import React from "react";

export const Logo: React.FC = () => {
  return (
    <a href='/home'>
<Image src={logo} alt="logo"></Image>
    </a>

  )
}

const Image = styled.img`
  @media ${myTheme.media.tablet} {
    width: 35px;
    
  }

`
