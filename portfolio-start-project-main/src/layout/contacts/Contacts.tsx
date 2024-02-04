import styled from "styled-components";
import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";

export function Contacts() {
  return (
    <section className="Contacts">
      <StyledForm>
        <StyledLabel>
          Name
          <input type="text" name="name" placeholder="Name"></input>{" "}
        </StyledLabel>
        <StyledLabel>
          Email
          <input type="email" name="email" placeholder="Email"></input>
        </StyledLabel>
        <StyledLabel>
          Subject
          <input type="text" name="subject" placeholder="Subject"></input>
        </StyledLabel>
        <StyledLabel>
          Message
          <textarea placeholder="Message"></textarea>
        </StyledLabel>
        <StyledButton width={"180px"} type="submit">
          Submit
        </StyledButton>
      </StyledForm>
    </section>
  );
}

const StyledForm = styled.form`
  max-width: 545px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 3px ${myTheme.primary};
  border-radius: 20px;
  padding: 100px;
  background-color: ${myTheme.secondary};
`;

const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
