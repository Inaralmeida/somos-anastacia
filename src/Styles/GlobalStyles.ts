import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

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

    #root{
        --primary: #DE0B8D;
        --secundary: #FECBF1;
        --white: #FFFFFF;
        --blackLigth: #0F0F0F;
        --black: #000;
        --fontText: 'Montserrat', sans-serif;
    }
`;
