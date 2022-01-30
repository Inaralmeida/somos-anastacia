import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Theme } from "../../../Styles/GlobalTheme";
import ButtoAction from "../ButtoAction/ButtoAction";

interface IBannerQuizProps {
  nome: string;
  descricao: string;
  path: string;
  colorText?: string
}

const BannerQuiz = ({ nome, descricao, path, colorText=Theme.white}: IBannerQuizProps) => {
  const navigate = useNavigate();
  return (
    <Banner style={{color: colorText}}>
      <h2>Quiz: {nome}</h2>
      <p>{descricao}</p>
      <ButtoAction
        color="black"
        text="Começar Quiz"
        onclick={() => navigate(path)}
      />
    </Banner>
  );
};

export default BannerQuiz;

const Banner = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > h2 {
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
  }

  > p {
    width: 30%;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: inherit;
  }
`;
