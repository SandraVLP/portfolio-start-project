import styled from "styled-components";
import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export function Contacts() {
  return (
    <StyledContacts id="contacts" className="contacts">
      <Container>
        <FlexWrapper direction="column" justify="center">
          {" "}
          <StyledForm>
            <Title> Contact me</Title>
            <label htmlFor="name" aria-labelledby="name">
              Name:
              <Field
                aria-placeholder="Name"
                id="name"
                type="text"
                name="name"
                placeholder="Name"
              ></Field>{" "}
            </label>
            <label htmlFor="email" aria-labelledby="email">
              Email:
              <Field
                aria-placeholder="Email"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              ></Field>
            </label>
            <label htmlFor="subject" aria-labelledby="subject">
              Subject:
              <Field
                aria-placeholder="Subject"
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
              ></Field>
            </label>
            <label htmlFor="message" aria-labelledby="message">
              Message:
              <Field
                as={"textarea"}
                aria-placeholder="Message"
                id="message"
                name="message"
                placeholder="Message"
              ></Field>
            </label>
            <StyledButton
              type="submit"
              color={myTheme.colors.primary}
              bgcolor={myTheme.colors.white}
            >
              Submit
            </StyledButton>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
}

const StyledForm = styled.form`
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

  label {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: calc((100vw - 360px) /  (1440 - 360) * (30 - 25) + 25px);
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  ${StyledButton} {
    font-size: calc((100vw - 360px) /  (1440 - 360) * (25 - 20) + 20px);
    margin-top: 20px;
  }

  textarea {
    resize: none;
    height: 130px;
  }
`;

const Field = styled.input`
font-family: Roboto, sans-serif;
font-size: calc((100vw - 360px) /  (1440 - 360) * (16 - 14) + 14px);
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
`;

const Title = styled.h2`
  background-color: ${myTheme.colors.primary};
  color: ${myTheme.colors.white};
  text-align: center;
  margin-bottom: 40px;
`;

const StyledContacts = styled.section`
padding: 0;
  margin-bottom: -45px;
`