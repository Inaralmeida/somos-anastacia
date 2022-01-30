import React from "react";
import styled from "styled-components";
import { Theme } from "../../../Styles/GlobalTheme";
import ButtoAction from "../ButtoAction/ButtoAction";

const Contato = () => {
  return (
    <Container>
      <section>
        <h2>Fale com a gente</h2>
        <form action="">
          <input type="text" placeholder="Nome" />
          <input type="e-mail" placeholder="Email" />
          <textarea placeholder="Digite sua mensagem"></textarea>
        </form>
        <ButtoAction
          color="pink"
          text="Enviar Mensagem"
          onclick={(e) => e.preventDefault()}
        />
      </section>
      <article>
        <Card className="disque">
          <p>181</p>
          <small>Disque Denúncia</small>
        </Card>
        <Card className="numero">
          <p>0300 015 7575</p>
          <small>Demais Localidades</small>
        </Card>
        <Card className="numero">
          <p>0800 770 1236</p>
          <small>Ouvidoria</small>
        </Card>
        <Card className="atendimento">
          <p>Atendimento de 2ª a 6ª feira, das 8h às 21h</p>
          <small>Para mais informações, acesse:</small>
        </Card>
        <Card className="atendimento">
          <p>Atendimento Online</p>
          <small>Para ser atendido via chat, clique no botão abaixo. </small>
        </Card>
      </article>
    </Container>
  );
};

export default Contato;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > section {
    width: 45%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    > h2 {
      font-weight: bold;
      font-size: 48px;
      line-height: 55px;
      letter-spacing: -0.02em;
    }

    > form {
      width: 80%;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      > input {
        height: 40px;
        border-radius: 7px;
        border: 2px solid ${Theme.gray};
        padding-left: 5px;
        outline: none;
      }
      > textarea {
        height: 80px;
        border-radius: 7px;
        border: 2px solid ${Theme.gray};
        padding-left: 5px;
        resize: none;
        outline: none;
      }
    }
  }
  > article {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
const Card = styled.div`
  width: 25%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 20px;
  font-size: 18px;

  &.disque > p {
    font-weight: bold;
    font-size: 48px;
  }
  &.atendimento {
    width: 100%;
  }
`;
