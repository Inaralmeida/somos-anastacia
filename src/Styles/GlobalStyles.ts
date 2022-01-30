import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body, html, #root{
        width: 100%;
        min-height: 100vh;
    }

    button{
        cursor: pointer;
    }
`;
