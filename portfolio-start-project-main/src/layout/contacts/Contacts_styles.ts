import styled from "styled-components";
import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";

const Form = styled.form`
  color: ${myTheme.colors.white};
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 50px;
  background-color: ${myTheme.colors.primary};

  @media ${myTheme.media.tablet} {
    padding: 30px;
    
  }

  @media ${myTheme.media.mobile} {
    padding: 20px;
    
  }

  label {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: calc((100vw - 360px) / (1440 - 360) * (30 - 20) + 20px);
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    @media ${myTheme.media.tablet} {
    width: 90%;
    }

    @media ${myTheme.media.mobile} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  }

  ${StyledButton} {
    font-size: calc((100vw - 360px) / (1440 - 360) * (25 - 20) + 20px);
    margin-top: 20px;
  }

  textarea {
    resize: none;
    height: 130px;
  }
`;

const Field = styled.input`
  font-family: Roboto, sans-serif;
  font-size: calc((100vw - 360px) / (1440 - 360) * (16 - 14) + 14px);
  border-radius: 5px;
  border: solid 2px ${myTheme.colors.grey};
  width: 60%;
  padding: 7px 15px;

  &::placeholder {
    color: ${myTheme.colors.black.light};
  }

  &:focus-visible {
    outline: 3px auto ${myTheme.colors.secondary};
  }

  @media ${myTheme.media.mobile} {
    width: 100%;
  }
`;

const Title = styled.h2`
  background-color: ${myTheme.colors.primary};
  color: ${myTheme.colors.white};
  text-align: center;
  margin-bottom: 40px;

  @media ${myTheme.media.mobile} {
margin-bottom: 0;
  }
`;

const Contacts = styled.section`
  padding: 0;
  margin-bottom: -45px;
`;

export const S = {
    Contacts,
    Title,
    Field,
    Form

}