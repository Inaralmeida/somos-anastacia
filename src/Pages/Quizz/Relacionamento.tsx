import BannerQuiz from "../../Components/Common/BannerQuiz/BannerQuiz";
import Header from "../../Components/Common/Header/Header";
import * as S from "./Questionarios.styles";
import db from "../../data/quizz.json";
import Questao from "../../Components/Common/Questao/Questao";
import { useEffect, useState } from "react";
import ButtoAction from "../../Components/Common/ButtoAction/ButtoAction";
import ResultadosQuiz from "../../Components/Common/ResultadosQui/ResultadosQuiz";

const Relacionamento = () => {
  const dataRelacionamento = db.relacionamento;
  const [exibirResultados, setExibirResultados] = useState(false);
  const detalhesBanner = {
    nome: "Meu relacionamento é abusivo?",
    descricao:
      "Faça o quiz e lorem ispum sit amet doloslorem ispum sit amet dolos lorem ispum sit amet dolos",
    path: "/quiz/trabalho",
  };
  const [salvaResposta, setSalvaResposta] = useState<any>([]);
  const [porcentageBarraDeProgresso, setPorcentageBarraDeProgresso] =
    useState(0);
  const handleAddResposta = (type: string, id: number, pontuacao: number) => {
    setSalvaResposta([
      ...salvaResposta,
      { id: id, type: type, pontucao: pontuacao },
    ]);
  };

  useEffect(() => {
    setPorcentageBarraDeProgresso(
      (100 / dataRelacionamento.length) * salvaResposta.length
    );
  }, [salvaResposta, dataRelacionamento]);
  return (
    <S.Container>
      <Header page="" />
      {!exibirResultados ? (
        <>
      <section className="banner">
        <BannerQuiz
          descricao={detalhesBanner.descricao}
          nome={detalhesBanner.nome}
          path={detalhesBanner.path}
        />
      </section>
          <S.ProgressBar>
            <S.LinhaProgress
              lenght={porcentageBarraDeProgresso}
            ></S.LinhaProgress>
          </S.ProgressBar>

          <S.CampoDeQuestoes>
            {dataRelacionamento.map((pergunta, ind) => {
              return (
                <Questao
                  key={ind}
                  id={ind}
                  titulo={pergunta.pergunta}
                  respostas={pergunta.respostas}
                  tipo={pergunta.tipo}
                  handleAddResposta={handleAddResposta}
                />
              );
            })}
          </S.CampoDeQuestoes>
          <ButtoAction
            text="Enviar respostas"
            color="pink"
            onclick={() => setExibirResultados(true)}
          />
        </>
      ) : (
        <ResultadosQuiz resultados={salvaResposta} nome='Relacionameto Abusivo' descricao='Termómetro da Relação Amorosa' />
      )}
    </S.Container>
  );
};

export default Relacionamento;
