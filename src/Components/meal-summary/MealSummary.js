import styled from "styled-components";
import summaryImage from "../../assets/Img/pexels-alexy-almond-3756523 1.png";
import { MealSummaryCard } from "./MealSummaryCard";
export const MealSummary = () => {
  return (
    <ConstContainer>
      <Container src={summaryImage} alt="summary" />
      <MealSummaryCard></MealSummaryCard>
    </ConstContainer>
  );
};
const ConstContainer = styled.div`
  width: 100%;
`;
const Container = styled.img`
  width: 100%;
  height: 432px;
`;
