import styled from "styled-components";
import logo from "../assets/images/Logo.svg";

export function Header() {
  return (
    <StyledHeader>
        <img src={logo} alt="logo"></img>
      <StyledNav>
        
        <ul>
          <StyledLi>
            <StyledA href="">Home</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="">About</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="">Service</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="">My work</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="">Resume</StyledA>
          </StyledLi>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
    background-color: rgba(15, 191, 97, 0.1);
    display: flex;
    justify-content: space-around;

    
;
`

const StyledNav = styled.nav`
        display: flex;
    justify-content: space-between;
    align-items: center;
`



const StyledA = styled.a`
    text-decoration: none;
color: rgba(0, 0, 0, 1);

`

const StyledLi = styled.li`
margin-right: 30px;
&:first-child {
color:rgba(15, 191, 97, 1);}
&:last-child {
    background: rgba(15, 191, 97, 1);
    width: 146px;
    text-align: center;
    border-radius: 50px;
   margin-right: 0;
  }

`