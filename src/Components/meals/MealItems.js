import React, { useContext } from "react";
import styled from "styled-components";
import { MealItemForm } from "./MealItemForm";
import { CardContext } from "../../store/Card-contex";

export const MealItems = ({ meal }) => {
  const context = useContext(CardContext);

  const AddItem = (amount) => {
    const data = {
      title: meal.title,
      price: meal.price,
      description: meal.description,
      amount: +amount,
      id: meal.id,
    };

    context.AddItem(data);
  };

  return (
    <Container>
      <StyledMealItem>
        <h4>{meal.title}</h4>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </StyledMealItem>
      <MealItemForm inputd={meal.id} onAdd={AddItem} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid #d6d6d6;

  :last-child {
    border-bottom: none;
  }
  margin-top: 20px;

  :first-child {
    margin-top: 0px !important;
  }
`;
const StyledMealItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;

  h4 {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
    margin-top: 20px;
  }

  h4:first-child {
    margin-top: 0px;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    color: #222222;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;
