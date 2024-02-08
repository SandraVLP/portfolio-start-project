import styled from "styled-components";
import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";
import { MyTitle } from "../../components/MyTitle";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export function Contacts() {
  return (
    <section id="contacts" className="Contacts">
      <Container>
        <FlexWrapper direction="column">
          {" "}
          <MyTitle text="Contact me" />
          <StyledForm>
            <label id="name">
              Name:
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
              ></input>{" "}
            </label>
            <label id="email">
              Email:
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              ></input>
            </label>
            <label id="subject">
              Subject:
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
              ></input>
            </label>
            <label id="message">
              Message:
              <textarea
                id="message"
                name="message"
                placeholder="Message"
              ></textarea>
            </label>
            <StyledButton width={"180px"} type="submit">
              Submit
            </StyledButton>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </section>
  );
}

const StyledForm = styled.form`
  margin-top: 70px;
  max-width: 545px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 3px ${myTheme.primary};
  border-radius: 20px;
  padding: 100px;
  background-color: ${myTheme.secondary};

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  textarea {
    display: flex;
    justify-content: space-between;
  }
`;
