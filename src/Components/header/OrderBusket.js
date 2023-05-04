import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Group.svg";
export const OrdetBusket = ({ children }) => {
  return (
    <Button>
      <BasketIcon /> <OrderTitle>{children}</OrderTitle>{" "}
      <OrderBasketCount>7</OrderBasketCount>
    </Button>
  );
};
const Button = styled.button`
  border: none;
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background-color: #4d1601;
  }
`;
const OrderTitle = styled.span`
  width: 78px;
  height: 24px;
  left: 1157px;
  top: 35px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;
const OrderBasketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  display: inline-block;
  padding: 4px 13px;
  color: white;
`;
