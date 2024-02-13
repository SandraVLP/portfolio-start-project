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
  font-family: 'Roboto', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
}


h1 {
  font-family: Poppins;
  font-size: calc((100vw - 360px) /  (1440 - 360) * (60 - 50) + 50px);
  line-height: max(2vh,70px);
  font-weight: 700;
  color: ${myTheme.colors.black.dark};
  
  @media ${myTheme.media.tablet}{

    }

    @media ${myTheme.media.mobile}{

    }
}

h2 {
  font-size: calc((100vw - 360px) /  (1440 - 360) * (40 - 30) + 30px);
  font-weight: 700;
  margin-bottom: 80px;

  @media ${myTheme.media.tablet} {
    margin-bottom: 40px;
    
  }

}

h3 {

font-size: calc((100vw - 360px) /  (1440 - 360) * (35 - 30) + 30px);
font-weight: 700;
line-height: 45px;
@media ${myTheme.media.tablet}{
  line-height: 35px;
}

}

p {
  color: ${myTheme.colors.black.light};

  font-size: calc((100vw - 360px) /  (1440 - 360) * (18 - 14) + 14px);
  font-weight: 400;
  text-align: left;
}

section {

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
color: ${myTheme.colors.black.dark};
}
  `;
