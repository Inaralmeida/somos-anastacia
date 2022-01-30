import styled from "styled-components";
import { Theme } from "../../Styles/GlobalTheme";

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;

  > section {
    flex: 1;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 10%;

    > img {
      width: 380px;
    }

    &.espaco {
      > div {
        width: 40%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        > p {
          font-size: 28px;
          line-height: 26px;
        }
      }
    }
    &.sobre {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      background-color: ${Theme.black};
      color: ${Theme.white};
      text-align: center;
      padding: 50px 10%;
      > p {
        font-weight: 500;
        font-size: 36px;
        line-height: 32px;
        text-align: center;
        letter-spacing: -0.01em;
      }
      > small {
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: ${Theme.secundary};
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          color: ${Theme.primary};
          transform: scale(1.3);
        }
      }
    }
    &.anastacia {
      height: 450px;

      > article {
        width: 50%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        > p {
          font-size: 24px;
          line-height: 28px;
        }

        > small {
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
          color: ${Theme.primary};
          opacity: 0.8;
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            color: ${Theme.primary};
            transform: scale(1.3);
            opacity: 1;
          }
        }
      }
    }
    &.parceiros {
      flex-direction: column;
      > small {
        font-weight: 275;
        font-size: 18px;
        line-height: 20px;
        width: 50%;
        text-align: center;
      }

      > div {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        height: 50%;

        > .par {
          display: block;
          width: 150px;
          height: 40px;
          line-height: 40px;
          background-color: ${Theme.black};
          color: ${Theme.primary};
          text-align: center;
          list-style: none;
          flex: none;
          margin: 10px;
          border-radius: 6px;
          transition: all 0.2s;

          &:hover {
            transform: scale(1.09);
          }
        }
      }
    }
    &.ciclo {
      height: auto;
      flex-direction: column;

      > div {
        flex: 1;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        > article {
          width: 30%;
          > p {
            font-weight: normal;
            font-size: 24px;
            line-height: 28px;
          }
          > small {
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: ${Theme.primary};
          }
        }

        > img {
          width: 40%;
        }
      }
    }
    &.dados {
      height: 100vh;
      flex-direction: column;
      align-items: center;

      > div {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
      }
    }
    &.quizz {
      width: 100%;
      background-color: ${Theme.primary};
      justify-content: space-around;

      > img {
        width: 30px;
      }
    }
    &.relatos {
      flex-direction: column;

      > article {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        > div {
          width: 30%;
          height: 150px;
          background-color: ${Theme.gray};
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: inherit;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
        }
      }
    }
  }
`;

export const Subtitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 55px;
  &.ciclo {
    text-align: center;
    width: 70%;
  }
  &.dados {
    width: 110%;
    height: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(/assets/img/img-section-5-home.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;
  }
`;
