import styled from "styled-components";
import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";
import { MyTitle } from "../../components/MyTitle";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <Container>
        <FlexWrapper direction="column" justify="center">
          {" "}
          <StyledForm>
          <Title> Contact me</Title>
            <label id="name">
              Name:
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Name"
              ></Field>{" "}
            </label>
            <label id="email">
              Email:
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              ></Field>
            </label>
            <label id="subject">
              Subject:
              <Field
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
              ></Field>
            </label>
            <label id="message">
              Message:
              <Field as={"textarea"}
                id="message"
                name="message"
                placeholder="Message"
              ></Field>
            </label>
            <StyledButton width={"180px"} type="submit" color={myTheme.primary} bgcolor={myTheme.white}>
              Submit
            </StyledButton>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </section>
  );
}

const StyledForm = styled.form`
  color: ${myTheme.white};
  margin-top: 70px; 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 50px;
  background-color: ${myTheme.primary};

  label {
    width: 50%;
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;

    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  ${StyledButton} {
    margin-top: 20px;
  }
`;

const Field = styled.input`
border-radius: 5px;
border: solid 2px ${myTheme.grey};
width: 60%;
padding: 7px 15px;
  
`

const Title = styled.h2`
font-size: 40px;
font-weight: 700;
line-height: 30px;
   background-color: ${myTheme.primary};
   color: ${myTheme.white};
   text-align: center;
   margin-bottom: 40px;
`