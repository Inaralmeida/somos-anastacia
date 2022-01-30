import styled from "styled-components";
import { Theme } from "../../../Styles/GlobalTheme";

export const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: space-around;
  padding: 30px 20px;
  background-color: ${Theme.blackLigth};
  color: ${Theme.gray};

  > .vertical {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    > .redes {
      > p {
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 20px;
      }
      > div > img {
        width: 20%;
      }
    }

    form {
      > p {
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
      }
      > small {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
      }

      > fieldset {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        margin: 15px 0;

        > input {
          height: 50px;
          width: 55%;
          border-radius: 6px;
          background-color: transparent;
          border: 1px solid ${Theme.gray};
          padding-left: 5px;
          color: ${Theme.gray};
        }
      }

      > .miudas {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  > .horizontal{
      width: 30%;
      height: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      > .tagFooter{
          width: 30%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          > p{
              margin-bottom: 50px;
          }
          > small{
              margin-bottom: 80px;
          }
      }
  }
`;
