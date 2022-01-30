import styled from "styled-components";
import { Theme } from "../../../Styles/GlobalTheme";

export const Container = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10%;
  background-color: ${Theme.black};
  letter-spacing: -0.01em;

  >h1{
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  > nav {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: ${Theme.gray};
  }
`;
