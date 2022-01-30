import BannerQuiz from "../../Components/Common/BannerQuiz/BannerQuiz";
import Footer from "../../Components/Common/Footer/Footer";
import Header from "../../Components/Common/Header/Header";
import { Theme } from "../../Styles/GlobalTheme";
import * as S from "./Quizz.styles";

const Quizz = () => {
  const quizInfos = [
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
      path: "/quiz/relacionamento",
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
      <Header page="Quiz" />
      <section className="descricao">
        <article>

        <h2>Como funciona o quiz?</h2>
        <p>
          Não sabe se as situações que você enfrenta com podem ser consideradas
          como violência? Os Quizzes abaixo podem te ajudar! Cada quizz
          apresenta cerca de 20 perguntas. Reserve um tempo para respondê-los.
        </p>
        <small>
          <input type="checkbox" name="" id="" />
          Declaro que li e concordo com a Politica de Privacidade e os termos de
          uso
        </small>
        </article>
        <img src="/assets/img/Banner-quiz.png" alt="Interrogação" />
      </section>
      {quizInfos.map((quiz, i) => {
        return (
          <div key={i} className={i %2 !== 0 ? ' contentBanner secundary' : 'contentBanner'}>
            <BannerQuiz
              descricao={quiz.descricao}
              nome={quiz.nome}
              path={quiz.path}
              colorText={i %2 !== 0 ? Theme.black : Theme.white}
            />
          </div>
        );
      })}

      <Footer />
    </S.Container>
  );
};

export default Quizz;
