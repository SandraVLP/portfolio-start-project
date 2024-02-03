import Work1 from "../../assets/images/works-1.jpeg";
import Resp from "../../assets/images/resp.png";
import Ux from "../../assets/images/ux.png";
import Front from "../../assets/images/front.png";
import styled from "styled-components";

export function Services() {
  return (
    <section className="service">
      <h2>What I do</h2>
      <StyledList className="service-list">
        <li>
          <img src={Ux} alt="UX"></img>
          UX/UI Design{" "}
        </li>
        <li>
          <img src={Front} alt="Front"></img>Front End Development{" "}
        </li>
        <li>
          <img src={Resp} alt="Resp"></img>Responsive Design
        </li>
      </StyledList>
      <div className="service-about">
        <StyledDescription className="service-description">
          <span>UX/ ui design</span>
          <h3>Research, Design, Prototype, and Animation</h3>
          <a>Learn more</a>
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
  border: solid 1px rgba(196, 196, 196, 1);
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

const StyledList = styled.ul `
    margin-bottom: 120px;
`