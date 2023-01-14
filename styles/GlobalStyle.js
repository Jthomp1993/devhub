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
        width: 100%;
        height: 100%; 
        scroll-behaviour: smooth;
        overscroll-behavior: none;
        
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    body {
        position: relative;
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        min-height: 100%;
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

        
    }   
`;

export default GlobalStyle;