import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Contacts_styles";

export const Contacts: React.FC =() => {
  return (
    <S.Contacts id="contacts" className="contacts">
      <Container>
        <FlexWrapper direction="column" justify="center">
          <S.Form>
            <S.Title> Contact me</S.Title>
            <label htmlFor="name" aria-labelledby="name">
              Name:
              <S.Field
                aria-placeholder="Name"
                id="name"
                type="text"
                name="name"
                placeholder="Name"
              ></S.Field>
            </label>
            <label htmlFor="email" aria-labelledby="email">
              Email:
              <S.Field
                aria-placeholder="Email"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              ></S.Field>
            </label>
            <label htmlFor="subject" aria-labelledby="subject">
              Subject:
              <S.Field
                aria-placeholder="Subject"
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
              ></S.Field>
            </label>
            <label htmlFor="message" aria-labelledby="message">
              Message:
              <S.Field
                as={"textarea"}
                aria-placeholder="Message"
                id="message"
                name="message"
                placeholder="Message"
              ></S.Field>
            </label>
            <StyledButton
              type="submit"
              color={myTheme.colors.primary}
              bgcolor={myTheme.colors.white}
            >
              Submit
            </StyledButton>
          </S.Form>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
}
