import Work1 from "../../assets/images/works-1.jpeg";
import Resp from "../../assets/images/resp.png";
import Ux from "../../assets/images/ux.png";
import Front from "../../assets/images/front.png";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme";

export function Services() {
  return (
    <section className="service">
      <h2>What I do</h2>
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
      <div className="service-about">
        <StyledDescription className="service-description">
          <span>UX/UI design</span>
          <h3>Research, Design, Prototype, and Animation</h3>
          <a href="/ux">Learn more</a>
          <StyledImg src={Work1} alt="Ux design"></StyledImg>
        </StyledDescription>
        {/* <StyledDescription className="service-description">
          <span>UX/ ui design</span>
          <h3>Research, Design, Prototype, and Animation</h3>
          <a>Learn more</a>
          <StyledImg src={Work1} alt="Ux design"></StyledImg>
        </StyledDescription>
        <StyledDescription className="service-description">
          <span>UX/ ui design</span>
          <h3>Research, Design, Prototype, and Animation</h3>
          <a>Learn more</a>
          <StyledImg src={Work1} alt="Ux design"></StyledImg>
        </StyledDescription> */}
        {/* ВСЕ ЛОМАЕТСЯ */}
      </div>
    </section>
  );
}

const StyledDescription = styled.div`
  border: solid 1px ${myTheme.grey};
  border-radius: 30px;
  position: relative;
  padding: 50px;
  margin-bottom: 65px;
`;

const StyledImg = styled.img`
  max-width: 554px;
  max-height: 390px;
  position: absolute;
  top: -45px;
  right: 50px;
  border-radius: 20px;
`;

const StyledList = styled.div`
  margin-bottom: 120px;
  display: flex;

  div {
    display: flex;
    align-items: center;
    max-width: 300px;
    margin-right: 30px;
   
    img {
      width: 120px;
      border-radius: 20px;
      background-color: rgba(45, 76, 255, 0.13);
    }

    &:first-child{

      img{
        background-color: rgba(15, 191, 97, 0.2);
      }
    }

    &:last-child{
      margin-right: 0;

      img{
        background-color: rgba(15, 191, 97, 0.05);
      }
    }
  }

  p {
    margin-left: 30px;
  }
`;
