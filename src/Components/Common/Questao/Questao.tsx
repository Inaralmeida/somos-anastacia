import { useState } from "react";
import * as S from "./Questao.styles";

interface IQuestaoProps {
  id: number;
  titulo: string;
  tipo: string;
  respostas: {
    opcao: string | any;
    pontuacao: number;
  }[];
  handleAddResposta: (tipo: string, id: number, pontucao: number) => void;
}

const Questao = ({
  id,
  titulo,
  tipo,
  respostas,
  handleAddResposta,
}: IQuestaoProps) => {
  const [escolha, setEscolha] = useState("");

  const handleClick = (pontuacao: number, opcao: string) => {
    handleAddResposta(tipo, id + 1, pontuacao);
    setEscolha(opcao);
  };

  return (
    <S.Container>
      <header>
        <h2>{id + 1}.</h2>
        <h3>{titulo}</h3>
      </header>
      <div>
        {respostas.map((resp, i) => {
          const { opcao, pontuacao } = resp;
          return (
            <div
              key={i}
              onClick={() => handleClick(pontuacao, opcao)}
              className={escolha === opcao ? "escolhida" : ""}
            >
              {i + 1}) {resp.opcao}
            </div>
          );
        })}
      </div>
    </S.Container>
  );
};

export default Questao;
