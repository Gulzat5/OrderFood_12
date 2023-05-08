import styled from "styled-components";
import { MealItems } from "./MealItems";
import { product } from "../Utils/Constantas";
export const Meals = () => {
  return (
    <Conatainer>
      {product.map((meal) => {
        return <MealItems key={meal.id} meal={meal} />;
      })}
    </Conatainer>
  );
};

const Conatainer = styled.div`
  background-color: #ffffff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
`;
