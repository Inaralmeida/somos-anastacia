import styled from "styled-components";
import { Theme } from "../../../Styles/GlobalTheme";

export const Container = styled.div`
  width: 50%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;

  > header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > h2 {
      font-size: 48px;
      margin-right: 10px;
    }
  }

  > div {
    width: 80%;

    > div {
      height: 50px;
      line-height: 50px;
      padding-left: 15px;
      cursor: pointer;
      :hover {
        background-color: ${Theme.secundary};
      }
    }
  }

  .escolhida {
    background-color: black;
    color: ${Theme.primary};
  }
`;
