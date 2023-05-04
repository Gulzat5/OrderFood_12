import React from "react";
import styled from "styled-components";

export const Input = () => {
  return (
    <div>
      <Label>
        Amount
        <Inputt type="number" min={1} max={5} defaultValue={1} />{" "}
      </Label>
    </div>
  );
};

const Inputt = styled.input`
  width: 60px;
  height: 32px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
`;
const Label = styled.label`
  width: 75px;
  height: 27px;
  font-weight: 600;
  font-size: 18px;
  color: #222222;
`;
