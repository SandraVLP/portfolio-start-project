import { Icon } from "../../../components/Icon";
import { S } from "./service_styles";

type ServicePropsType = {
  title?: string;
  description?: string;
  src?: string;
  alt?: string;
  link?: string;
};

export const Service = (props: ServicePropsType) => {
  return (
    <S.Description>
      <S.Info>
        <p>{props.title}</p>
        <S.TextDescription>{props.description}</S.TextDescription>
        <a href={props.link}>
          Learn more
          <Icon iconId="arrow" width="27px" height="22px" viewbox="0 0 27 22" />
        </a>
      </S.Info>
      <S.Image src={props.src} alt={props.alt}></S.Image>
    </S.Description>
  );
};

