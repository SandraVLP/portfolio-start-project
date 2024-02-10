import styled, { css } from "styled-components";
import { myTheme } from "../../../styles/Theme";
import { StyledButton } from "../../../components/Button";

export const MobileMenu = () => {
  return (
    <Menu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={true}>
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
      </MobileMenuPopup>
    </Menu>
  );
};

const Menu = styled.nav`
  display: none;

  @media ${myTheme.media.mobile} {
    display: block;
  }
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;

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

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  background-color: ${myTheme.colors.secondary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const Link = styled.a`
  &:hover {
    color: ${myTheme.colors.primary};
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;
  border: none;
  background-color: ${myTheme.colors.secondary};

  span {
    background-color: ${myTheme.colors.primary};
    height: 5px;
    width: 36px;
    position: absolute;
    display: block;
    left: 30px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 5px;
      width: 36px;
      background-color: ${myTheme.colors.primary};
      transform: translateY(-10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      height: 5px;
      width: 36px;
      position: absolute;
      background-color: ${myTheme.colors.primary};
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
        `}
    }
  }
`;
