import styled from "styled-components";
import { myTheme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/Button";

export const DekstopMenu = () => {
  return (
    <Menu>
      <ul>
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
      </ul>
    </Menu>
  );
};

const Menu = styled.nav`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    margin-right: 30px;

    &:last-child {
      margin: 0;
    }
    @media ${myTheme.media.tablet} {
      margin-right: 13px; //Некрасивая цифра
    }
  }

  @media ${myTheme.media.tablet} {
    font-size: 16px;
  }
`;

const Link = styled.a`
  &:hover {
    color: ${myTheme.colors.primary};
  }
`;
