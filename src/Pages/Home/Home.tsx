import { useState } from "react";
import { useNavigate } from "react-router";
import BannerQuiz from "../../Components/Common/BannerQuiz/BannerQuiz";
import ButtoAction from "../../Components/Common/ButtoAction/ButtoAction";
import CardAssedio from "../../Components/Common/CardAssedio/CardAssedio";
import Header from "../../Components/Common/Header/Header";
import Contato from "../../Components/Common/Contato/Contato";
import * as S from "./Home.styles";
import Footer from "../../Components/Common/Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [numberQuiz, setNumberQuiz] = useState(0);
  const parceiros = [
    "Ifood",
    "Uber",
    "Buser",
    "AWS",
    "AzMina",
    "SCM",
    "Prefeitura SP",
    "Resilia Ed.",
  ];
  const quizz = [
    {
      nome: "Tô sofrendo assédio no trabalho?",
      descricao:
        "Faça o quiz e lorem ispum sit amet doloslorem ispum sit amet dolos lorem ispum sit amet dolos",
      path: "/quiz/trabalho",
    },
    {
      nome: "Meu relacionamento é abusivo?",
      descricao:
        "Faça o quiz e lorem ispum sit amet doloslorem ispum sit amet dolos lorem ispum sit amet dolos",
      path: "/quiz/trabalho",
    },
    {
      nome: "Tô sofrendo assédio na escola/Faculdade?",
      descricao:
        "Faça o quiz e lorem ispum sit amet doloslorem ispum sit amet dolos lorem ispum sit amet dolos",
      path: "/quiz/escola",
    },
  ];
  return (
    <S.Container>
      <Header page="home" />
      <section className="espaco">
        <div>
          <S.Subtitle>Somos um espaço Seguro</S.Subtitle>
          <p>
            Os ciclos de violência muitas vezes são silenciosos. Mas como
            identificar tipos, causas e abusadores?
          </p>
          <ButtoAction
            color="pink"
            text="Denunciar"
            onclick={() => navigate("/denuncias")}
          />
        </div>

        <img src="/assets/img/img-section-1-home.png" alt="ilustração" />
      </section>

      <section className="sobre">
        <S.Subtitle>Sobre</S.Subtitle>
        <p>
          A Somos Anastácia é lorem ipsum sit amet lorem ipsum sit amet lorem
          ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum{" "}
        </p>

        <small onClick={() => navigate("/artigo")}>
          Saiba mais sobre violência contra a mulher{" "}
        </small>
      </section>

      <section className="anastacia">
        <img src="/assets/img/img-section-2-home.png" alt="Anastácia" />
        <article>
          <S.Subtitle>Quem é Anastácia</S.Subtitle>
          <p>
            Anastácia - Mulher Escravizada é uma personalidade religiosa de
            devoção popular brasileira, cultuada informalmente pela realização
            de supostos milagres.
          </p>
          <small onClick={() => navigate("/artigo")}>
            Saiba mais sobre violência contra a mulher{" "}
          </small>
        </article>
      </section>

      <section className="parceiros">
        <S.Subtitle>Conheça nossos Parceiros</S.Subtitle>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </small>
        <div>
          {parceiros.map((parceiro, index) => {
            return (
              <p className="par" key={index}>
                {parceiro}
              </p>
            );
          })}
        </div>
      </section>

      <section className="ciclo">
        <S.Subtitle className="ciclo">
          O ciclo da violência é contínuo e silencioso. mas nós te ajudamos a
          quebrá-lo e ter voz!
        </S.Subtitle>
        <div>
          <img src="/assets/img/img-section-4-home.png" alt="Um circulo" />

          <article>
            <p>
              Aqui vai um texto sobre o ciclo da violência e como mulheres tem
              dificuldade de quebrá-lo.
            </p>
            <small onClick={() => navigate("/artigo")}>
              Saiba mais sobre violência contra a mulher{" "}
            </small>
          </article>
        </div>
      </section>

      <section className="dados">
        <S.Subtitle className="dados">Dados sobre assédio</S.Subtitle>
        <div>
          <CardAssedio
            text="Lorem ipsum sit amet dolor"
            number={59}
            symbol="%"
          />
          <CardAssedio
            text="Lorem ipsum sit amet dolor"
            number={59}
            symbol="%"
          />
          <CardAssedio
            text="Lorem ipsum sit amet dolor"
            number={59}
            symbol="%"
          />
          <CardAssedio
            text="Lorem ipsum sit amet dolor"
            number={59}
            symbol="%"
          />
        </div>
      </section>

      <section className="quizz">
        <img
          src="/assets/icons/arrow-left.svg"
          alt="botão slider para esquerda"
          onClick={() => {
            if (numberQuiz > 0) {
              setNumberQuiz(numberQuiz - 1);
            } else {
              setNumberQuiz(quizz.length - 1);
            }
          }}
        />
        <BannerQuiz
          nome={quizz[numberQuiz].nome}
          descricao={quizz[numberQuiz].descricao}
          path={quizz[numberQuiz].path}
        />
        <img
          src="/assets/icons/arrow-rigth.svg"
          alt="botão slider para direita"
          onClick={() => {
            if (numberQuiz < quizz.length - 1) {
              setNumberQuiz(numberQuiz + 1);
            } else {
              setNumberQuiz(0);
            }
          }}
        />
      </section>

      <section className="relatos">
        <S.Subtitle>
          Você não está sozinha 
        </S.Subtitle>

        <article>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            reiciendis laboriosam ea quaerat nemo saepe unde! Nisi perspiciatis,
            impedit magni sint nostrum molestiae dolorum quam. Laudantium
            architecto neque in tenetur.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            reiciendis laboriosam ea quaerat nemo saepe unde! Nisi perspiciatis,
            impedit magni sint nostrum molestiae dolorum quam. Laudantium
            architecto neque in tenetur.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            reiciendis laboriosam ea quaerat nemo saepe unde! Nisi perspiciatis,
            impedit magni sint nostrum molestiae dolorum quam. Laudantium
            architecto neque in tenetur.
          </div>
        </article>
      </section>

      <section className='contato'>
          <Contato/>
      </section>
      <Footer/>
    </S.Container>
  );
};

export default Home;
