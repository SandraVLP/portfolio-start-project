import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin:0;
        padding: 0;
        box-sizing: border-box;
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
      color: rgba(0, 0, 0, 1);
      
      }

      h2 {
  color:rgba(15, 191, 97, 1);
  font-family: Roboto;
font-size: 40px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: center;

}

p {
  color: rgba(73, 73, 73, 1);
  font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;

}

section {
  padding-bottom: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  
  margin: 0 auto;
  padding: 0;  
}

button {
  max-width: 214px;
  height: 54px;
  background-color: rgba(15, 191, 97, 1);
  border: none;
  border-radius: 20px;
  padding: 12px 40px 12px 40px;
}
`;
