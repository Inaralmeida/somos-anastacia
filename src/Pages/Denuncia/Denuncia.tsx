import { useNavigate } from "react-router";
import ButtoAction from "../../Components/Common/ButtoAction/ButtoAction";
import Footer from "../../Components/Common/Footer/Footer";
import Header from "../../Components/Common/Header/Header";
import * as S from "./Denuncia.styles";

const Denuncia = () => {
  const navigation = useNavigate()
  return (
    <S.Container>
      <Header page={"denuncia"} />
      <section className='descricao'>
        <h2>Fazer Denúncia</h2>
        <p>
          A Somos Anastácia é lorem ipsum sit amet lorem ipsum sit amet lorem
          ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum{" "}
        </p>
      </section>
      <form action="">
        <label htmlFor="" className='tpEst'>Tipo de Estabelecimento</label>
        <section className='radios'>
          <fieldset>
            <input type="radio" name="Estabelecimento" id="Estabelecimento" />
            <label htmlFor="">Escola</label>
          </fieldset>
          <fieldset>
            <input type="radio" name="Estabelecimento" id="Estabelecimento" />
            <label htmlFor="">Universidade</label>
          </fieldset>
          <fieldset>
            <input type="radio" name="Estabelecimento" id="Estabelecimento" />
            <label htmlFor="">Empresa</label>
          </fieldset>
        </section>
        <fieldset className='nome'>
          <label htmlFor="">Nome do Estabelecimento</label>
          <input type="text" placeholder="Ex: E.E. Prof ..." />
        </fieldset>
        <fieldset className='relato'>
          <label htmlFor="">Relato</label>
          <small>
            A Somos Anastácia é lorem ipsum sit amet lorem ipsum sit amet lorem
            ipsum sit amet lorem ipsum sit amet lorem ipsum sit amet lorem ipsum{" "}
          </small>
          <textarea
            name=""
            id=""
            placeholder="Descreva o que houve..."
          ></textarea>
        </fieldset>
      </form>
      <div className='button'>
      <ButtoAction text='DENUNCIAR AGORA!'color='pink'
      onclick={()=>navigation('/denuncias')}/>
      
      </div>
      <Footer />
    </S.Container>
  );
};

export default Denuncia;
