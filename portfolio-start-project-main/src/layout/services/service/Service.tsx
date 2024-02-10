import { myTheme } from "../../../styles/Theme";
import styled from "styled-components";

type ServicePropsType = {
  title?: string;
  description?: string;
  src?: string;
  alt?: string;
  link?: string;
};

export const Service = (props: ServicePropsType) => {
  return (
    <StyledDescription className="service-description">
      <div className="service-info">
        <p>{props.title}</p>
        <StyledTextDescription>{props.description}</StyledTextDescription>
        <a href={props.link}>Learn more</a>
      </div>
<StyledImg src={props.src} alt={props.alt}></StyledImg>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  width: 100%;
  border: solid 1px ${myTheme.colors.grey};
  border-radius: 30px;
  position: relative;
  padding: 50px;
  margin-bottom: 80px;
  height: 50vh;

  div {
    max-width: 380px;
  }
`;

const StyledImg = styled.img`
  max-width: 554px;
  max-height: 390px;
  position: absolute;
  top: -45px;
  right: 50px;
  border-radius: 20px;
`;

const StyledTextDescription = styled.h3`
  margin: 35px 0 70px 0;
`;

