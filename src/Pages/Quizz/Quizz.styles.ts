import styled from "styled-components";
import { Theme } from "../../Styles/GlobalTheme";

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;

  .descricao {
    width: 80%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px 0;
    > article {
      width: 60%;
      height: 60%;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      justify-content: space-around;

      > h2 {
        font-weight: bold;
        font-size: 48px;
        line-height: 55px;
        letter-spacing: -0.02em;
      }
      p {
        font-weight: normal;
        font-size: 28px;
        line-height: 26px;
        letter-spacing: -0.01em;
      }
      small {
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: ${Theme.primary};

        > input[type="checkbox"] {
          accent-color: ${Theme.primary};
          border-color: ${Theme.primary};
          margin-right: 10px;
          width: 20px;
          cursor: pointer;
        }
      }
    }
  }

  .contentBanner {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.primary};
    &.secundary {
      background-color: ${Theme.secundary};
      color: ${Theme.black};
    }
  }
`;
