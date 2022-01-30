import { useNavigate } from "react-router";
import { Theme } from "../../../Styles/GlobalTheme";
import ButtoAction from "../ButtoAction/ButtoAction";
import CardAssedio from "../CardAssedio/CardAssedio";
import Footer from "../Footer/Footer";
import * as S from "./ResultadosQuiz.styles";

interface IResultadosQuizProps {
  resultados: { id: number; type: string; pontucao: number }[];
  nome: string;
  descricao: string;
}

const ResultadosQuiz = ({
  resultados,
  descricao,
  nome,
}: IResultadosQuizProps) => {
  const navigate = useNavigate();

  const resultadoPronto = [
    
    {
      chave: "Psicológico",
      valor: 25,
      cor: Theme.primary
    },
    {
      chave: "Físico",
      valor: 20,
      cor: Theme.gray
    },
    {
      chave: "Moral",
      valor: 10,
      cor: Theme.blackLigth
    },
    {
      chave: "Sexual",
      valor: 5,
      cor: Theme.secundary
    },
    {
      chave: "Patrimonial",
      valor: 15,
      cor: "#EF5DA8"
    },
  ];
  return (
    <S.Container>
      <S.Banner>
        <h2>Quiz: {nome}</h2>
        <p>confira seu resultado</p>
      </S.Banner>
      <S.Termometro>
        <img src="/assets/img/termometro.png" alt="termometro" />
        <h3>{descricao}</h3>
        <h2>Resultado:</h2>
        <p>
          Apesar de sua relação de trabalho apresentar poucos sinais de
          violência, é preciso ficar atenta. Saiba que a violência contra a
          mulher é contínua e silenciosa e só vai parar quando for denunciada e
          os agressores punidos.
        </p>
        <strong>Gostaria de registrar uma denúncia?</strong>
        <ButtoAction
          text="Denunciar"
          color="pink"
          onclick={() => navigate("/denuncia")}
        />
      </S.Termometro>

      <S.Grafico>
          

        <S.Card>
          <h2>Moral - {resultadoPronto[2].valor} Pts</h2>
          <p>
            Apesar de sua relação de trabalho apresentar poucos sinais de
            violência, é preciso ficar atenta. Saiba que a violência contra a
            mulher é contínua e silenciosa e só vai parar quando for denunciada
            e os agressores punidos. Gostaria de registrar uma denúncia?
          </p>
        </S.Card>
        <S.Card>
          <h2>Patrimonial - {resultadoPronto[2].valor} Pts</h2>
          <p>
            Apesar de sua relação de trabalho apresentar poucos sinais de
            violência, é preciso ficar atenta. Saiba que a violência contra a
            mulher é contínua e silenciosa e só vai parar quando for denunciada
            e os agressores punidos. Gostaria de registrar uma denúncia?
          </p>
        </S.Card>
        <S.Card>
          <h2>Física - {resultadoPronto[1].valor} Pts</h2>
          <p>
            Apesar de sua relação de trabalho apresentar poucos sinais de
            violência, é preciso ficar atenta. Saiba que a violência contra a
            mulher é contínua e silenciosa e só vai parar quando for denunciada
            e os agressores punidos. Gostaria de registrar uma denúncia?
          </p>
        </S.Card>
        <S.Card>
          <h2>Psicológica - {resultadoPronto[0].valor} Pts</h2>
          <p>
            Apesar de sua relação de trabalho apresentar poucos sinais de
            violência, é preciso ficar atenta. Saiba que a violência contra a
            mulher é contínua e silenciosa e só vai parar quando for denunciada
            e os agressores punidos. Gostaria de registrar uma denúncia?
          </p>
        </S.Card>
        <S.Card>
          <h2>Sexual - {resultadoPronto[3].valor} Pts</h2>
          <p>
            Apesar de sua relação de trabalho apresentar poucos sinais de
            violência, é preciso ficar atenta. Saiba que a violência contra a
            mulher é contínua e silenciosa e só vai parar quando for denunciada
            e os agressores punidos. Gostaria de registrar uma denúncia?
          </p>
        </S.Card>
      </S.Grafico>
      <Footer/>
    </S.Container>
  );
};

export default ResultadosQuiz;
