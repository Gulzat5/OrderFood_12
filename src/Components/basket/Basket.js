import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import styled from "styled-components";
import { CardContext } from "../../store/Card-contex";
export const Basket = ({ onToggle }) => {
  const { items, getTotalAmount, onRemoveItem } = useContext(CardContext);
  return (
    <Modal>
      <Content>
        {items.length ? (
          <FixedWidthContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  DecrementHandler={onRemoveItem}
                  item={item}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                  id={item.id}
                ></BasketItem>
              );
            })}
          </FixedWidthContainer>
        ) : null}
        <TotalAmount getTotalAmount={getTotalAmount()} onClose={onToggle} />
      </Content>
    </Modal>
  );
};
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;
const FixedWidthContainer = styled.div`
  max-height: 250px;
  overflow-y: scroll;
`;
