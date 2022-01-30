import React from "react";
import styled from "styled-components";
import { Theme } from "../../../Styles/GlobalTheme";

interface ICardAssedioProps {
  text: string;
  number: number;
  symbol: string;
}

const CardAssedio = ({ text, number, symbol }: ICardAssedioProps) => {
  return (
    <Card>
      <h2>
        {number}
        {symbol}
      </h2>
      <p>{text}</p>
    </Card>
  );
};

export default CardAssedio;

const Card = styled.div`
  width: 20%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.14));
  background-color: ${Theme.gray};

  > h2 {
    color: ${Theme.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
`;
