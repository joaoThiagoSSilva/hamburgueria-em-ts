import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Inter", sans-serif;
    }
    
    *::-webkit-scrollbar {
        display: none;
    }
    
    body {
        width: 100%;
        height: 100vh;
        background-color: var(--color-white);
        padding-bottom: 2rem;
    }
    
    button {
        cursor: pointer;
        border: none;
        background: transparent;
        transition: 0.2s;
    }

    a {
        color: unset;
        text-decoration: none;
    }

    ul, ol, li {
        list-style: none;
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secundary: #EB5757;
        
        --color-white: #FFFFFF;
        --color-black: #000000;

        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #168821;
        --color-information: #155BCB;

        --toastify-color-success: #168821;
        --toastify-color-error: #E60000;
        --toastify-font-family: "Inter", sans-serif;
    }
`;
