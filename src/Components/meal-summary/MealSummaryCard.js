import styled from "styled-components";

export const MealSummaryCard = () => {
  return (
    <Container>
      <h3> Delicious Food, Delivered To You</h3>
      <Paragraph>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunchor dinner at home.
      </Paragraph>
      <Paragraph>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </Paragraph>
    </Container>
  );
};
const Container = styled.div`
  padding: 0px 20px;
  position: absolute;
  width: 854px;
  height: 270px;
  left: 293px;
  top: 358px;
  height: 270px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 54px;
    color: white;
    text-align: center;
  }
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: white;
  text-align: center;
`;
