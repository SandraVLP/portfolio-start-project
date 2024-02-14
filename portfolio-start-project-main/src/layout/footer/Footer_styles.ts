import styled from "styled-components";
import { myTheme } from "../../styles/Theme";


const Footer = styled.footer`
  height: 25vh;
  padding: 60px 0;
  background-color: ${myTheme.colors.secondary};

small {
  font-weight: 500;
  font-size: calc((100vw - 360px) /  (1440 - 360) * (18 - 14) + 14px);
}


`;

const SocialLink = styled.a`
color: ${myTheme.colors.primary};
border: 2px solid ${myTheme.colors.primary};
border-radius: 5px;
width: 35px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  cursor: pointer;
  color: ${myTheme.colors.black.light};
border: 2px solid ${myTheme.colors.black.light};
transform: translateY(-4px);
}
`;


export const S = {
    SocialLink,
    Footer
}