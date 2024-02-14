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

export function Services() {
  return (
    <S.Services id="service" className="services">
      <Container>
        <FlexWrapper direction="column">
          <MyTitle text="What I do" />
          <S.List className="service-list">
            <div>
              <img src={Ux} alt="UX"></img>
              <p> UX/UI Design</p>
            </div>
            <div>
              <img src={Front} alt="Front"></img>
              <p>Front End Development</p>
            </div>
            <div>
              <img src={Resp} alt="Resp"></img>
              <p>Responsive Design</p>
            </div>
          </S.List>
          <FlexWrapper direction="column">
            <Service
              title={"UX/UI design"}
              description={"Research, Design, Prototype, and Animation"}
              link="/ux"
              src={Work1}
              alt="Ux design"
            ></Service>
            <Service
              title="Front end development"
              description="Implement UX design into live and user friendly"
              link="/front"
              src={Yoga}
              alt="Yoga"
            ></Service>
            <Service
              title="Responsive design"
              description="I build landing pages and responsive websites and web App"
              link="/resp"
              src={Sight}
              alt="Sight"
            ></Service>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Services>
  );
}
