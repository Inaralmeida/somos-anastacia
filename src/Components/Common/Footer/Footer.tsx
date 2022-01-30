import ButtoAction from "../ButtoAction/ButtoAction";
import * as S from "./Footer.styles";

const Footer = () => {
  return (
    <S.Container>
      <section className="vertical">
        <div className="redes">
          <p>Redes sociais</p>
          <div>
            <img src="/assets/icons/Instagram.svg" alt="icon Instagram" />
            <img src="/assets/icons/Facebook.svg" alt="icon Facebook" />
            <img src="/assets/icons/LinkedIn.svg" alt="icon Linkedin" />
            <img src="/assets/icons/Twitter.svg" alt="icon Twitter" />
          </div>
        </div>

        <form action="">
          <p>NewsLetter</p>
          <small>Para ser atendido via chat, clique no botão abaixo. </small>
          <fieldset>
            <input type="email" placeholder="Email" />
            <ButtoAction
              color="pink"
              text="Assinar"
              onclick={(e) => e.preventDefault()}
            />
          </fieldset>
          <small className="miudas">
            Banco Safra S.A. - CNPJ 58.160.789/0001-28 - Av. Paulista, 2100, São
            Paulo - SP CEP:01310-930 Contrato de Credenciamento Política de
            Privacidade Portal da Privacidade
          </small>
        </form>
      </section>
      <section className="horizontal">
        <article className='tagFooter'>
          <p>Quiz</p>
          <small>Assédio na Empresa</small>
          <small>Assédio na Escola</small>
          <small>Relações Abusivas</small>
        </article>
        <article className='tagFooter'>
          <p>Institucional</p>
          <small>Sobre</small>
          <small>Anastácia</small>
        </article>
        <article className='tagFooter'>
          <p>Política de Privacidade</p>
          <small>Aluguel Zero</small>
          <small>Taxa Zero</small>
          <small>Cashback</small>
          <small>Black Friday</small>
        </article>
      </section>
    </S.Container>
  );
};

export default Footer;
