import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: linear-gradient(300.73deg, #010D42 16.05%, #394165 74.68%);
        color: #fff;
        -webkit-font-smoothing: antialised;
    }       

    body, input, button {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }
`;