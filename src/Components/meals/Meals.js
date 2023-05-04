import styled from "styled-components";
import { product } from "./MealsItems";
import React from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
export const Meals = () => {
  return (
    <Container>
      <CardContainer>
        {product.map((el) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MapContainer key={el.id}>
              <div>
                <h3>{el.title}</h3>
                <Info>{el.about}</Info>
                <Price>${el.price}</Price>
              </div>
              <div>
                <AmountContainer>
                  <Input />
                  <Button
                    width="99px"
                    height="41px"
                    bgColor=" #8A2B06"
                    color="#fff"
                    fontSize="14px"
                    fontWeight="700"
                    borderRadius="20px"
                    hover="#7E2A0A"
                    actColor="#993108"
                  >
                    {" "}
                    + Add
                  </Button>
                </AmountContainer>
              </div>
            </MapContainer>
            <span>
              <Line></Line>
            </span>
          </div>
        ))}
      </CardContainer>
    </Container>
  );
};

const AmountContainer = styled.div`
  Input {
    margin-left: 20px;
  }

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Price = styled.p`
  color: #ad5502;
  width: 67px;
  height: 30px;
  left: 301px;
  top: 567px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;
const Info = styled.p`
  line-height: 30px;
  font-family: "Poppins";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`;

const Container = styled.div`
  background: #383838;
  width: 100%;
  height: 800px;
`;
const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 1040px;
  height: 564px;
  position: absolute;
  left: 201px;
  top: 668px;
  align-items: center;
`;
const MapContainer = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
  margin-top: 45px;
  align-items: start;
`;

const Line = styled.section`
  width: 959px;
  height: 0px;
  left: 241px;
  margin-left: 7px;

  border: 1px solid #d6d6d6;

  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
`;
