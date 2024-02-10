import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus-visible{
 outline: 3px auto ${myTheme.colors.secondary};;
    }

    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
}


h1 {
  font-family: Poppins;
  font-size: 60px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: 0em;
  color: ${myTheme.colors.black.dark};
  
  @media ${myTheme.media.tablet}{
    font-size: 40px;
    line-height: 60px;
    }

    @media ${myTheme.media.mobile}{
      font-size: 30px;
    }
}

p {
  color: ${myTheme.colors.black.light};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;

  @media ${myTheme.media.tablet}{
    font-size: 16px;
    line-height: 25px;
    }

    @media ${myTheme.media.mobile}{
      font-size: 14px;
    }
}

section {
  font-family: Roboto;
  padding-bottom: 140px;
  @media ${myTheme.media.tablet}{
    padding-bottom: 100px;
    }
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  
  margin: 0 auto;
  padding: 0;  
}

a {
  text-decoration: none;

text-decoration: none;
color: ${myTheme.colors.black.dark};
}
  `;
