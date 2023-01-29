import { createGlobalStyle } from "styled-components";
import variables from "@/styles/variables";
import fonts from '@/styles/fonts';

const GlobalStyle = createGlobalStyle`
    ${variables}
    ${fonts}
    
    html {
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: overlay; 
        scroll-behaviour: smooth; 
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html, body{
        width: 100%;
        overscroll-behavior: none;
        min-height: 100%;
        /*   height: 100%; */
    }

    body {
        position: relative;
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: var(--dark);
        overflow-x: hidden;
        overflow-y: overlay;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        @media (max-width: 320px) {
            word-break: break-all;
        }
    }
    
    :root {

        .pill__btn {
            padding: 1rem 4rem;
            background-color: var(--dark);
            color: var(--white);
            margin-top: 2rem;
            font-size: 16px;
            font-weight: 600;
            border: 2px solid var(--white);
            border-radius: 50px;
            transition: .3s ease-in-out;
            cursor: pointer;
            text-decoration: none;
        }

        .pill__btn:hover {
            background-color: var(--white);
            color: var(--dark);
        }

        .block {
            height: 100px;
        }
        
    }   
`;

export default GlobalStyle;