import styled from "styled-components";
import { Theme } from "../../../Styles/GlobalTheme";

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;
`;
export const Banner = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${Theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  > h2 {
    width: 80%;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  }
  > p {
    font-weight: 500;
    font-size: 36px;
    line-height: 32px;
    letter-spacing: -0.01em;
    width: 80%;
    margin-top: 30px;
  }
`;
export const Termometro = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 30px 10%;

  > h3 {
    font-weight: 500;
    font-size: 36px;
    line-height: 32px;
    color: ${Theme.primary};
    letter-spacing: -0.01em;
  }

  > h2 {
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
    letter-spacing: -0.02em;
  }

  > p {
    width: 60%;
    font-weight: normal;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: -0.01em;
  }
`;

export const Grafico = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Card= styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: ${Theme.secundary};
    padding: 10px;
    border-radius: 15px;
    text-align: center;
    margin: 60px
`
