import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
    @font-face{
        font-family: 'BM Dohyeon';
        src: local('BM Dohyeon');
    }

    body {
        font-family: 'BM Dohyeon', sans-serif;
        background-color: #FFFEFA;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
`;
