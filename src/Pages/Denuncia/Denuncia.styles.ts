import styled from "styled-components";
import { Theme } from "../../Styles/GlobalTheme";

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;

  .descricao {
    background: ${Theme.primary};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 30vh;
    padding: 0 10%;

    h2 {
      font-weight: 500;
      font-size: 64px;
      line-height: 75px;
    }

    p > {
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
    }
  }

  > form {
    width: 100%;
    padding: 400px 10% 20px 10%;
    background-image: url(/assets/img/megafone.png);
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: 30%;
  }

  .tpEst {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
  }
  .radios {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > fieldset {
      border: none;
      margin: 20px 0;
      > input[type="radio"] {
        margin-right: 10px;
      }
    }
  }
  #Estabelecimento {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  .nome {
    width: 100%;
    height: 150px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 30px;
    > label {
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
    }

    > input {
      width: 100%;
      height: 50px;
      border: 2px solid ${Theme.gray};
      padding-left: 10px;
      outline: none;
      color: #000;
      background-color: #f7f7f7;
    }
  }

  .relato {
    width: 100%;
    height: 350px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 30px;
    > label {
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
    }
    > small {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
    }
    > textarea {
      width: 100%;
      height: 150px;
      border: 2px solid ${Theme.gray};
      padding-left: 10px;
      outline: none;
      color: #000;
      background-color: #f7f7f7;
      resize: none;
    }
  }

  .button{
      width: 90%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
`;
