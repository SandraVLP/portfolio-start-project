import styled from "styled-components";
import { myTheme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/Button";

export const MenuList = () => {
  return (
      <StyledUl>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#service">Service</Link>
        </li>
        <li>
          <Link href="#works">My work</Link>
        </li>
        <li>
          <Link href="#contacts">Contacts</Link>
        </li>
        <li>
          <StyledButton as="a" href="/resume">
            Resume
          </StyledButton>
        </li>
      </StyledUl>

  );
};

const StyledUl = styled.ul`

  li {
    margin-right: 30px;

    &:last-child {
      margin: 0;
    }
    @media ${myTheme.media.tablet} {
      margin-right: 13px; //Некрасивая цифра
    }
  }

`;

const Link = styled.a`
font-size: calc((100vw - 360px) /  (1440 - 360) * (18 - 14) + 14px);
  &:hover {
    color: ${myTheme.colors.primary};
  }
`;