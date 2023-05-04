import styled from "styled-components";
import { OrdetBusket } from "./OrderBusket";
export const Header = () => {
  return (
    <Container>
      <h1> ReacrMeals</h1>
      <OrdetBusket> Your card </OrdetBusket>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #8a2b06;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
