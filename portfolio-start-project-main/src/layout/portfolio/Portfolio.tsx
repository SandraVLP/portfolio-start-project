import Fitness from "../../assets/images/fitness.png";
import Puma from "../../assets/images/puma.png";
import Sight from "../../assets/images/sight.jpeg";
import Yoga from "../../assets/images/yoga.jpeg";
import { myTheme } from "../../styles/Theme";
import { StyledButton } from "../../components/Button";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MyTitle } from "../../components/MyTitle";
import { Container } from "../../components/Container";
import { S } from "./Portfolio_styles";
import React, { useState } from "react";
import TabMenu, { tabMenuPropsType } from "./tabMenu/TabMenu";

const menuItems: Array<{status:tabMenuPropsType, title: string}> = [
  {title: "All",
status: "all"
},
  {title: "UX/UI Design",
status: "ux"
},
  {title: "Web Design",
status: "des"
},
  {title: "Front End Development",
status: "front"
},
];

const portfolioItems = [
  {
    src: Fitness, 
    alt: "Fitness",
    type: "ux"
  },
  {
    src: Sight,
    alt: "Sight",
    type: "des"
  },
  {
    src: Puma,
    alt: "Puma",
    type: "des"
  },
  {
    src: Yoga, 
    alt: "Yoga",
    type: "front"
  }
]

export const Portfolio: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all")

  let filteredPortfolio = portfolioItems

if (currentFilterStatus === "ux") {
  filteredPortfolio =  portfolioItems.filter(portfolio => portfolio.type === "ux")
}
if (currentFilterStatus === "des") {
  filteredPortfolio =  portfolioItems.filter(portfolio => portfolio.type === "des")
}
if (currentFilterStatus === "front") {
  filteredPortfolio =  portfolioItems.filter(portfolio => portfolio.type === "front")
}

function changeFilterStatus (value: tabMenuPropsType) {
  setCurrentFilterStatus(value)
}
  return (
    <section id="works" className="Portfolio">
      <Container>
        <FlexWrapper direction="column">
          <MyTitle text="My recent works" />
          <TabMenu tabItems={menuItems} changeFilterStatus={changeFilterStatus} />
          <FlexWrapper
            wrap="wrap"
            justify="center"
            gap="25px"
            padding="0 0 95px 0"
          >
            {filteredPortfolio.map((i, index) => {
              return (
                <S.Image src={i.src} alt={i.alt} key={index} />
              )
            })}
            {/* <S.Image src={Fitness} alt="Fitness"></S.Image>
            <S.Image src={Sight} alt="Sight"></S.Image>
            <S.Image src={Puma} alt="Puma"></S.Image>
            <S.Image src={Yoga} alt="Yoga"></S.Image> */}
          </FlexWrapper>
          <StyledButton color={myTheme.colors.white}>See more</StyledButton>
        </FlexWrapper>
      </Container>
    </section>
  );
};
