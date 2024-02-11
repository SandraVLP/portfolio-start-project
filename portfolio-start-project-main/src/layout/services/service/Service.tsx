import { Icon } from "../../../components/Icon";
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
      <ServiceInfo className="service-info">
        <p>{props.title}</p>
        <StyledTextDescription>{props.description}</StyledTextDescription>
        <a href={props.link}>
          Learn more
          <Icon iconId="arrow" width="27px" height="22px" viewbox="0 0 27 22" />
        </a>
      </ServiceInfo>
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
  height: 400px;
  display: flex;
  flex-wrap: wrap-reverse;

  div {
    max-width: 380px;
  }

  svg {
    margin-left: 25px;
  }
`;

const StyledImg = styled.img`
  max-width: 554px;
  max-height: 390px;
  position: absolute;
  top: -45px;
  right: 50px;
  border-radius: 20px;
  width: 60%;
`;

const StyledTextDescription = styled.h3`
  margin: 35px 0 70px 0;
`;

const ServiceInfo = styled.div`
  width: 40%;
`;
