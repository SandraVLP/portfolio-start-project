import styled from "styled-components";
import Fitness from "../../assets/images/fitness.png";
import Puma from "../../assets/images/puma.png";
import Sight from "../../assets/images/sight.jpeg";
import Yoga from "../../assets/images/yoga.jpeg";

export function Portfolio() {
  return (
    <section className="Portfolio">
      <h2>My recent works</h2>
      <ul>
        <li>All</li>
        <li>UX/UI Design</li>
        <li>Web Design</li>
        <li>Front End Development</li>
      </ul>
      <StyledContainer className="portfolio-container">
        <StyledImg src={Fitness}></StyledImg>
        <StyledImg src={Sight}></StyledImg>
        <StyledImg src={Puma}></StyledImg>
        <StyledImg src={Yoga}></StyledImg>
      </StyledContainer>
      <StyledButton>See more</StyledButton>
    </section>
  );
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 545px));
  gap: 25px;
  justify-items: center;
  margin: 95px auto; 
`;

const StyledImg = styled.img`
  width: 545px; //поправить
  max-height: 350px;
  border: solid 1px rgba(196, 196, 196, 1);
  border-radius: 36px;
`;
const StyledButton = styled.button`
  max-width: 214px;
  height: 54px;
  background-color: rgba(15, 191, 97, 1);
  border: none;
  border-radius: 20px;
  padding: 12px 40px 12px 40px;
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0 auto;
`;
