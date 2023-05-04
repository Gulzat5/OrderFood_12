import React from "react";
import styled from "styled-components";

export const Button = ({
  children,
  width,
  height,
  color,
  bgColor,
  padding,
  fontSize,
  fontWeight,
  hover,
  actColor,
  borderRadius,
  Left,
}) => {
  return (
    <MyButton
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      hvColor={hover}
      actColor={actColor}
      borderRadius={borderRadius}
    >
      {children}
    </MyButton>
  );
};

const MyButton = styled.button`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  color: ${(p) => p.color};
  background-color: ${(p) => p.bgColor};
  padding: ${(p) => p.padding};
  font-size: ${(p) => p.fontSize};
  font-weight: ${(p) => p.fontWeight};
  border-radius: ${(p) => p.borderRadius};
  border: none;
  &:hover {
    background: ${(p) => p.hover};
  }
  &:active {
    background: ${(p) => p.actColor};
  }
  cursor: pointer;
`;
