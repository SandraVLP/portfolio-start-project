import Work1 from "../../assets/images/works-1.jpeg";
import Resp from "../../assets/images/resp.svg";
import Ux from "../../assets/images/ux.svg";
import Front from "../../assets/images/front.svg";
import styled from "styled-components";
import Yoga from "../../assets/images/yoga.jpeg";
import Sight from "../../assets/images/sight.jpeg";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Service } from "./service/Service";
import { MyTitle } from "../../components/MyTitle";
import { Container } from "../../components/Container";

export function Services() {
  return (
    <section id="service" className="services">
      <Container>
        <FlexWrapper direction="column">
          <MyTitle text="What I do" />
          <StyledList className="service-list">
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
          </StyledList>
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
    </section>
  );
}

const StyledList = styled.div`
  margin-bottom: 120px;
  margin-top: 90px;
  display: flex;

  div {
    display: flex;
    align-items: center;
    max-width: 300px;
    margin-right: 30px;

    img {
      width: 120px;
      border-radius: 20px;
      padding: 25px;
      background-color: rgba(45, 76, 255, 0.13);
    }

    &:first-child {
      img {
        background-color: rgba(15, 191, 97, 0.2);
      }
    }

    &:last-child {
      margin-right: 0;

      img {
        background-color: rgba(15, 191, 97, 0.05);
      }
    }
  }

  p {
    font-size:calc((100vw - 360px) /  (1440 - 360) * (20 - 16) + 16px);
    font-weight: 500;
    margin-left: 30px;
  }
`;
