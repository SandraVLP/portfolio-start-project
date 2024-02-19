import Work1 from "../../assets/images/works-1.jpeg";
import Resp from "../../assets/images/resp.svg";
import Ux from "../../assets/images/ux.svg";
import Front from "../../assets/images/front.svg";
import Yoga from "../../assets/images/yoga.jpeg";
import Sight from "../../assets/images/sight.jpeg";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Service } from "./service/Service";
import { MyTitle } from "../../components/MyTitle";
import { Container } from "../../components/Container";
import { S } from "./Services_styles";
import React from "react";
import { ListItem } from "./ListItem";

const serviceData = [
  {
    title: "UX/UI design",
    description: "Research, Design, Prototype, and Animation",
    link: "/ux",
    src: Work1,
    alt: "Ux design",
  },
  {
    title: "Front end development",
    description: "Implement UX design into live and user friendly",
    link: "/front",
    src: Yoga,
    alt: "Yoga",
  },
  {
    title: "Responsive design",
    description: "I build landing pages and responsive websites and web App",
    link: "/resp",
    src: Sight,
    alt: "Sight",
  },
];

const serviceList = [
  {
    title: "UX/UI Design",
    src: Ux,
    alt: "UX",
  },
  {
    title: "Front End Development",
    src: Front,
    alt: "Front",
  },
  {
    title: "Responsive Design",
    src: Resp,
    alt: "Resp",
  },
];
export const Services: React.FC = () => {
  return (
    <S.Services id="service" className="services">
      <Container>
        <FlexWrapper direction="column">
          <MyTitle text="What I do" />
          <S.List className="service-list">
            {serviceList.map((item, index) => {
              return (
                <ListItem key={index} title={item.title} src={item.src} alt={item.alt} />
              );
            })}
          </S.List>
          <FlexWrapper direction="column">
            {serviceData.map((s, index) => {
              return (
                <Service
                  key={index}
                  title={s.title}
                  description={s.description}
                  link={s.link}
                  src={s.src}
                  alt={s.alt}
                ></Service>
              );
            })}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Services>
  );
};
