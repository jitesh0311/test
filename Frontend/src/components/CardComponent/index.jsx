import React from "react";
import {
  LeftSection,
  ImageWrapper,
  CardContainer,
  Heading,
  Description,
  Card,
  ImageContainer,
} from "../../styles/SignUp/index.jsx";
import Load from "../../assests/CardComponent/Vector2.png";
import AI from "../../assests/CardComponent/Group.png";
import Sec from "../../assests/CardComponent/Vector.png";


const cardData = [
  {
    image: Load,
    bgColor: "#EBF3FF",
    heading: "Load Testing",
    description:
      "ur platform ensures peak performance by simulating real-world user loads efficiently and accurately.",
  },
  {
    image: AI,
    bgColor: "#FFFDCF",
    heading: "AI Recommendations",
    description:
      "Optimize load and security testing with intelligent, data-driven insights for enhanced performance and safety..",
  },
  {
    image: Sec,
    bgColor: "#CFFFE0",
    heading: "Security Testing",
    description:
      "Safeguard your applications by identifying vulnerabilities and ensuring robust protection against threats.",
  },
];
const CardComponent = () => {
  return (
    <LeftSection>
      <CardContainer>
        {cardData.map((card, index) => (
          <Card key={index}>
            <ImageContainer bgColor={card.bgColor}>
              <ImageWrapper src={card.image} alt={card.heading} />
            </ImageContainer>
            <Heading>{card.heading}</Heading>
            <Description>{card.description}</Description>
          </Card>
        ))}
      </CardContainer>
    </LeftSection>
  );
};

export default CardComponent;
